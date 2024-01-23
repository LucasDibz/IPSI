import { Event } from '../config/events';
import { Author } from '../config/ipsers';
import { getAuthorProps } from '../utils/getAuthorProps';

type EventSpeakersProps = {
  event: Event;
};
export function EventSpeakers({ event }: EventSpeakersProps) {
  const authors = new Set<Author>();

  for (const events of event.agenda) {
    for (const item of events.schedule) {
      if (item.authors) {
        for (const author of item.authors) {
          authors.add(author);
        }
      }
    }
  }

  return (
    <div className='flex flex-shrink-0 -space-x-4 rtl:space-x-reverse'>
      {Array.from(authors)
        .slice(0, 3)
        .map((author) => (
          <a
            key={author}
            href={getAuthorProps(author)?.url}
            target='_blank'
            rel='noopener noreferrer'
          >
            <img
              src={getAuthorProps(author)?.imgSrc}
              alt={author}
              className={
                'w-10 h-10 border-2 border-slate-300 rounded-full shadow hover:scale-125 transition'
              }
            />
          </a>
        ))}
      {authors.size > 3 && (
        <button
          type='button'
          className='w-10 h-10 border-2 rounded-full shadow transition border-slate-300 bg-slate-700 text-white text-sm font-semibold'
        >
          +{Array.from(authors).slice(3).length}
        </button>
      )}
    </div>
  );
}
