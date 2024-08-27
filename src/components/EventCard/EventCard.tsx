import { Link } from 'react-router-dom';
import { EventDate, EventLocation, EventSpeakers, Spinner, UIError } from '..';
import type { Event } from '../../@types';

type EventProps = {
  direction?: 'horizontal' | 'vertical';
  event: Event;
  loading: boolean;
  error?: Error;
};

export const EventCard = (props: EventProps) => {
  const { direction, loading, error } = props;

  if (loading) return <Spinner />;

  if (error) {
    return <UIError error={error} />;
  }

  switch (direction) {
    case 'horizontal':
      return <HorizontalEvent {...props} />;

    default:
      return <VerticalEvent {...props} />;
  }
};

const HorizontalEvent = (props: EventProps) => {
  const { event } = props;

  return (
    <a
      href={event.data.link.url}
      target={event.data.link.target}
      rel='noreferrer'
      className='flex max-w-lg border border-slate-200 rounded-lg shadow hover:scale-105 hover:shadow-lg transition'
    >
      <img
        src={event.data.image.url}
        alt={event.data.image.alt}
        className='object-cover h-full w-full rounded-l-lg'
        loading='lazy'
      />

      <div className='p-2 xl:p-5 h-full w-full flex flex-col gap-3 justify-between text-left'>
        <h5 className='text-lg font-bold tracking-tight text-slate-900'>
          {event.data['event-title'][0].text}
        </h5>

        <div className='flex flex-wrap gap-2 justify-between items-center text-slate-400 italic text-xs'>
          <EventLocation
            text={event?.data['location-text']}
            location={event?.data.location}
          />

          <EventDate
            date={{
              from: event.data['start-date'],
              to: event.data['end-date'],
            }}
          />
        </div>
      </div>
    </a>
  );
};

const VerticalEvent = (props: EventProps) => {
  const { event } = props;

  return (
    <div className='flex flex-col max-w-xs border border-slate-200 rounded-lg shadow pb-2'>
      <img
        src={event.data.image.url}
        alt={event.data.image.alt}
        className='object-cover h-48 w-full rounded-t-lg'
        loading='lazy'
      />

      <div className='p-2 xl:p-5 h-full w-full flex flex-col gap-3 justify-between text-left'>
        <h5 className='text-lg font-bold tracking-tight text-slate-900'>
          {event.data['event-title'][0].text}
        </h5>

        <p className='text-sm text-justify line-clamp-6 overflow-hidden text-ellipsis font-normal text-slate-700'>
          {event.data.description[0].text}
        </p>

        <div className='flex flex-wrap gap-2 justify-between md:items-center text-slate-400 italic text-xs'>
          <EventLocation
            text={event?.data['location-text']}
            location={event?.data.location}
          />

          <EventDate
            date={{
              from: event.data['start-date'],
              to: event.data['end-date'],
            }}
          />
        </div>

        <div className='flex items-center justify-between'>
          <EventSpeakers speakers={event.data.speakers} />

          <Link
            to={`?event=${event.uid}`}
            className='w-fit px-3 py-2 font-medium text-center text-white bg-sky-700 rounded-lg hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-blue-300'
          >
            Read more
          </Link>
        </div>
      </div>
    </div>
  );
};
