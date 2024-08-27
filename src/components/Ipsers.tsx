import { Author } from '../@types';
import { Body } from './Body';
import { Card } from './Card';
import { Spinner } from './Spinner';

type IpsersProps = {
  title: string;
  ipsers: Author[] | undefined;
  loading: boolean;
  error?: Error;
};
export const Ipsers = ({ title, ipsers, error, loading }: IpsersProps) => {
  if (loading || !ipsers) return <Spinner />;

  if (error) {
    console.error(error);
    return (
      <Card className='max-w-5xl bg-red-300'>
        <Card.Title className='text-red-700 font-bold'>
          Something went wrong
        </Card.Title>
      </Card>
    );
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
