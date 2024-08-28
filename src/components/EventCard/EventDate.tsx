type EventDateProps = {
  date: { from?: string; to?: string };
};
export function EventDate(props: EventDateProps) {
  const { from, to } = props.date;

  if (!from) return null;

  return (
    <div>
      <time className='ml-auto pr-1'>
        {new Date(from).toLocaleString(undefined, {
          day: 'numeric',
          month: 'short',
          year: '2-digit',
        })}
      </time>

      {to && (
        <>
          -
          <time className='px-1'>
            {new Date(to).toLocaleString(undefined, {
              day: 'numeric',
              month: 'short',
              year: '2-digit',
            })}
          </time>
        </>
      )}
    </div>
  );
}
