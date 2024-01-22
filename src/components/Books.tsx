import { ipsers } from '../config/ipsers';
import type { Book } from '../config/outputs';

//@ts-expect-error: it exists...
const formatter = new Intl.ListFormat('en', {
  style: 'long',
  type: 'conjunction',
});

export function Books({ book }: { book: Book }) {
  const Tag = book?.link ? 'a' : 'div';
  const TagProps = book?.link && {
    href: book.link,
    target: '_blank',
    rel: 'noopener noreferrer',
  };

  return (
    <li>
      <Tag
        href={book?.link}
        className={`items-center flex flex-col md:flex-row gap-3 p-3 rounded-lg sm:flex${
          book?.link
            ? ' hover:shadow transition bg-ipsi/20 border border-ipsi mb-2'
            : ''
        }`}
        {...TagProps}
      >
        <div className='flex flex-shrink-0 w-fit -space-x-4 rtl:space-x-reverse sm:pr-3'>
          {book.authors.map((author, index) => (
            <a
              key={author}
              href={getAuthorProps(author)?.url}
              target='_blank'
              rel='noopener noreferrer'
              className='hover:z-50'
              style={{ zIndex: 5 - index }}
            >
              <img
                src={getAuthorProps(author)?.imgSrc}
                alt={author}
                className={
                  'w-10 h-10 md:w-12 md:h-12 border-2 rounded-full shadow hover:scale-125 transition'
                }
              />
            </a>
          ))}
        </div>

        <div className='flex flex-col gap-3 flex-1'>
          <p className='font-bold text-slate-900'>{book.title}</p>
          {book?.subtitle && (
            <p className='italic text-xs text-end text-slate-500'>
              {book.subtitle}
            </p>
          )}
          <span className=' font-semibold text-slate-600'>
            {formatter.format(book.authors)}
          </span>
        </div>
      </Tag>
    </li>
  );
}

function getAuthorProps(name: string) {
  const members = Object.values(ipsers).flatMap((category) => category.members);
  const author = members.find((member) => member.name === name);

  return author;
}
