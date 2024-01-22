import { BookText } from 'lucide-react';
import { IPSIDraw } from '../components/IPSIDraw';

export function Main() {
  return (
    <main className='relative container mx-auto px-4 md:px-0 pt-20 grid gap-10'>
      <div className='max-w-3xl xl:max-w-5xl'>
        <h2 className='text-xl leading-5 text-red-600 font-semibold'>
          Knowledge Center
        </h2>
        <h1 className='mt-3 md:text-justify text-3xl leading-8 text-slate-400 '>
          NOVA Knowledge Centre on Intellectual Property & Sustainable
          Innovation (IPSI)
        </h1>

        <IPSIDraw />
      </div>

      <section className='z-10 grid gap-5 max-w-3xl xl:max-w-4xl md:text-justify'>
        <p>
          The
          <strong className='px-1'>
            NOVA Knowledge Centre on Intellectual Property & Sustainable
            Innovation (IPSI)
          </strong>
          is dedicated to the study and research on the legal concept,
          regulation, and evolution of intellectual property in a society
          seeking sustainability. NOVA IPSI has as its aims:
        </p>

        <ul className='list-disc list-inside grid gap-3'>
          <li>
            Engaging students and early-career researchers with legal questions
            on
            <strong className='px-1'>
              sustainable incentives and access to Knowledge, Technology, and
              Culture;
            </strong>
          </li>

          <li>
            Enabling senior researchers and faculty members from NOVA and other
            universities to advance their research and transform it into
            <strong className='px-1'>
              policy advice, legal consultancy, legal education, and strategic
              litigation;
            </strong>
          </li>

          <li>
            Establishing opportunities for dialogue and collaborative project
            development
            <strong className='px-1'>
              between researchers and key stakeholders
            </strong>
          </li>
        </ul>
      </section>

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
