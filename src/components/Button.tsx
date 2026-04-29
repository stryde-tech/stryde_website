import { ArrowRight } from 'lucide-react';
import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';

type ButtonProps = {
  children: ReactNode;
  to?: string;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  ariaLabel?: string;
  showIcon?: boolean;
};

const variants = {
  primary:
    'bg-button-primary text-white shadow-[0_0_34px_rgba(46,111,232,0.3)] hover:bg-sky',
  secondary:
    'border border-sky/30 bg-sky/10 text-primary hover:border-sky/60 hover:bg-sky/16',
  ghost: 'text-primary hover:bg-surface-secondary hover:text-text',
};

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-5 py-3 text-sm',
  lg: 'px-6 py-4 text-base',
};

export default function Button({
  children,
  to,
  variant = 'primary',
  size = 'md',
  className = '',
  type = 'button',
  onClick,
  ariaLabel,
  showIcon = false,
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-2xl font-semibold transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky ${variants[variant]} ${sizes[size]} ${className}`;
  const content = (
    <>
      <span>{children}</span>
      {showIcon ? <ArrowRight aria-hidden="true" className="h-4 w-4" /> : null}
    </>
  );

  if (to) {
    if (to.startsWith('http') || to.startsWith('mailto:')) {
      return (
        <a aria-label={ariaLabel} className={classes} href={to}>
          {content}
        </a>
      );
    }

    return (
      <Link aria-label={ariaLabel} className={classes} to={to}>
        {content}
      </Link>
    );
  }

  return (
    <button aria-label={ariaLabel} className={classes} onClick={onClick} type={type}>
      {content}
    </button>
  );
}
