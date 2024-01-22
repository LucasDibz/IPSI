import { ReactNode } from 'react';
import { Link as _Link, LinkProps } from 'react-router-dom';

// #F9EBD1

type Props = {
  children: ReactNode;
};
export function Body({ children }: Props) {
  return (
    <main className='relative container mx-auto px-4 md:px-0 pt-20 grid gap-8'>
      <img
        className='md:mt-2 w-28 h-28 top-0 lg:top-auto lg:w-96 lg:h-96 absolute right-0 z-0'
        src={new URL('/images/ipsi-draw-fluid.jpg', import.meta.url).href}
        alt='IPSI Logo'
        loading='lazy'
      />

      {children}
    </main>
  );
}

function Section({ children, className }: Props & { className?: string }) {
  return (
    <section
      className={`z-10 grid gap-6 md:text-justify max-w-xl xl:max-w-4xl ${
        className ? className : ''
      }`}
    >
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
      className='text-xl text-rose-500 underline underline-offset-4 leading-6 font-semibold w-fit hover:brightness-75 transition'
      {...props}
    />
  );
}
Body.Link = Link;

function PageTitle({ children }: Props) {
  return (
    <h2 className='text-xl leading-5 text-rose-600 font-semibold'>
      {children}
    </h2>
  );
}
Body.PageTitle = PageTitle;

function H1({ children }: Props) {
  return (
    <h1 className='mt-3 md:text-justify text-3xl leading-10 text-amber-600'>
      {children}
    </h1>
  );
}
Body.H1 = H1;

function H2({ children }: Props) {
  return <h2 className='text-lg leading-5 font-semibold'>{children}</h2>;
}
Body.H2 = H2;

function List({ children }: Props) {
  return <ul className='mt-5 list-disc list-inside grid gap-3'>{children}</ul>;
}
Body.List = List;
