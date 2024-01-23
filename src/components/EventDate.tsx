type EventDateProps = {
  date: Date | { from: Date; to: Date };
};
export function EventDate({ date }: EventDateProps) {
  if (date instanceof Date) {
    return (
      <time className='ml-auto'>
        {date.toLocaleString('pt-PT', {
          day: 'numeric',
          month: 'short',
          year: '2-digit',
        })}
      </time>
    );
  }

  return (
    <span className='ml-auto'>
      <time className='px-1'>
        {date.from.toLocaleString('pt-PT', {
          day: 'numeric',
          month: 'short',
          year: '2-digit',
        })}
      </time>
      -
      <time className='px-1'>
        {date.to.toLocaleString('pt-PT', {
          day: 'numeric',
          month: 'short',
          year: '2-digit',
        })}
      </time>
    </span>
  );
}
