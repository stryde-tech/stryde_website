import { Link } from 'react-router-dom';
import logo from '../assets/stryde_logo.png';

const footerLinks = [
  { label: 'Home', to: '/' },
  { label: 'Nexus', to: '/nexus' },
  { label: 'Story', to: '/story' },
  { label: 'For Brands', to: '/brands' },
  { label: 'Team', to: '/story' },
  { label: 'Privacy Policy', to: '/privacy' },
  { label: 'Partnerships', to: '/brands' },
];

const socials = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/stryde.today?igsh=bmtqZDIwdmVjMGpk&utm_source=qr',
    icon: InstagramIcon,
  },
  {
    label: 'X',
    href: 'https://x.com/stryde_running?s=20',
    icon: XIcon,
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/company/strydetoday',
    icon: LinkedInIcon,
  },
  {
    label: 'Email',
    href: 'mailto:hq.stryde@gmail.com',
    icon: EmailIcon,
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-border px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.2fr_2fr]">
        <div>
          <Link className="flex items-center gap-3" to="/">
            <img alt="" className="h-10 w-10 rounded-2xl object-contain" src={logo} />
            <span className="text-xl font-black text-text">Stryde</span>
          </Link>
          <p className="mt-4 max-w-sm leading-7 text-muted">
            Running re-imagined for discovery, trust, and sharing. Nexus brings the live social layer to every run.
          </p>
          <div className="mt-6 flex gap-3">
            {socials.map(({ label, href, icon: Icon }) => (
              <a
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-2xl border border-border text-muted transition hover:border-mint/50 hover:text-mint"
                href={href}
                key={label}
                rel={href.startsWith('http') ? 'noreferrer' : undefined}
                target={href.startsWith('http') ? '_blank' : undefined}
              >
                <Icon />
              </a>
            ))}
          </div>
          <div className="mt-4">
            <a href="https://apps.apple.com/in/app/stryde/id6759480506" target="_blank" rel="noreferrer" className="text-muted hover:text-mint">Try Stryde on iOS</a>
          </div>
        </div>
        <div className="flex flex-wrap gap-x-8 gap-y-2 items-center mt-8">
          {footerLinks.map((link) => (
            <Link key={link.label} className="text-muted transition hover:text-mint text-sm font-medium" to={link.to}>
              {link.label}
            </Link>
          ))}
        </div>
      </div>
      <p className="mx-auto mt-10 max-w-7xl text-sm text-muted">
        (c) 2026 Stryde. Built for runners, communities, and the live moments that bring them together.
      </p>
    </footer>
  );
}

function InstagramIcon() {
  return (
    <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24">
      <rect height="16" rx="5" stroke="currentColor" strokeWidth="2" width="16" x="4" y="4" />
      <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="2" />
      <circle cx="17" cy="7" fill="currentColor" r="1.2" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24">
      <path d="M5 4.5l14 15" stroke="currentColor" strokeLinecap="round" strokeWidth="2.4" />
      <path d="M19 4.5l-14 15" stroke="currentColor" strokeLinecap="round" strokeWidth="2.4" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg aria-hidden="true" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M6.7 9.4H3.9v10.2h2.8V9.4zM5.3 4.4a1.65 1.65 0 100 3.3 1.65 1.65 0 000-3.3zM20.1 13.8c0-2.9-1.5-4.6-4-4.6-1.5 0-2.5.8-3 1.6V9.4h-2.7v10.2h2.8v-5.3c0-1.6.8-2.5 2-2.5s2 1 2 2.6v5.2h2.9v-5.8z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24">
      <rect height="14" rx="3" stroke="currentColor" strokeWidth="2" width="18" x="3" y="5" />
      <path d="M4.5 7.5l7.5 5.6 7.5-5.6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  );
}
