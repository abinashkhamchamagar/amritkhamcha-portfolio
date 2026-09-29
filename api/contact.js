import { handleContact } from './_lib/contact.js';

export const config = { maxDuration: 15 };

const MAX_BODY_BYTES = 16 * 1024;

const clientIp = request =>
  request.headers.get('x-forwarded-for')?.split(',')[0].trim() ||
  request.headers.get('x-real-ip') ||
  'unknown';

export default async function handler(request) {
  if (request.method !== 'POST') {
    return Response.json({ error: 'Method not allowed' }, { status: 405, headers: { Allow: 'POST' } });
  }

  const declaredLength = Number(request.headers.get('content-length') ?? 0);
  if (declaredLength > MAX_BODY_BYTES) {
    return Response.json({ error: 'Payload too large' }, { status: 413 });
  }

  let payload;
  try {
    const raw = await request.text();
    if (raw.length > MAX_BODY_BYTES) {
      return Response.json({ error: 'Payload too large' }, { status: 413 });
    }
    payload = JSON.parse(raw);
  } catch {
    return Response.json({ error: 'Invalid JSON body' }, { status: 400 });
  }

  if (payload === null || typeof payload !== 'object' || Array.isArray(payload)) {
    return Response.json({ error: 'Invalid JSON body' }, { status: 400 });
  }

  const { status, body } = await handleContact(payload, clientIp(request));
  return Response.json(body, { status });
}
