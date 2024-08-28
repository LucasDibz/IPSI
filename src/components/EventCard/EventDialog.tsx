import { usePrismicDocumentByUID } from '@prismicio/react';
import { useSearchParams } from 'react-router-dom';
import { EventDate, EventLocation, EventSpeakers } from '..';
import type { Event } from '../../@types';
import { Dialog } from '../Dialog';

export function EventDialog() {
  const [searchParams, setSearchParams] = useSearchParams();

  const eventQuery = searchParams.get('event');

  const [event] = usePrismicDocumentByUID<Event>('event', eventQuery ?? '', {
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
  });

  const handleCloseModal = () => {
    setSearchParams();
  };

  return (
    <Dialog open={!!eventQuery} onClose={handleCloseModal}>
      <div className='flex flex-col gap-3'>
        <h5
          id='drawer-label'
          className='text-lg font-bold tracking-tight text-slate-900'
        >
          {event?.data['event-title'][0].text}
        </h5>

        <span className='text-xs text-slate-500 italic flex flex-wrap gap-2 items-center justify-between'>
          <time className='inline-block'>
            <EventDate
              date={{
                from: event?.data['start-date'],
                to: event?.data['end-date'],
              }}
            />
          </time>

          <EventLocation
            text={event?.data['location-text']}
            location={event?.data.location}
          />
        </span>
      </div>

      {event?.data.link.target && (
        <a
          href={event.data.link.url}
          target={event.data.link.target}
          rel='noreferrer'
          className='text-lg text-heading underline underline-offset-4 leading-6 font-semibold w-fit hover:brightness-75 transition'
        >
          Register here
        </a>
      )}

      {event?.data.workload && (
        <p className='text-slate-600 text-md font-semibold tracking-tight'>
          Workload: {event.data.workload}h
        </p>
      )}

      {event?.data.speakers && (
        <div>
          <h4 className='text-lg font-bold tracking-tight text-slate-600'>
            Speakers:
          </h4>
          <EventSpeakers all speakers={event?.data.speakers} />
        </div>
      )}

      <Agenda agenda={event?.data.agenda} />
    </Dialog>
  );
}

const Agenda = ({ agenda }: { agenda?: Event['data']['agenda'] }) => {
  return (
    <section>
      <ol className='relative border-s border-slate-400'>
        {agenda?.map((agenda, index) => {
          return (
            <li key={`agenda-${index}`} className='ms-4'>
              {agenda.date && (
                <div className='mt-5'>
                  <div className='absolute w-3 h-3 bg-slate-400 rounded-full -start-1.5 border border-slate-300 mt-1.5 last:bottom-0' />
                  <time className='text-sm leading-none text-slate-500 italic'>
                    {new Date(agenda.date).toLocaleString(undefined, {
                      day: '2-digit',
                      month: 'long',
                      year: 'numeric',
                    })}
                  </time>
                  <h3 className='text-lg font-semibold text-slate-900'>
                    {agenda.title}
                  </h3>
                </div>
              )}

              {!agenda.date && (
                <div
                  key={`schedule-${index}`}
                  className='p-3 flex flex-col gap-2 border border-slate-300'
                >
                  <time className='text-sm leading-none text-slate-400 italic'>
                    {agenda.hour}
                  </time>

                  <span className='font-bold text-slate-600 leading-6 tracking-wider'>
                    {agenda.title}
                  </span>

                  <span className='text-slate-500 font-semibold flex gap-2 items-center'>
                    {agenda.speakers?.[0]?.text}
                  </span>
                </div>
              )}
            </li>
          );
        })}
      </ol>
    </section>
  );
};
