import { BookText } from 'lucide-react';
import { Link } from 'react-router-dom';
import { IPSIDraw } from '../components/IPSIDraw';

export function Main() {
  return (
    <main className='relative container mx-auto px-4 md:px-0 pt-20 grid gap-8'>
      <IPSIDraw />

      <div className='z-10 max-w-xl xl:max-w-3xl'>
        <h1 className='mt-3 md:text-justify text-3xl leading-10 text-slate-400 '>
          NOVA School of Law Knowledge Centre on Intellectual Property and
          Sustainable Innovation (NOVA IPSI)
        </h1>
      </div>

      <section className='z-10 grid gap-5 md:text-justify max-w-xl xl:max-w-3xl'>
        <p>
          Founded in September 2022 at the NOVA School of Law in Lisbon, NOVA
          IPSI is a Knowledge Centre dedicated to the academic research on
          Intellectual Property Law in a society seeking Sustainability.
        </p>

        <Link
          to={'about-us'}
          className='text-xl text-red-500 underline underline-offset-4 leading-6 font-semibold w-fit hover:brightness-75 transition'
        >
          Learn more about us
        </Link>
      </section>

      <h1 className='mt-3 md:text-justify text-3xl leading-10 text-slate-400 '>
        Our latest scientific output:
      </h1>
      <article className='z-10 flex items-center gap-5 max-w-xs'>
        <BookText size={50} color='gray' />

        <div className='flex flex-col gap-2'>
          <h2 className='text-lg leading-5 font-semibold'>
            NOVA IPSI Booklet 2023
          </h2>
          <a
            href={new URL('/Booklet-IPSI-2023.pdf', import.meta.url).href}
            download
            className='text-xl text-red-500 underline underline-offset-4 leading-6 font-semibold w-fit hover:brightness-75 transition'
          >
            Download
          </a>
        </div>
      </article>
    </main>
  );
}
