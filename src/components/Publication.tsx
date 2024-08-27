import type { Output } from '../@types';

//@ts-expect-error: it exists...
const formatter = new Intl.ListFormat('en', {
  style: 'long',
  type: 'conjunction',
});

export function Publication({ output }: { output: Output['data'] }) {
  const Tag = output?.link ? 'a' : 'div';
  const TagProps = output?.link && {
    href: output.link.url,
    target: output.link.target,
    rel: 'noopener noreferrer',
  };

  return (
    <li>
      <div
        className={`items-center flex flex-col md:flex-row gap-3 p-3 rounded-lg sm:flex${
          output?.link
            ? ' hover:shadow transition bg-ipsi/20 border border-ipsi mb-2'
            : ''
        }`}
      >
        <div className='flex flex-shrink-0 w-fit -space-x-4 rtl:space-x-reverse sm:pr-3'>
          {output.authors?.map(({ author }, index) => (
            <a
              key={author.data.name}
              href={author.data.url.url}
              target={author.data.url.target}
              rel='noopener noreferrer'
              className='hover:z-50'
              style={{ zIndex: 5 - index }}
            >
              <img
                src={author.data.image.url}
                alt={author.data.image.alt}
                className={
                  'w-12 h-12 border-2 border-slate-300 rounded-full shadow hover:scale-125 transition'
                }
              />
            </a>
          ))}
        </div>

        <Tag className='w-full flex flex-col gap-3 flex-1' {...TagProps}>
          <div className='text-left'>
            <span className='font-bold text-slate-800'>
              {output.title[0].text}
            </span>
            {output?.subtitle && (
              <span className='block md:inline-block mt-2 md:mt-0 md:ml-5 italic text-xs text-slate-400'>
                {output.subtitle[0].text}
              </span>
            )}
          </div>
          <span className=' font-semibold text-slate-600'>
            {formatter.format(
              output.authors?.map(({ author }) => author.data.name),
            )}
          </span>
        </Tag>
      </div>
    </li>
  );
}
