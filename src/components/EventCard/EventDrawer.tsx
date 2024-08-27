import { usePrismicDocumentByUID } from '@prismicio/react';
import { XCircle } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { EventDate, EventLocation, EventSpeakers } from '..';
import type { Event } from '../../@types';

export function EventDrawer() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const eventQuery = searchParams.get('event');

  if (!eventQuery) {
    dialogRef?.current?.close();
  }

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

  useEffect(() => {
    if (event) {
      if (!dialogRef?.current?.open) {
        dialogRef?.current?.showModal();
      }
    }
  }, [event]);

  const handleCloseModal = () => {
    setSearchParams();
  };

  return (
    // biome-ignore lint/a11y/useKeyWithClickEvents: modal...
    <dialog
      aria-labelledby='drawer-label'
      ref={dialogRef}
      onClose={handleCloseModal}
      onClick={(event) =>
        event.currentTarget === event.target && handleCloseModal()
      }
      className={`p-6 pl-10 z-50 h-full w-full md:w-2/3 overflow-y-auto transition-transform bg-slate-200 shadow border border-slate-300 rounded-xl overscroll-contain mr-0 backdrop:bg-slate-900/50 ${
        event ? '' : 'translate-x-full'
      }`}
    >
      <div className='flex flex-col gap-5'>
        <button
          type='button'
          className='outline-none'
          onClick={() => dialogRef.current?.close()}
        >
          <XCircle className='absolute left-2.5 bg-slate-200 rounded-full flex-shrink-0 text-slate-400 cursor-pointer hover:text-slate-500' />
        </button>

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
            className='text-lg text-rose-400 underline underline-offset-4 leading-6 font-semibold w-fit hover:brightness-75 transition'
          >
            Register here
          </a>
        )}

        {event?.data.workload && (
          <p className='text-slate-600 text-md font-semibold tracking-tight'>
            Workload: {event.data.workload}h
          </p>
        )}

        <div>
          <h4 className='text-lg font-bold tracking-tight text-slate-600'>
            Speakers:
          </h4>
          <EventSpeakers all speakers={event?.data.speakers} />
        </div>
      </div>

      <Agenda agenda={event?.data.agenda} />
    </dialog>
  );
}

const Agenda = ({ agenda }: { agenda?: Event['data']['agenda'] }) => {
  return (
    <section className='mt-5'>
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
