import type { Output } from '../@types';
import { Body } from './Body';
import { Card } from './Card';
import { Publication } from './Publication';
import { Spinner } from './Spinner';
import { UIError } from './UIError';

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
    return <UIError error={error} />;
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
