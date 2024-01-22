import { ReactNode } from 'react';
import { LinkProps, Link as _Link } from 'react-router-dom';

import { IPSIDraw } from './IPSIDraw';

type Props = {
  children: ReactNode;
};
export function Body({ children }: Props) {
  return (
    <main className='relative container mx-auto px-4 md:px-0 pt-20 grid gap-8'>
      <IPSIDraw />

      {children}
    </main>
  );
}

function Section({ children }: Props) {
  return (
    <section className='z-10 grid gap-6 md:text-justify max-w-xl xl:max-w-3xl'>
      {children}
    </section>
  );
}
Body.Section = Section;

function Article({ children }: Props) {
  return (
    <article className='z-10 grid gap-8 md:text-justify max-w-xl xl:max-w-3xl'>
      {children}
    </article>
  );
}
Body.Article = Article;

function Link(props: LinkProps) {
  return (
    <_Link
      className='text-xl text-red-500 underline underline-offset-4 leading-6 font-semibold w-fit hover:brightness-75 transition'
      {...props}
    />
  );
}
Body.Link = Link;

function PageTitle({ children }: Props) {
  return (
    <h2 className='text-xl leading-5 text-red-600 font-semibold'>{children}</h2>
  );
}
Body.PageTitle = PageTitle;

function H1({ children }: Props) {
  return (
    <h1 className='mt-3 md:text-justify text-3xl leading-10 text-slate-400'>
      {children}
    </h1>
  );
}
Body.H1 = H1;

function H2({ children }: Props) {
  return <h2 className='text-lg leading-5 font-semibold'>{children}</h2>;
}
Body.H2 = H2;
