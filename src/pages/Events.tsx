import { MapPin } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';

import { Body, EventDate, EventSpeakers } from '../components';
import { Drawer } from '../components/Drawer';
import { events } from '../config/events';

export function Events() {
  const { event } = useParams();
  console.log({ event });

  return (
    <>
      <Drawer />
      <Body>
        <Body.PageTitle>Events</Body.PageTitle>

        <Body.Section className='grid md:grid-cols-2 xl:grid-cols-3 gap-8'>
          {events.map((event) => (
            <article
              key={event.title}
              className='flex flex-col max-w-xs border border-slate-200 rounded-lg shadow'
            >
              <Link to={'#'}>
                <img
                  src={event.imgSrc}
                  alt={event.title}
                  className='object-cover h-48 w-full hover:scale-105 hover:shadow-lg transition'
                  loading='lazy'
                />
              </Link>

              <div className='p-2 xl:p-5 h-full w-full flex flex-col gap-3 justify-between text-left'>
                <Link to={'#'}>
                  <h5 className='text-lg font-bold tracking-tight text-slate-900'>
                    {event.title}
                  </h5>
                </Link>

                <p className='line-clamp-4 overflow-hidden text-ellipsis font-normal text-slate-700'>
                  {event.description}
                </p>

                <div className='flex flex-col md:flex-row md:justify-between md:items-center text-slate-400 italic text-xs'>
                  <div className='flex gap-1'>
                    <MapPin size={15} />
                    <span
                      className='truncate md:max-w-32 xl:max-w-28'
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
                    to='#'
                    className='w-fit px-3 py-2 font-medium text-center text-white bg-sky-700 rounded-lg hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-blue-300'
                  >
                    Read more
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </Body.Section>
      </Body>
    </>
  );
}
