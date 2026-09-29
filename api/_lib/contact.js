import { z } from 'zod';
import { isMailerConfigured, readRecipients, sendMail } from './mailer.js';

const schema = z.object({
  firstName: z.string().trim().min(1).max(60),
  lastName: z.string().trim().min(1).max(60),
  phone: z.string().trim().max(30),
  subject: z.string().trim().max(120),
  email: z.email().max(120),
  message: z.string().trim().min(10).max(2000),
  // Honeypot. Humans never see this field, so it must stay empty.
  website: z.string().max(0),
});

const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const attempts = new Map();

// In-memory only: each serverless instance keeps its own counter, so this is a
// cheap speed bump against casual form spam, not a hard limit.
export const isRateLimited = key => {
  const now = Date.now();
  const entry = attempts.get(key);

  if (entry === undefined || now > entry.resetAt) {
    if (attempts.size > 500) {
      for (const [key_, entry_] of attempts) if (now > entry_.resetAt) attempts.delete(key_);
    }
    attempts.set(key, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }

  entry.count += 1;
  return entry.count > MAX_PER_WINDOW;
};

export const escapeHtml = value =>
  value.replace(
    /[&<>"']/g,
    char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char],
  );

const row = (label, value) => `
      <tr>
        <td style="padding:6px 16px 6px 0;color:#6b7280;white-space:nowrap;vertical-align:top">${label}</td>
        <td style="padding:6px 0;color:#111827">${escapeHtml(value)}</td>
      </tr>`;

export const handleContact = async (payload, clientIp) => {
  if (!isMailerConfigured()) {
    return { status: 503, body: { error: 'Email is not configured on the server yet.' } };
  }

  const parsed = schema.safeParse(payload);
  if (!parsed.success) {
    const first = parsed.error.issues[0];
    return { status: 400, body: { error: `${first.path.join('.') || 'form'}: ${first.message}` } };
  }

  // Counted only once the payload is well formed, so a visitor who fumbles the
  // form cannot lock themselves out without ever sending anything.
  if (isRateLimited(clientIp)) {
    return { status: 429, body: { error: 'Too many messages. Please try again in a few minutes.' } };
  }

  const { firstName, lastName, phone, subject, email, message } = parsed.data;
  const { from, to } = readRecipients();
  const name = `${firstName} ${lastName}`;

  try {
    const info = await sendMail({
      from: `"Portfolio Contact" <${from}>`,
      to,
      replyTo: `"${name}" <${email}>`,
      subject: subject === '' ? `New message from ${name}` : `${subject} — from ${name}`,
      text: [
        `Name:    ${name}`,
        `Email:   ${email}`,
        `Phone:   ${phone === '' ? 'Not provided' : phone}`,
        `Subject: ${subject === '' ? 'No subject' : subject}`,
        '',
        message,
      ].join('\n'),
      html: `<div style="font-family:system-ui,-apple-system,'Segoe UI',sans-serif;max-width:600px">
    <h2 style="margin:0 0 16px;font-size:18px">New message from ${escapeHtml(name)}</h2>
    <table style="border-collapse:collapse;font-size:14px;width:100%">
      ${row('Email', email)}${row('Phone', phone === '' ? 'Not provided' : phone)}${row('Subject', subject === '' ? 'No subject' : subject)}
    </table>
    <p style="margin:20px 0 6px;font-size:14px;color:#6b7280">Message</p>
    <div style="white-space:pre-wrap;font-size:14px;line-height:1.6">${escapeHtml(message)}</div>
  </div>`,
    });

    return { status: 200, body: { ok: true, messageId: info.messageId } };
  } catch (error) {
    // The client never sees SMTP internals; the details live in Vercel logs.
    console.error('[contact] send failed', error);
    return { status: 502, body: { error: 'Could not send your message. Please try again shortly.' } };
  }
};
