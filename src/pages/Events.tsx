import { useAllPrismicDocumentsByType } from '@prismicio/react';
import type { Event } from '../@types';
import {
  Body,
  EventCard,
  EventCardSkeleton,
  EventDialog,
  UIError,
} from '../components';

export function Events() {
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

  const upcomingEvents = events
    ?.filter(({ data }) => new Date(data?.['start-date']) > new Date())
    .sort((a, b) =>
      new Date(a.data['start-date']) < new Date(b.data['start-date']) ? 1 : -1,
    );
  const pastEvents = events
    ?.filter(({ data }) => new Date(data?.['start-date']) < new Date())
    .sort((a, b) =>
      new Date(a.data['start-date']) < new Date(b.data['start-date']) ? 1 : -1,
    );

  const eventProps = {
    loading,
    error,
  };

  return (
    <>
      <EventDialog />
      <Body>
        <Body.PageTitle>Events</Body.PageTitle>

        {loading && (
          <div className='flex gap-8'>
            <EventCardSkeleton />
            <EventCardSkeleton />
          </div>
        )}
        {error && <UIError error={error} />}

        {upcomingEvents && upcomingEvents.length > 0 && (
          <>
            <Body.H1>Upcoming Events</Body.H1>
            <Body.Section className='grid md:grid-cols-2 xl:grid-cols-3 gap-8'>
              {upcomingEvents.map((event) => (
                <EventCard {...eventProps} key={event.uid} event={event} />
              ))}
            </Body.Section>
          </>
        )}

        <Body.H1>Past Events</Body.H1>
        <Body.Section className='grid md:grid-cols-2 xl:grid-cols-3 gap-8'>
          {pastEvents?.map((event) => (
            <EventCard {...eventProps} key={event.uid} event={event} />
          ))}
        </Body.Section>
      </Body>
    </>
  );
}
