import { MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { EventDate, EventSpeakers } from '..';
import { Event } from '../../config/events';

type EventProps = {
  direction?: 'horizontal' | 'vertical';
  event: Event;
};

export const EventCard = (props: EventProps) => {
  const { direction } = props;

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
      href={event.link}
      target='_blank'
      rel='noreferrer'
      className='flex max-w-lg border border-slate-200 rounded-lg shadow hover:scale-105 hover:shadow-lg transition'
    >
      <img
        src={event.imgSrc}
        alt={event.title}
        className='object-cover h-full w-full rounded-l-lg'
        loading='lazy'
      />

      <div className='p-2 xl:p-5 h-full w-full flex flex-col gap-3 justify-between text-left'>
        <h5 className='text-lg font-bold tracking-tight text-slate-900'>
          {event.title}
        </h5>

        <div className='flex flex-wrap gap-2 justify-between items-center text-slate-400 italic text-xs'>
          <div className='flex gap-1'>
            <MapPin size={15} className='flex-shrink-0' />
            <span
              className='truncate max-w-56 xl:max-w-28'
              title={event.location}
            >
              {event.location}
            </span>
          </div>

          <EventDate date={event.date} />
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
        src={event.imgSrc}
        alt={event.title}
        className='object-cover h-48 w-full rounded-t-lg'
        loading='lazy'
      />

      <div className='p-2 xl:p-5 h-full w-full flex flex-col gap-3 justify-between text-left'>
        <h5 className='text-lg font-bold tracking-tight text-slate-900'>
          {event.title}
        </h5>

        <p className='text-sm text-justify line-clamp-6 overflow-hidden text-ellipsis font-normal text-slate-700'>
          {event.description}
        </p>

        <div className='flex flex-wrap gap-2 justify-between md:items-center text-slate-400 italic text-xs'>
          <div className='flex gap-1'>
            <MapPin size={15} className='flex-shrink-0' />
            <span
              className='truncate max-w-56 xl:max-w-28'
              title={event.location}
            >
              {event.location}
            </span>
          </div>

          <EventDate date={event.date} />
        </div>

        <div className='flex items-center justify-between'>
          <EventSpeakers event={event} />

          <Link
            to={`?event=${event.title.toLowerCase().split(' ').join('-')}`}
            className='w-fit px-3 py-2 font-medium text-center text-white bg-sky-700 rounded-lg hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-blue-300'
          >
            Read more
          </Link>
        </div>
      </div>
    </div>
  );
};
