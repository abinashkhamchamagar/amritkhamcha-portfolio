import nodemailer from 'nodemailer';

const readConfig = () => ({
  host: process.env.SMTP_HOST ?? 'smtp.gmail.com',
  port: Number(process.env.SMTP_PORT ?? 465),
  // Port 465 is implicit TLS, 587 negotiates it via STARTTLS.
  secure: process.env.SMTP_SECURE ? process.env.SMTP_SECURE === 'true' : Number(process.env.SMTP_PORT ?? 465) === 465,
  user: process.env.SMTP_USER ?? '',
  pass: process.env.SMTP_APP_PASSWORD ?? '',
});

export const readRecipients = () => {
  const { user } = readConfig();
  return {
    from: process.env.MAIL_FROM ?? user,
    to: process.env.MAIL_TO ?? user,
  };
};

export const isMailerConfigured = () => {
  const { user, pass } = readConfig();
  return user !== '' && pass !== '';
};

let transporter = null;

// Built once at module scope on first use so a warm instance reuses the same
// connection across invocations. Cold starts pay the TCP+TLS handshake once.
const getTransporter = () => {
  const { host, port, secure, user, pass } = readConfig();

  transporter ??= nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass },
    // Fail fast instead of burning the whole function budget on a dead host.
    connectionTimeout: 10_000,
    greetingTimeout: 10_000,
    socketTimeout: 15_000,
  });

  return transporter;
};

export const sendMail = options => getTransporter().sendMail(options);
