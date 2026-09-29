import { Mail, Phone } from 'lucide-react';
import { Facebook, Instagram } from './BrandIcons';
import { PROFILE } from '../config';

const links = [
  { key: 'email', label: 'Email', href: `mailto:${PROFILE.email}`, Icon: Mail, external: false },
  { key: 'phone', label: 'Phone', href: PROFILE.phoneHref, Icon: Phone, external: false },
  { key: 'facebook', label: 'Facebook', href: PROFILE.facebook, Icon: Facebook, external: true },
  { key: 'instagram', label: 'Instagram', href: PROFILE.instagram, Icon: Instagram, external: true },
];

export default function SocialLinks({ iconSize = 'size-4' }) {
  return (
    <ul className="flex flex-wrap items-center gap-3">
      {links.map(({ key, label, href, Icon, external }) => (
        <li key={key}>
          <a
            href={href}
            title={label}
            target={external ? '_blank' : undefined}
            rel={external ? 'noopener noreferrer' : undefined}
            className="flex size-10 items-center justify-center rounded-full border-[1.5px] border-hairline text-muted transition hover:-translate-y-0.5 hover:border-accent-ink hover:text-accent-ink hover:shadow-accent"
          >
            <Icon className={iconSize} />
            <span className="sr-only">{label}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}
