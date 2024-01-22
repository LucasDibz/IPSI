import { ReactNode } from 'react';
import { Link as _Link } from 'react-router-dom';

type Props = {
  children: ReactNode;
};
export function Card({ children }: Props) {
  return (
    <article className='max-w-lg p-6 border border-slate-200 rounded-lg shadow'>
      {children}
    </article>
  );
}

function Header({ children }: Props) {
  return (
    <article className='min-h-28 flex flex-col justify-around'>
      {children}
    </article>
  );
}
Card.Header = Header;

function Title({ children }: Props) {
  return (
    <h3 className='pb-2 text-2xl font-bold tracking-tight text-slate-600'>
      {children}
    </h3>
  );
}
Card.Title = Title;

function Subtitle({ children }: Props) {
  return (
    <h6 className='pb-3 md:text-lg font-semibold tracking-tight text-end text-rose-500'>
      {children}
    </h6>
  );
}
Card.Subtitle = Subtitle;

function Content({ children }: Props) {
  return (
    <p className='font-normal text-slate-800 pt-4 border-t border-t-slate-400'>
      {children}
    </p>
  );
}
Card.Content = Content;

function Link({ children, to }: Props & { to: string }) {
  return (
    <_Link
      to={to}
      className='relative inline-flex px-1 items-center text-rose-500 after:bg-rose-300 after:absolute after:h-[1px] after:mt-[1px] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300'
    >
      {children}
    </_Link>
  );
}
Card.Link = Link;
