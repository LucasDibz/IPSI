import { UserCircle2 } from 'lucide-react';
import type { Author } from '../@types';
import { LocalIpser, SINPL_ROLES } from '../config/ipsers';
import { Body } from './Body';
import { Spinner } from './Spinner';
import { UIError } from './UIError';

type IpsersProps = {
  title: string;
  ipsers: Author[] | undefined;
  loading: boolean;
  error?: Error;
};
export const Ipsers = ({ title, ipsers, error, loading }: IpsersProps) => {
  if (loading || !ipsers) return <Spinner />;

  if (error) {
    return <UIError error={error} />;
  }

  return (
    <Body.Article>
      <Body.H1>{title}</Body.H1>

      <div className='flex flex-wrap gap-8 justify-center lg:justify-normal'>
        {ipsers
          .filter((author) => !author.data.invisible)
          .sort((a, b) => (a.data.name > b.data.name ? 1 : -1))
          .map((author) => (
            <a
              key={author.id}
              href={author.data.url.url}
              target={author.data.url.target}
              rel='noreferrer'
              className='group flex flex-col gap-3 items-center w-32'
            >
              <img
                src={author.data.image.url}
                alt={author.data.image.alt}
                loading='lazy'
                className='object-cover rounded-full h-32 w-32 border border-slate-400 shadow group-hover:shadow-lg group-hover:scale-105 transition'
                width={128}
                height={128}
              />
              <span className='font-semibold text-lg text-center'>
                {author.data.name}
              </span>
            </a>
          ))}
      </div>
    </Body.Article>
  );
};

/**
 * local image authors
 */
export const Authors = ({ authors }: { authors: LocalIpser[] }) => {
  return (
    <div className='flex flex-col justify-center gap-4 xl:gap-2 w-fit'>
      {authors?.map((author) => (
        <a
          key={author.name}
          href={author.url}
          target='_blank'
          rel='noreferrer'
          className='group flex gap-6 items-center'
        >
          {author.imgSrc ? (
            <img
              src={author.imgSrc}
              alt={author.name}
              loading='lazy'
              className='object-cover rounded-full h-12 w-12 border border-slate-400 shadow group-hover:shadow-lg group-hover:scale-105 transition'
              width={48}
              height={48}
            />
          ) : (
            <UserCircle2 size={48} strokeWidth={'0.5px'} strokeOpacity={0.5} />
          )}

          <div className='flex flex-col'>
            <span className='font-semibold text-lg text-left'>
              {author.name}
            </span>
            <span className='font-light text-xs text-left lg:max-w-48'>
              {SINPL_ROLES.get(author.name)}
            </span>
          </div>
        </a>
      ))}
    </div>
  );
};
