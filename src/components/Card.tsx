import type { ReactNode } from 'react';
import { Link as _Link } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

type Props = {
  children: ReactNode;
};
export function Card({ children, className }: Props & { className?: string }) {
  return (
    <article
      className={twMerge(
        'p-6 border bg-background border-slate-200 rounded-lg shadow flex flex-col gap-3 max-w-lg',
        className,
      )}
    >
      {children}
    </article>
  );
}

function Header({ children, className }: Props & { className?: string }) {
  return (
    <div
      className={twMerge(
        'flex flex-col justify-around gap-4 md:gap-1',
        className,
      )}
    >
      {children}
    </div>
  );
}
Card.Header = Header;

function Title({ children, className }: Props & { className?: string }) {
  return (
    <h3
      className={twMerge(
        'font-bold tracking-tight text-2xl text-slate-600',
        className,
      )}
    >
      {children}
    </h3>
  );
}
Card.Title = Title;

function Subtitle({ children, className }: Props & { className?: string }) {
  return (
    <h6
      className={twMerge(
        'font-semibold tracking-tight text-end text-heading',
        className,
      )}
    >
      {children}
    </h6>
  );
}
Card.Subtitle = Subtitle;

function Content({ children, className }: Props & { className?: string }) {
  return (
    <div
      className={twMerge(
        'font-normal text-slate-800 py-4 border-t border-t-slate-400',
        className,
      )}
    >
      {children}
    </div>
  );
}
Card.Content = Content;

function Link({
  children,
  to,
  blank,
}: Props & { to: string; blank?: boolean }) {
  if (blank) {
    return (
      <a
        href={to}
        target='_blank'
        rel='noopener noreferrer'
        className='relative inline-flex px-1 items-center text-heading after:bg-rose-300 after:absolute after:h-[1px] after:mt-[1px] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300'
      >
        {children}
      </a>
    );
  }

  return (
    <_Link
      to={to}
      className='relative inline-flex px-1 items-center text-heading after:bg-rose-300 after:absolute after:h-[1px] after:mt-[1px] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300'
    >
      {children}
    </_Link>
  );
}
Card.Link = Link;
