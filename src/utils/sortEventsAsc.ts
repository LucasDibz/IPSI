import { Event } from '../config/events';

export function sortEventsAsc(event1: Event, event2: Event) {
  const dateA = getDateFromEvent(event1);
  const dateB = getDateFromEvent(event2);

  return dateA > dateB ? -1 : 1;
}

const getDateFromEvent = (event: Event) => {
  if (event.date instanceof Date) {
    return event.date;
  }

  return event.date.from;
};
