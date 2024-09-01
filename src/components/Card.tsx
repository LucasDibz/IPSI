import type { ReactNode } from 'react';
import { Link as _Link } from 'react-router-dom';

type Props = {
  children: ReactNode;
};
export function Card({ children, className }: Props & { className?: string }) {
  return (
    <article
      className={`p-6 border bg-background border-slate-200 rounded-lg shadow flex flex-col gap-3 ${
        className ? className : 'max-w-lg'
      }`}
    >
      {children}
    </article>
  );
}

function Header({ children }: Props) {
  return <div className='flex flex-col justify-around'>{children}</div>;
}
Card.Header = Header;

function Title({ children, className }: Props & { className?: string }) {
  return (
    <h3
      className={`font-bold tracking-tight text-2xl ${
        className ? className : 'text-slate-600'
      }`}
    >
      {children}
    </h3>
  );
}
Card.Title = Title;

function Subtitle({ children }: Props) {
  return (
    <h6 className='md:text-lg font-semibold tracking-tight text-end text-heading'>
      {children}
    </h6>
  );
}
Card.Subtitle = Subtitle;

function Content({ children, className }: Props & { className?: string }) {
  return (
    <div
      className={`font-normal text-slate-800 py-4 border-t border-t-slate-400 ${
        className ? className : ''
      }`}
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
