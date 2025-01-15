import type { ReactNode } from 'react';
import { Link as _Link, type LinkProps } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';
import type { SiteVariants } from '../@types/variants';

// #F9EBD1

type Props = {
  children: ReactNode;
  className?: string;
  variant?: SiteVariants;
  showImage?: boolean;
};
export function Body({
  children,
  className,
  variant = 'ipsi',
  showImage = false,
}: Props) {
  let imgSrc = new URL('/images/ipsi-draw-fluid.jpg', import.meta.url).href;
  if (variant === 'sinpl') {
    imgSrc = new URL('/images/ipsi-draw-inverted.jpeg', import.meta.url).href;
  }

  return (
    <main
      className={twMerge(
        'relative container mx-auto px-4 2xl:px-16 pt-20 grid gap-8 justify-center',
        showImage ? 'md:justify-normal' : '',
        className,
      )}
    >
      {showImage && (
        <img
          className={`mt-2 lg:mt-20 w-28 md:h-24 md:w-24 top-0 lg:top-auto lg:w-80 lg:h-80 2xl:w-96 2xl:h-96 absolute right-0 z-0 ${
            variant === 'ipsi' ? 'rounded-lg' : 'rounded-full'
          }`}
          src={imgSrc}
          alt='NOVA IPSI Logo'
          loading='lazy'
          width={112}
          height={384}
        />
      )}

      {children}
    </main>
  );
}

function Section({ children, className }: Props) {
  return (
    <section
      className={twMerge('z-10 grid gap-6 max-w-2xl xl:max-w-4xl', className)}
    >
      {children}
    </section>
  );
}
Body.Section = Section;

function Article({ children }: Props) {
  return (
    <article className='z-10 grid gap-6 md:text-justify'>{children}</article>
  );
}
Body.Article = Article;

function Link(props: LinkProps) {
  return (
    <_Link
      className='text-xl text-heading underline underline-offset-4 leading-6 font-semibold w-fit hover:brightness-75 transition'
      {...props}
    />
  );
}
Body.Link = Link;

function PageTitle({ children }: Props) {
  return (
    <h2 className='text-xl leading-5 text-heading font-bold'>{children}</h2>
  );
}
Body.PageTitle = PageTitle;

function H1({ children }: Props) {
  return (
    <h1 className='mt-3 md:text-justify text-3xl leading-10 text-slate-600'>
      {children}
    </h1>
  );
}
Body.H1 = H1;

function H2({ children, className }: Props) {
  return (
    <h2 className={twMerge('text-lg leading-5 font-semibold', className)}>
      {children}
    </h2>
  );
}
Body.H2 = H2;

function List({ children, className }: Props) {
  return (
    <ul className={twMerge('list-disc list-inside grid gap-3', className)}>
      {children}
    </ul>
  );
}
Body.List = List;
