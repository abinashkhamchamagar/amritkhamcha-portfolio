// The contact form posts here. On Vercel this is the serverless function in
// api/contact.js; in `npm run dev` Vite proxies it to server/dev-api.js. The
// SMTP credentials live in server-side env vars and never reach the browser.
export const CONTACT_API = '/api/contact';

export const PROFILE = {
  name: 'Amrit Khamcha',
  email: 'amritkhamcha@gmail.com',
  phone: '9844774732',
  phoneHref: 'tel:+9779844774732',
  city: 'Dhulikhel, Nepal',
  organization: 'Survey Department, Government of Nepal',
  role: 'Non-Gazetted First Class Surveyor — Level 5',
  facebook: 'https://www.facebook.com/AmritKhamcha',
  instagram: 'https://www.instagram.com/ajax_ak/',
};
