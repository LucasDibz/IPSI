import { Output } from '../@types';
import { Body } from './Body';
import { Card } from './Card';
import { Publication } from './Publication';
import { Spinner } from './Spinner';

type OutputsProps = {
  title: string;
  outputs: Output[] | undefined;
  loading: boolean;
  error?: Error;
};
export const OutputsCard = ({
  loading,
  error,
  title,
  outputs,
}: OutputsProps) => {
  if (loading || !outputs) return <Spinner />;

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
    <Body.Section>
      <Card className='max-w-5xl'>
        <Card.Title>{title}</Card.Title>
        <Card.Content>
          {outputs?.map(({ data: output }) => (
            <ul
              key={output.title[0].text}
              className='divide-y divider-slate-200'
            >
              <Publication output={output} />
            </ul>
          ))}
        </Card.Content>
      </Card>
    </Body.Section>
  );
};
