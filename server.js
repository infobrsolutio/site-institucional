import express from 'express';
import nodemailer from 'nodemailer';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const port = process.env.PORT || 80;
const contactEmail = process.env.CONTACT_TO || 'atendimento@infobrsolutio.com.br';
const smtpHost = process.env.SMTP_HOST || 'smtp.zoho.com';
const smtpPort = Number(process.env.SMTP_PORT || 465);
const smtpUser = process.env.SMTP_USER;
const smtpPass = process.env.SMTP_PASS;
const smtpFrom = process.env.SMTP_FROM || contactEmail;

app.use(express.json({ limit: '24kb' }));
app.use(express.static(path.join(__dirname, 'dist')));

const clean = (value) => String(value || '').replace(/[\r\n]+/g, ' ').trim();
const escapeHtml = (value) =>
  String(value || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

const buildLeadConfirmationHtml = ({ nome, empresa, tipoProjeto }) => {
  const safeNome = escapeHtml(nome);
  const safeEmpresa = escapeHtml(empresa || '-');
  const safeTipoProjeto = escapeHtml(tipoProjeto || '-');

  return `<!doctype html>
<html lang="pt-BR">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Recebemos seu pedido de diagnóstico</title>
  </head>
  <body style="margin:0; padding:0; background:#06111f; font-family:Arial, Helvetica, sans-serif; color:#eaf2ff;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#06111f; padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:640px; background:#0b1a2d; border:1px solid #1d3554; border-radius:8px; overflow:hidden;">
            <tr>
              <td style="padding:28px 28px 18px; background:#07172b;">
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                  <tr>
                    <td style="vertical-align:middle;">
                      <img src="https://infobrsolutio.com.br/assets/logo-square-clean.png" width="56" height="56" alt="INFoBR Solutio" style="display:block; border-radius:8px;">
                    </td>
                    <td style="vertical-align:middle; padding-left:14px;">
                      <div style="font-size:20px; line-height:1.2; font-weight:800; color:#ffffff;">INFoBR Solutio</div>
                      <div style="font-size:13px; line-height:1.5; color:#9fb7d8;">Complex made simple.</div>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding:30px 28px 10px;">
                <div style="display:inline-block; padding:7px 10px; border-radius:999px; background:#075fe4; color:#ffffff; font-size:12px; font-weight:800; letter-spacing:.02em; text-transform:uppercase;">Pedido recebido</div>
                <h1 style="margin:18px 0 12px; font-size:26px; line-height:1.25; color:#ffffff;">Recebemos seu pedido de diagnóstico</h1>
                <p style="margin:0; font-size:16px; line-height:1.65; color:#d7e6fb;">Olá, ${safeNome}. Sua mensagem chegou para a INFoBR Solutio. Vamos analisar as informações enviadas e responder em breve por este e-mail.</p>
              </td>
            </tr>
            <tr>
              <td style="padding:18px 28px;">
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#10243b; border:1px solid #27476b; border-radius:8px;">
                  <tr>
                    <td style="padding:18px 20px;">
                      <div style="font-size:13px; color:#9fb7d8; font-weight:800; text-transform:uppercase; letter-spacing:.02em;">Resumo enviado</div>
                      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin-top:12px;">
                        <tr>
                          <td style="padding:8px 0; color:#9fb7d8; font-size:14px;">Empresa</td>
                          <td align="right" style="padding:8px 0; color:#ffffff; font-size:14px; font-weight:700;">${safeEmpresa}</td>
                        </tr>
                        <tr>
                          <td style="padding:8px 0; color:#9fb7d8; font-size:14px; border-top:1px solid #27476b;">Tipo de projeto</td>
                          <td align="right" style="padding:8px 0; color:#ffffff; font-size:14px; font-weight:700; border-top:1px solid #27476b;">${safeTipoProjeto}</td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding:4px 28px 30px;">
                <p style="margin:0; font-size:15px; line-height:1.65; color:#c6d8f2;">Se quiser complementar alguma informação, basta responder este e-mail.</p>
              </td>
            </tr>
            <tr>
              <td style="padding:20px 28px; background:#07172b; border-top:1px solid #1d3554;">
                <div style="font-size:13px; line-height:1.6; color:#9fb7d8;">INFoBR Solutio<br><a href="https://infobrsolutio.com.br" style="color:#38bdf8; text-decoration:none;">infobrsolutio.com.br</a></div>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
};

app.post('/api/contact', async (request, response) => {
  const nome = clean(request.body.nome);
  const empresa = clean(request.body.empresa);
  const email = clean(request.body.email);
  const tipoProjeto = clean(request.body.tipoProjeto);
  const mensagem = String(request.body.mensagem || '').trim();

  if (!nome || !email || !mensagem) {
    return response.status(400).json({ message: 'Preencha nome, e-mail e mensagem.' });
  }

  if (!smtpUser || !smtpPass) {
    console.error('SMTP_USER or SMTP_PASS is not configured.');
    return response.status(500).json({ message: 'Envio indisponível no momento.' });
  }

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpPort === 465,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Site INFoBR Solutio" <${smtpFrom}>`,
      to: contactEmail,
      replyTo: email,
      subject: `Pedido de diagnóstico${empresa ? ` - ${empresa}` : ''}`,
      text: [
        'Novo pedido de diagnóstico pelo site.',
        '',
        `Nome: ${nome}`,
        `Empresa: ${empresa || '-'}`,
        `E-mail: ${email}`,
        `Tipo de projeto: ${tipoProjeto || '-'}`,
        '',
        'Problema que quer resolver:',
        mensagem,
      ].join('\n'),
    });

    await transporter.sendMail({
      from: `"INFoBR Solutio" <${smtpFrom}>`,
      to: email,
      replyTo: contactEmail,
      subject: 'Recebemos seu pedido de diagnóstico',
      html: buildLeadConfirmationHtml({ nome, empresa, tipoProjeto }),
      text: [
        `Olá, ${nome}.`,
        '',
        'Recebemos seu pedido de diagnóstico pela INFoBR Solutio.',
        'Vamos analisar as informações enviadas e responder em breve por este e-mail.',
        '',
        'Resumo enviado:',
        `Empresa: ${empresa || '-'}`,
        `Tipo de projeto: ${tipoProjeto || '-'}`,
        '',
        'Obrigado,',
        'INFoBR Solutio',
        'Complex made simple.',
      ].join('\n'),
    });

    return response.json({ message: 'Pedido enviado com sucesso.' });
  } catch (error) {
    console.error('Contact form delivery failed:', error);
    return response.status(500).json({ message: 'Não foi possível enviar agora.' });
  }
});

app.get(/.*/, (_request, response) => {
  response.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(port, () => {
  console.log(`INFoBR Solutio site listening on port ${port}`);
});
