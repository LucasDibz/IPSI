import { BookText } from 'lucide-react';

import { Body } from '../components';

export function Home() {
  return (
    <Body>
      <Body.Section>
        <Body.H1>
          NOVA School of Law Knowledge Centre on Intellectual Property and
          Sustainable Innovation <strong>(NOVA IPSI)</strong>
        </Body.H1>

        <p>
          Founded in September 2022 at the NOVA School of Law in Lisbon, NOVA
          IPSI is a Knowledge Centre dedicated to the academic research on
          Intellectual Property Law in a society seeking Sustainability.
        </p>

        <Body.Link to={'about-us'}>Learn more about us</Body.Link>
      </Body.Section>

      <Body.H1>Our latest scientific output:</Body.H1>
      <Body.Article>
        <div className='flex gap-3'>
          <BookText size={50} color='gray' />
          <div className='flex flex-col gap-2'>
            <Body.H2>NOVA IPSI Booklet 2023</Body.H2>

            <a
              download
              href={new URL('/Booklet-IPSI-2023.pdf', import.meta.url).href}
              className='text-xl text-rose-500 underline underline-offset-4 leading-6 font-semibold w-fit hover:brightness-75 transition'
            >
              Download
            </a>
          </div>
        </div>
      </Body.Article>
    </Body>
  );
}
