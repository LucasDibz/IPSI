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
        className={`items-center block p-3 rounded-lg gap-1 sm:flex${
          book?.link
            ? ' hover:shadow transition bg-ipsi/20 border border-ipsi mb-2'
            : ''
        }`}
        {...TagProps}
      >
        <div className='flex -space-x-4 rtl:space-x-reverse sm:pr-3 flex-shrink-0'>
          {book.authors.map((author, index) => (
            <img
              key={author}
              className={'w-12 h-12 border-2 rounded-full'}
              style={{ zIndex: 10 - index }}
              src={getImgSrcFromName(author)}
              alt={author}
            />
          ))}
        </div>

        <div className='flex flex-col gap-1 flex-1'>
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

function getImgSrcFromName(name: string) {
  const members = Object.values(ipsers).flatMap((category) => category.members);
  const author = members.find((member) => member.name === name);

  return author?.imgSrc;
}
