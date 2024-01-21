import { useRouteError } from 'react-router-dom';

import { Footer, Header } from '../components';

export function ErrorPage() {
  const error = useRouteError() as { statusText?: string; message?: string };

  return (
    <>
      <Header />
      <div
        id='error-page'
        className='mt-5 flex flex-col items-center justify-center gap-8 min-h-96'
      >
        <h1 className='mt-3 md:text-justify text-3xl leading-6 text-slate-400 '>
          Sorry, an unexpected error has occurred!
        </h1>
        <p className='text-red-500 italic'>
          {error?.statusText || error?.message}
        </p>
      </div>
      <Footer />
    </>
  );
}
