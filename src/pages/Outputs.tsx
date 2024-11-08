import { useAllPrismicDocumentsByType } from '@prismicio/react';
import type { Output } from '../@types';
import { Body, Card, OutputsCard } from '../components';

export function Outputs() {
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

  return (
    <Body>
      <Body.PageTitle>Scientific Publications</Body.PageTitle>

      <Body.Section>
        <Card className='max-w-2xl mx-auto'>
          <Card.Title>NOVA IPSI Booklet</Card.Title>
          <Card.Content className='xl:flex gap-4'>
            <a
              download
              href={new URL('/Booklet-IPSI-2024.pdf', import.meta.url).href}
              className='min-h-[420px] md:min-h-96 md:min-w-96 md:rounded-none md:rounded-s-lg shadow hover:shadow-lg hover:scale-105 transition'
            >
              <img
                src={new URL('/images/booklet-2024.jpg', import.meta.url).href}
                alt={'NOVA IPSI Booklet'}
                className='object-contain w-full h-full rounded-t-lg md:max-h-96 xl:max-h-full'
                width={400}
                height={555}
              />
            </a>
            <div className='flex flex-col gap-5 mt-2 xl:mt-0 justify-between text-slate-600 leading-8 text-left'>
              <p>
                The
                <strong className='px-1 font-bold'>NOVA IPSI Booklet</strong>
                is a comprehensive compilation featuring our reviews of the most
                inspiring and impactful readings, articles, court decisions,
                reports, and events we engaged with throughout the year. The
                booklet is available for <strong>free</strong>, and if
                preferred, you can request a printed version from us.
              </p>

              <div className='h-full w-full flex items-center justify-center'>
                <a
                  download
                  href={new URL('/Booklet-IPSI-2024.pdf', import.meta.url).href}
                  className='w-fit px-3 py-2 text-center text-white border border-slate-400 bg-slate-600 rounded-lg hover:brightness-90 hover:shadow transition focus:ring-4 focus:outline-none focus:ring-slate-200'
                >
                  Download here
                </a>
              </div>
            </div>
          </Card.Content>
        </Card>
      </Body.Section>

      <Body.Section>
        <Body.H2>Previous Booklets Editions</Body.H2>

        <Body.List>
          <li>
            <a
              download
              href={new URL('/Booklet-IPSI-2023.pdf', import.meta.url).href}
              className='underline text-heading'
            >
              2023
            </a>
          </li>
        </Body.List>
      </Body.Section>

      <OutputsCard
        title='Selected scientific articles'
        loading={loading}
        outputs={articles}
        error={error}
      />
    </Body>
  );
}
