import { useAllPrismicDocumentsByType } from '@prismicio/react';
import { BookText } from 'lucide-react';
import type { Event } from '../@types';
import { Body, UIError } from '../components';
import { EventCard, EventCardSkeleton } from '../components/EventCard';

export function Home() {
  const [events, { state, error }] = useAllPrismicDocumentsByType<Event>(
    'event',
    {
      graphQuery: `{
        event {
          ...eventFields

          speakers {
            speaker {
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

  const sortedEvents = events?.sort((a, b) =>
    new Date(a.data['start-date']) < new Date(b.data['start-date']) ? 1 : -1,
  );

  const upcomingEvents = sortedEvents?.filter(
    ({ data }) =>
      new Date(data?.['end-date'] || data?.['start-date']) > new Date(),
  );

  let eventsLabel = 'Upcoming events';

  if (!loading && upcomingEvents?.length === 0) {
    const latestEvent = sortedEvents?.at(0);
    if (latestEvent) {
      eventsLabel = 'Our latest event';
      upcomingEvents.push(latestEvent);
    }
  }

  return (
    <Body className='pt-0'>
      <Body.Section className='mt-5'>
        <Body.H1>
          <strong className='block pr-1'>NOVA IPSI</strong>
        </Body.H1>
        <Body.H2 className='text-xl xl:text-3xl text-slate-600'>
          <span className='block pr-1'>Knowledge Centre on</span>
          Intellectual Property and Sustainable Innovation
        </Body.H2>

        <p>
          Founded in September 2022 at NOVA School of Law in Lisbon, NOVA IPSI
          is a Knowledge Centre dedicated to academic research on Intellectual
          Property Law in a society seeking Sustainability
        </p>

        <Body.Link to='about-us'>Learn more about us</Body.Link>
      </Body.Section>

      {error && <UIError error={error} />}
      {loading && <EventCardSkeleton />}

      <Body.H1>{eventsLabel}</Body.H1>
      <Body.Article>
        {upcomingEvents?.map((event) => (
          <EventCard
            key={event.uid}
            event={event}
            error={error}
            loading={loading}
            direction='horizontal'
          />
        ))}
      </Body.Article>

      <Body.H1>Our latest scientific publication</Body.H1>
      <Body.Article>
        <div className='flex gap-3'>
          <BookText size={50} color='gray' />
          <div className='flex flex-col gap-2'>
            <Body.H2>NOVA IPSI Booklet 2023</Body.H2>

            <a
              download
              href={new URL('/Booklet-IPSI-2023.pdf', import.meta.url).href}
              className='text-xl text-heading underline underline-offset-4 leading-6 font-semibold w-fit hover:brightness-75 transition'
            >
              Download
            </a>
          </div>
        </div>
      </Body.Article>
    </Body>
  );
}
