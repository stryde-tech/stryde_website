import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/stryde_logo.png';
import Button from './Button';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Nexus', to: '/nexus' },
  { label: 'Story', to: '/story' },
  { label: 'For Brands', to: '/brands' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `rounded-full px-3 py-2 text-sm font-semibold transition ${
      isActive ? 'bg-surface-secondary text-text' : 'text-muted hover:bg-surface-secondary hover:text-text'
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-xl">
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8"
      >
        <NavLink aria-label="Stryde home" className="flex items-center gap-3" to="/">
          <img alt="" className="h-10 w-10 rounded-2xl object-contain" src={logo} />
          <span className="text-xl font-black text-text">Stryde</span>
        </NavLink>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <NavLink className={linkClass} key={link.to} to={link.to}>
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden lg:block">
          <Button size="sm" to="mailto:hq.stryde@gmail.com">Contact Stryde</Button>
        </div>

        <button
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="rounded-2xl border border-border p-2 text-text lg:hidden"
          onClick={() => setOpen((value) => !value)}
          type="button"
        >
          {open ? <X aria-hidden="true" className="h-6 w-6" /> : <Menu aria-hidden="true" className="h-6 w-6" />}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-border px-4 pb-4 lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            {navLinks.map((link) => (
              <NavLink className={linkClass} key={link.to} onClick={() => setOpen(false)} to={link.to}>
                {link.label}
              </NavLink>
            ))}
            <Button className="mt-2 w-full" to="mailto:hq.stryde@gmail.com">Contact Stryde</Button>
          </div>
        </div>
      ) : null}
    </header>
  );
}
