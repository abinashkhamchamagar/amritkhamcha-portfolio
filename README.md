# Amrit Khamcha — Portfolio

Personal portfolio for Amrit Khamcha, Non-Gazetted First Class Surveyor (Level 5) at the
Survey Department, Government of Nepal.

## Stack

- [React 19](https://react.dev) + [Vite 8](https://vite.dev)
- [Tailwind CSS v4](https://tailwindcss.com) (CSS-first config — see `src/index.css`)
- [lucide-react](https://lucide.dev) for icons
- [Nodemailer](https://nodemailer.com) for contact form delivery, via a Vercel function (see below)
- [zod](https://zod.dev) for server-side validation
- Plain JavaScript, no TypeScript

## Commands

```bash
npm install
npm run dev       # Vite on :5173 and the contact API on :8787
npm run dev:web   # just the Vite dev server
npm run dev:api   # just the contact API
npm run build     # production build into dist/
npm run preview   # serve the production build locally
npm run lint      # eslint
```

## Contact form

Submissions go through a Vercel serverless function that sends real email over SMTP with
[Nodemailer](https://nodemailer.com). The SMTP credentials stay server-side and never reach the browser.

```
browser ──POST /api/contact──> api/contact.js ──SMTP:465──> smtp.gmail.com ──> amritkhamcha@gmail.com
```

### One-time setup

1. Turn on [2-Step Verification](https://myaccount.google.com/security) for the Google account.
2. Generate an [App Password](https://myaccount.google.com/apppasswords). Regular Gmail passwords will not
   work, and "Less Secure App" access was removed by Google in 2022, so an App Password is the only
   option short of wiring up OAuth 2.0.
3. `cp .env.example .env` and fill in `SMTP_APP_PASSWORD`.
4. On Vercel, add the same variable names as Environment Variables, mark `SMTP_APP_PASSWORD` as
   **Sensitive**, and redeploy. Env var changes only take effect on a fresh deployment.

### Local development

`npm run dev` starts two processes: Vite on 5173 and the contact API on 8787. Vite proxies `/api` to
the API, so the form works in the browser exactly as it does in production. `server/dev-api.js` mounts
the same `api/contact.js` handler that Vercel runs, so there is no second implementation to drift.

```bash
npm run dev        # web + api together
npm run dev:web    # just Vite
npm run dev:api    # just the contact API
```

### The Gmail caveat

Google actively watches for logins that look like account hijacking, and Nodemailer's own docs warn
that Gmail "is not recommended for production workloads". A Vercel function connecting from a
datacenter IP in another country is that pattern. `vercel.json` pins the function to `sin1`
(Singapore), the closest region to Nepal, which lowers the risk but does not eliminate it.

If Gmail does start refusing the connection, it is a config change, not a code change:

| Variable | Gmail | Brevo (free, 300/day) |
| --- | --- | --- |
| `SMTP_HOST` | `smtp.gmail.com` | `smtp-relay.brevo.com` |
| `SMTP_PORT` | `465` | `587` |
| `SMTP_SECURE` | `true` | `false` |
| `SMTP_USER` / `SMTP_APP_PASSWORD` | Gmail address + app password | Brevo SMTP key |

If a send fails, check the deployment logs on Vercel — the real SMTP error is logged there and never
returned to the browser.

### Spam controls

A hidden honeypot field, server-side zod validation, a 16 KB body cap, and a rate limit of 5
well-formed submissions per IP per 10 minutes. The rate limit is in-memory, so on serverless each
instance keeps its own counter; treat it as a speed bump, not a wall.

## Where to change things

| What | File |
| --- | --- |
| Name, email, phone, city, social links | `src/config.js` |
| Form endpoint path | `src/config.js` (`CONTACT_API`) |
| Hero copy, stats, image | `src/components/Hero.jsx` |
| Education, experience, personal details | `src/components/About.jsx` |
| Skill percentages, categories, soft skills | `src/components/Skills.jsx` |
| Interests and hobbies | `src/components/Interests.jsx` |
| Quick profile list | `src/components/Highlights.jsx` |
| Colour, font, shadow and animation tokens | `src/index.css` (`@theme`) |
| Page title, meta description, social preview | `index.html` |
| SMTP connection and credentials | `.env` / Vercel env vars |
| Email subject, HTML body, validation rules | `api/_lib/contact.js` |
| Function region and timeout | `vercel.json` |
