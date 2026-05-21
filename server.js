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
