import { useEffect, useState } from 'react';
import { Building, Check, CircleAlert, LoaderCircle, Mail, MapPin, Phone } from 'lucide-react';
import SectionHeading from './SectionHeading';
import SocialLinks from './SocialLinks';
import { CONTACT_API, PROFILE } from '../config';

const emptyForm = { firstName: '', lastName: '', phone: '', subject: '', email: '', message: '', website: '' };

const field =
  'w-full rounded-[10px] border border-line bg-surface px-4 py-[13px] text-[0.9rem] text-ink outline-none transition placeholder:text-faint focus:border-accent-ink focus:shadow-[0_0_0_3px_rgb(249_247_241/0.1)]';

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const contactItems = [
  { Icon: Phone, value: PROFILE.phone, href: PROFILE.phoneHref },
  { Icon: Mail, value: PROFILE.email, href: `mailto:${PROFILE.email}` },
  { Icon: MapPin, value: PROFILE.city },
  { Icon: Building, value: PROFILE.organization },
];

export default function Contact() {
  const [form, setForm] = useState(emptyForm);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');

  useEffect(() => {
    if (status !== 'sent') return;
    const timer = setTimeout(() => {
      setStatus('idle');
      setError('');
    }, 6000);
    return () => clearTimeout(timer);
  }, [status]);

  const update = event => {
    const { name, value } = event.target;
    setForm(current => ({ ...current, [name]: value }));
    if (status === 'error') {
      setStatus('idle');
      setError('');
    }
  };

  const validate = () => {
    const firstName = form.firstName.trim();
    const lastName = form.lastName.trim();
    const email = form.email.trim();
    const message = form.message.trim();

    if (!firstName || !lastName) return 'Please enter your first and last name.';
    if (!emailPattern.test(email)) return 'Please enter a valid email address.';
    if (message.length < 10) return 'Please write a slightly longer message (at least 10 characters).';
    return null;
  };

  const handleSubmit = async event => {
    event.preventDefault();
    if (status === 'sending') return;

    const invalid = validate();
    if (invalid) {
      setError(invalid);
      setStatus('error');
      return;
    }

    // Honeypot: real people never fill a hidden field, so silently drop bots.
    if (form.website.trim() !== '') return;

    setStatus('sending');
    setError('');

    try {
      const response = await fetch(CONTACT_API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(result.error ?? 'Could not send your message. Please try again.');
      }

      setForm(emptyForm);
      setStatus('sent');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Could not send your message. Please try again.');
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="bg-bg-alt py-[90px] max-[600px]:py-[60px]">
      <div className="mx-auto max-w-[1100px] px-6">
        <SectionHeading title="Contact" accent="Me" subtitle="Feel free to reach out, I'm open to connecting" />

        <div className="grid gap-12 grid-cols-[1fr_1.4fr] max-[900px]:grid-cols-1">
          <div className="flex flex-col gap-[18px]">
            <div>
              <p className="mb-1 font-display text-[1.6rem] font-extrabold">
                AK<span className="text-accent">.</span>
              </p>
              <p className="text-[0.88rem] leading-[1.7] text-muted">
                I work as a Surveyor under the Survey Department, Government of Nepal. I&rsquo;m happy to connect
                with anyone interested in geomatics, surveying, GIS, or just want to say hello.
              </p>
            </div>

            <ul className="flex flex-col gap-[18px]">
              {contactItems.map(({ Icon, value, href }) => {
                const body = (
                  <>
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-line bg-accent/10 text-accent">
                      <Icon className="size-4" />
                    </span>
                    <span>{value}</span>
                  </>
                );

                return (
                  <li key={value} className="text-[0.88rem] text-muted">
                    {href ? (
                      <a href={href} className="flex items-center gap-3.5 transition-colors hover:text-ink">
                        {body}
                      </a>
                    ) : (
                      <span className="flex items-center gap-3.5">{body}</span>
                    )}
                  </li>
                );
              })}
            </ul>

            <SocialLinks />
          </div>

          <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-3.5">
            <div className="grid grid-cols-2 gap-3.5 max-[600px]:grid-cols-1">
              <div>
                <label htmlFor="firstName" className="sr-only">
                  First Name
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  className={field}
                  placeholder="First Name"
                  value={form.firstName}
                  onChange={update}
                  required
                  maxLength={60}
                />
              </div>
              <div>
                <label htmlFor="lastName" className="sr-only">
                  Last Name
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  className={field}
                  placeholder="Last Name"
                  value={form.lastName}
                  onChange={update}
                  required
                  maxLength={60}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3.5 max-[600px]:grid-cols-1">
              <div>
                <label htmlFor="phone" className="sr-only">
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  className={field}
                  placeholder="Phone (optional)"
                  value={form.phone}
                  onChange={update}
                  maxLength={30}
                />
              </div>
              <div>
                <label htmlFor="subject" className="sr-only">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  className={field}
                  placeholder="Subject (optional)"
                  value={form.subject}
                  onChange={update}
                  maxLength={120}
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className={field}
                placeholder="Email"
                value={form.email}
                onChange={update}
                required
                maxLength={120}
              />
            </div>

            <div>
              <label htmlFor="message" className="sr-only">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className={`${field} min-h-[130px] resize-y`}
                placeholder="Message"
                value={form.message}
                onChange={update}
                required
                minLength={10}
                maxLength={2000}
              />
            </div>

            <div className="hidden" aria-hidden="true">
              <label htmlFor="website">Website</label>
              <input
                id="website"
                name="website"
                type="text"
                tabIndex={-1}
                autoComplete="off"
                value={form.website}
                onChange={update}
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="btn btn-primary w-full disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === 'sending' && <LoaderCircle className="size-4 animate-spin" />}
              {status === 'sent' && <Check className="size-4" />}
              {status === 'sending' ? 'Sending…' : status === 'sent' ? 'Message Sent!' : 'Submit'}
            </button>

            <p aria-live="polite" className="text-[0.8rem]">
              {status === 'error' && (
                <span className="flex items-center gap-2 text-accent">
                  <CircleAlert className="size-4 shrink-0" />
                  {error}
                </span>
              )}
              {status === 'sent' && (
                <span className="flex items-center gap-2 text-muted">
                  <Check className="size-4 shrink-0" />
                  Thanks for reaching out &mdash; I&rsquo;ll reply to the address you gave.
                </span>
              )}
              {status === 'idle' && (
                <span className="text-faint">
                  Or email me directly at{' '}
                  <a href={`mailto:${PROFILE.email}`} className="text-muted underline underline-offset-2">
                    {PROFILE.email}
                  </a>
                  .
                </span>
              )}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
