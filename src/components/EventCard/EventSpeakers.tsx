import { Fragment } from 'react';
import type { Author } from '../../@types';

type EventSpeakersProps = {
  speakers: { speaker: Author }[] | undefined;
  speakersNumber?: number;
  all?: boolean;
};
export function EventSpeakers({
  speakers,
  all,
  speakersNumber = 5,
}: EventSpeakersProps) {
  if (!speakers) return null;

  if (!all)
    return (
      <div className='flex flex-shrink-0 -space-x-4 rtl:space-x-reverse'>
        {speakers.slice(0, speakersNumber).map(({ speaker }) => (
          // <a
          //   key={speaker.id}
          //   href={speaker.data.url.url}
          //   target={speaker.data.url.target}
          //   rel='noopener noreferrer'
          // >
          <img
            key={speaker.id}
            src={speaker.data.image.url}
            alt={speaker.data.image.alt}
            className={
              'w-10 h-10 border-2 border-slate-300 rounded-full shadow hover:scale-125 transition'
            }
            loading='lazy'
            width={40}
            height={40}
          />
        ))}

        {speakers.length > speakersNumber && (
          <button
            type='button'
            className='w-10 h-10 border-2 rounded-full shadow transition border-slate-300 bg-slate-700 text-white text-sm font-semibold'
          >
            +{speakers.length - speakersNumber}
          </button>
        )}
      </div>
    );

  return (
    <div className='p-5 flex flex-wrap gap-5'>
      {speakers.map(({ speaker }) => (
        // <a
        //   key={speaker.id}
        //   href={speaker.data.url.url}
        //   target={speaker.data.url.target}
        //   rel='noopener noreferrer'
        //   className='flex flex-col items-center'
        // >
        <Fragment key={speaker.id}>
          <img
            src={speaker.data.image.url}
            alt={speaker.data.image.alt}
            className={
              'w-16 h-16 border-2 border-slate-300 rounded-full shadow hover:scale-125 transition'
            }
            width={64}
            height={64}
          />
          <span className='font-semibold text-center'>
            {speaker.data.name.split(' ')[0]}
          </span>
        </Fragment>
        // </a>
      ))}
    </div>
  );
}
