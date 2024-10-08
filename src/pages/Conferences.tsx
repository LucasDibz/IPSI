import { useAllPrismicDocumentsByType } from '@prismicio/react';
import type { Event } from '../@types';
import { Body, EventCard, EventCardSkeleton, UIError } from '../components';

export function Conferences() {
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

  const conferences = events?.filter(
    (event) => event.data.type === 'conference',
  );

  const upcomingConferences = conferences
    ?.filter(
      ({ data }) =>
        new Date(data?.['end-date'] || data?.['start-date']) > new Date(),
    )
    .sort((a, b) =>
      new Date(a.data['start-date']) < new Date(b.data['start-date']) ? 1 : -1,
    );
  const pastConferences = conferences
    ?.filter(
      ({ data }) =>
        new Date(data?.['end-date'] || data?.['start-date']) < new Date(),
    )
    .sort((a, b) =>
      new Date(a.data['start-date']) < new Date(b.data['start-date']) ? 1 : -1,
    );

  const eventProps = {
    loading,
    error,
  };

  return (
    <>
      <Body>
        <Body.PageTitle>Conferences</Body.PageTitle>

        {loading && (
          <div className='flex gap-8'>
            <EventCardSkeleton />
            <EventCardSkeleton />
          </div>
        )}
        {error && <UIError error={error} />}

        {upcomingConferences && upcomingConferences.length > 0 && (
          <>
            <Body.H1>Upcoming Conferences</Body.H1>
            <Body.Section className='grid md:grid-cols-2 xl:grid-cols-3 gap-8'>
              {upcomingConferences.map((conference) => (
                <EventCard
                  {...eventProps}
                  key={conference.uid}
                  event={conference}
                />
              ))}
            </Body.Section>
          </>
        )}

        <Body.H1>Past Conferences</Body.H1>
        <Body.Section className='grid md:grid-cols-2 xl:grid-cols-3 gap-8'>
          {pastConferences?.map((event) => (
            <EventCard {...eventProps} key={event.uid} event={event} />
          ))}
        </Body.Section>
      </Body>
    </>
  );
}
