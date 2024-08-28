import { useRouteError } from 'react-router-dom';

export function ErrorPage() {
  const error = useRouteError() as { statusText?: string; message?: string };

  return (
    <>
      <div
        id='error-page'
        className='mt-5 flex flex-col items-center justify-center gap-8 min-h-96'
      >
        <h1 className='mt-3 md:text-justify text-3xl leading-6 text-slate-400 '>
          Oops! Something went wrong...
        </h1>
        <p className='text-heading italic'>
          {error?.statusText || error?.message}
        </p>

        <p className='italic text-slate-500'>
          If this error persists, please send an email to
          <a href='mailto:ipsi@novalaw.unl.pt' className='text-heading'>
            <strong className='px-1'>ipsi@novalaw.unl.pt</strong>
          </a>
        </p>
      </div>
    </>
  );
}
