import { MapPin, XCircle } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { EventDate, EventSpeakers } from '.';
import { events } from '../config/events';

//@ts-expect-error: it exists...
const formatter = new Intl.ListFormat('en', {
  style: 'long',
  type: 'conjunction',
});

export function Drawer() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const eventQuery = searchParams.get('event');

  if (!eventQuery) {
    dialogRef?.current?.close();
  }

  const event = events.find(
    (event) => event?.title.toLowerCase().split(' ').join('-') === eventQuery,
  );

  useEffect(() => {
    if (event) {
      if (!dialogRef?.current?.open) {
        dialogRef?.current?.showModal();
      }
    }
  }, [event]);

  return (
    <dialog
      aria-labelledby='drawer-label'
      ref={dialogRef}
      onClose={() => setSearchParams()}
      className={`p-6 pl-10 z-50 h-full w-full md:w-2/3 overflow-y-auto transition-transform bg-slate-200 shadow border border-slate-300 rounded-xl overscroll-none mr-0 backdrop:bg-slate-900/50 ${
        event ? '' : 'translate-x-full'
      }`}
    >
      <div className='flex flex-col gap-5'>
        <button type='button' onClick={() => dialogRef.current?.close()}>
          <XCircle className='absolute left-2.5 bg-slate-200 rounded-full flex-shrink-0 text-slate-400 cursor-pointer hover:text-slate-500' />
        </button>
        <div>
          <h5
            id='drawer-label'
            className='text-lg font-bold tracking-tight text-slate-900'
          >
            {event?.title}
          </h5>
          <time className='text-sm text-slate-500 italic'>
            <EventDate date={event?.date ?? new Date()} />
          </time>
        </div>

        <div className='flex gap-1 text-slate-500 italic text-xs'>
          <MapPin size={15} className='flex-shrink-0' />
          <span title={event?.location}>{event?.location}</span>
        </div>

        <span className='text-slate-600 text-md'>{event?.description}</span>

        {event?.workload && (
          <p className='text-slate-600 text-md font-semibold tracking-tight'>
            Workload: {event?.workload}h
          </p>
        )}

        <div>
          <h4 className='text-lg font-bold tracking-tight text-slate-600'>
            Speakers:
          </h4>
          <EventSpeakers event={event} all />
        </div>
      </div>

      <section className='mt-5'>
        <ol className='relative border-s border-slate-400'>
          {event?.agenda.map((agenda, index) => (
            <li key={`agenda-${index}`} className='mt-5 ms-4'>
              <div className='absolute w-3 h-3 bg-slate-400 rounded-full -start-1.5 border border-slate-300 mt-1.5 last:bottom-0' />
              <time className='text-sm leading-none text-slate-500 italic'>
                {agenda.day}
              </time>
              <h3 className='text-lg font-semibold text-slate-900'>
                {agenda.title}
              </h3>

              {agenda.schedule.map((schedule, index) => (
                <div
                  key={`schedule-${index}`}
                  className='p-3 flex flex-col gap-2 border border-slate-300'
                >
                  <time className='text-sm leading-none text-slate-400 italic'>
                    {schedule.hour}
                  </time>

                  <span className='font-bold text-slate-600 leading-6 tracking-wider'>
                    {schedule.event}
                  </span>

                  <span className='text-slate-500 font-semibold flex gap-2 items-center'>
                    {formatter.format(schedule.authors)}
                  </span>

                  {schedule.guests && (
                    <div className='space-x-1 text-slate-600'>
                      Guest:
                      <span className='px-1 font-semibold'>
                        {formatter.format(schedule.guests)}
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </li>
          ))}
        </ol>
      </section>
    </dialog>
  );
}
