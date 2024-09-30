import { useAllPrismicDocumentsByType } from '@prismicio/react';
import type { Event } from '../@types';
import { Body, EventCard, EventCardSkeleton, UIError } from '../components';

export function Courses() {
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

  const courses = events?.filter((event) => event.data.type === 'course');

  const upcomingCourses = courses
    ?.filter(
      ({ data }) =>
        (new Date(data?.['end-date']) || new Date(data?.['start-date'])) >
        new Date(),
    )
    .sort((a, b) =>
      new Date(a.data['start-date']) < new Date(b.data['start-date']) ? 1 : -1,
    );
  const pastCourses = courses
    ?.filter(
      ({ data }) =>
        (new Date(data?.['end-date']) || new Date(data?.['start-date'])) <
        new Date(),
    )
    .sort((a, b) =>
      new Date(a.data['start-date']) < new Date(b.data['start-date']) ? 1 : -1,
    );

  const courseProps = {
    loading,
    error,
  };

  return (
    <>
      <Body>
        <Body.PageTitle>Courses</Body.PageTitle>

        {loading && (
          <div className='flex gap-8'>
            <EventCardSkeleton />
            <EventCardSkeleton />
          </div>
        )}
        {error && <UIError error={error} />}

        {upcomingCourses && upcomingCourses.length > 0 && (
          <>
            <Body.H1>Upcoming Courses</Body.H1>
            <Body.Section className='grid md:grid-cols-2 xl:grid-cols-3 gap-8'>
              {upcomingCourses.map((course) => (
                <EventCard {...courseProps} key={course.uid} event={course} />
              ))}
            </Body.Section>
          </>
        )}

        <Body.H1>Past Courses</Body.H1>
        <Body.Section className='grid md:grid-cols-2 xl:grid-cols-3 gap-8'>
          {pastCourses?.map((course) => (
            <EventCard {...courseProps} key={course.uid} event={course} />
          ))}
        </Body.Section>
      </Body>
    </>
  );
}
