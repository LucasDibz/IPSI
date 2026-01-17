import { useAllPrismicDocumentsByType } from '@prismicio/react';
import { useState } from 'react';
import type { Output } from '../@types';
import { Body, Card, OutputsCard } from '../components';

export function Outputs() {
  const years = [2025, 2024, 2023];
  const [activeBookletYear, setActiveBookletYear] = useState(years.at(0));

  const [outputs, { state, error }] = useAllPrismicDocumentsByType<Output>(
    'outputs',
    {
      graphQuery: `{
        outputs {
          ...outputsFields

          authors {
            author {
              ...on ipsers {
                name
                image
                url
              }
            }
          }
        }
      }`,
    },
  );

  const loading = state === 'loading';

  const articles = outputs
    ?.filter((output) => output.data.type === 'article')
    .sort((a, b) => (new Date(a.data.date) < new Date(b.data.date) ? 1 : -1));

  const bookletSrc = `/NOVA-IPSI-Booklet-${activeBookletYear}.pdf`;
  const bookletImage = `/images/booklet-${activeBookletYear}.jpg`;

  return (
    <Body>
      <Body.PageTitle>Scientific Publications</Body.PageTitle>

      <Body.Section>
        <Card className='max-w-2xl mx-auto'>
          <Card.Title>NOVA IPSI Booklets</Card.Title>
          <ul className='-mb-3 flex flex-wrap text-sm'>
            {years.map((year) => (
              <li key={year}>
                <button
                  type='button'
                  className='inline-block p-4 text-slate-400 rounded-t-lg hover:cursor-pointer hover:shadow-inner transition data-[active=true]:shadow-inner data-[active=true]:text-heading'
                  data-active={year === activeBookletYear}
                  onClick={() => setActiveBookletYear(year)}
                >
                  {year}
                </button>
              </li>
            ))}
          </ul>
          <Card.Content className='xl:flex gap-4'>
            <a
              download
              href={new URL(bookletSrc, import.meta.url).href}
              className='min-h-[420px] md:min-h-96 md:min-w-96 md:rounded-none md:rounded-s-lg shadow hover:shadow-lg hover:scale-105 transition'
            >
              <img
                src={new URL(bookletImage, import.meta.url).href}
                alt={'NOVA IPSI Booklet'}
                className='object-contain w-full rounded-t-lg md:max-h-96 xl:max-h-full'
                width={400}
                height={555}
              />
            </a>
            <div className='flex flex-col gap-5 mt-2 xl:mt-0 justify-between text-slate-600 leading-8 text-left'>
              <span>
                The
                <strong className='px-1 font-bold'>NOVA IPSI Booklets</strong>
                are yearly compilations of our short reviews of some of the
                academic readings we build our research on.
              </span>
              <span>
                <strong className='pr-1 font-bold'>NOVA IPSI Booklets</strong>
                are available for free download. Print-out copies are
                distributed at our NOVA IPSI Annual Lecture events
              </span>

              <div className='h-full w-full flex items-center justify-center'>
                <a
                  download
                  href={new URL(bookletSrc, import.meta.url).href}
                  className='w-fit px-3 py-2 text-center text-white border border-slate-400 bg-slate-600 rounded-lg hover:brightness-90 hover:shadow transition focus:ring-4 focus:outline-none focus:ring-slate-200'
                >
                  Download here
                </a>
              </div>
            </div>
          </Card.Content>
        </Card>
      </Body.Section>

      <OutputsCard
        title='Selected scientific contributions'
        loading={loading}
        outputs={articles}
        error={error}
      />
    </Body>
  );
}
