import { Body } from '../components';
import { Drawer } from '../components/Drawer';
import { EventCard } from '../components/EventCard/EventCard';
import { events } from '../config/events';

export function Events() {
  const upcomingEvents = events.filter(({ date }) => {
    if (date instanceof Date) {
      return date > new Date();
    }

    return date.from > new Date();
  });

  const pastEvents = events.filter(({ date }) => {
    if (date instanceof Date) {
      return date < new Date();
    }

    return date.from < new Date();
  });

  return (
    <>
      <Drawer />
      <Body>
        <Body.PageTitle>Events</Body.PageTitle>
        <Body.H1>Upcoming Events</Body.H1>
        <Body.Section className='grid md:grid-cols-2 xl:grid-cols-3 gap-8'>
          {upcomingEvents.map((event) => (
            <EventCard key={event.title} event={event} />
          ))}
        </Body.Section>
        <Body.H1>Past Events</Body.H1>
        <Body.Section className='grid md:grid-cols-2 xl:grid-cols-3 gap-8'>
          {pastEvents.map((event) => (
            <EventCard key={event.title} event={event} />
          ))}
        </Body.Section>
      </Body>
    </>
  );
}
