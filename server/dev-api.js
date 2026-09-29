// Local stand-in for the Vercel function, so `npm run dev` can exercise the
// contact form without the Vercel CLI. It mounts the exact same handler, which
// means the code path you test here is the code path that runs in production.
import { createServer } from 'node:http';
import handler from '../api/contact.js';

const PORT = Number(process.env.DEV_API_PORT ?? 8787);
const MAX_BODY_BYTES = 16 * 1024;

class PayloadTooLarge extends Error {}

const readBody = req =>
  new Promise((resolve, reject) => {
    const chunks = [];
    let size = 0;
    let overflow = false;

    req.on('data', chunk => {
      // Keep draining after the cap so the client still gets a real response
      // instead of a dropped connection.
      if (overflow) return;
      size += chunk.length;
      if (size > MAX_BODY_BYTES) {
        overflow = true;
        chunks.length = 0;
        return;
      }
      chunks.push(chunk);
    });

    req.on('end', () => {
      if (overflow) reject(new PayloadTooLarge());
      else resolve(Buffer.concat(chunks).toString('utf8'));
    });
    req.on('error', reject);
  });

const server = createServer(async (req, res) => {
  const reply = (status, body) => {
    res.writeHead(status, { 'content-type': 'application/json' });
    res.end(JSON.stringify(body));
  };

  try {
    const body = req.method === 'GET' || req.method === 'HEAD' ? undefined : await readBody(req);

    const request = new Request(`http://localhost:${PORT}${req.url}`, {
      method: req.method,
      headers: req.headers,
      body,
    });

    const response = await handler(request);
    const payload = Buffer.from(await response.arrayBuffer());

    res.writeHead(response.status, Object.fromEntries(response.headers.entries()));
    res.end(payload);
  } catch (error) {
    if (error instanceof PayloadTooLarge) {
      reply(413, { error: 'Payload too large' });
      return;
    }
    console.error('[dev-api]', error);
    reply(500, { error: 'Internal error' });
  }
});

server.listen(PORT, () => {
  console.log(`[dev-api] contact endpoint ready on http://localhost:${PORT}/api/contact`);
});
