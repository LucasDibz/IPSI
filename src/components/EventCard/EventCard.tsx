import { Link } from 'react-router-dom';
import { EventDate, EventLocation, EventSpeakers, UIError } from '..';
import type { Event } from '../../@types';

type EventProps = {
  direction?: 'horizontal' | 'vertical';
  event: Event;
  loading: boolean;
  error?: Error;
};

export const EventCard = (props: EventProps) => {
  const { direction, loading, error } = props;

  if (loading) return <Skeleton />;

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
      className='flex flex-col md:flex-row max-w-lg border border-slate-200 rounded-lg shadow hover:scale-105 hover:shadow-lg transition'
    >
      <img
        src={event.data.image.url}
        alt={event.data.image.alt}
        className='object-cover rounded-t-lg md:rounded-t-none md:rounded-l-lg w-full md:w-1/2'
        width={246}
        height={178}
      />

      <div className='p-2 xl:p-5 h-full w-full flex flex-col gap-3 justify-between text-left'>
        <h5 className='text-lg font-bold tracking-tight text-slate-900'>
          {event.data['event-title'][0].text}
        </h5>

        <div className='flex flex-wrap gap-2 justify-between items-center text-slate-400 italic text-xs'>
          <EventLocation text={event?.data['location-text']} />

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
        className='object-cover min-h-48 w-full rounded-t-lg'
        loading='lazy'
        width={320}
        height={192}
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

const Skeleton = () => {
  return (
    <div
      role='status'
      className='max-w-sm flex flex-col gap-8 animate-pulse rtl:space-x-reverse'
    >
      <div className='max-w-sm flex items-center justify-center w-full h-48 bg-gray-300 rounded'>
        <svg
          className='w-10 h-10 text-gray-200'
          aria-hidden='true'
          xmlns='http://www.w3.org/2000/svg'
          fill='currentColor'
          viewBox='0 0 20 18'
        >
          <path d='M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z' />
        </svg>
      </div>
      <div className='w-full'>
        <div className='h-2.5 bg-gray-200 rounded-full w-48 mb-4' />
        <div className='h-2 bg-gray-200 rounded-full max-w-[480px] mb-2.5' />
        <div className='h-2 bg-gray-200 rounded-full mb-2.5' />
        <div className='h-2 bg-gray-200 rounded-full max-w-[440px] mb-2.5' />
        <div className='h-2 bg-gray-200 rounded-full max-w-[460px] mb-2.5' />
        <div className='h-2 bg-gray-200 rounded-full max-w-[360px]' />
      </div>
      <span className='sr-only'>Loading...</span>
    </div>
  );
};

export { Skeleton as EventCardSkeleton };
