import { Card } from './Card';

type UIErrorProps = {
  error: Error;
};
export const UIError = ({ error }: UIErrorProps) => {
  console.error(error.message);
  return (
    <Card className='max-w-5xl bg-red-300'>
      <Card.Title className='text-red-700 font-bold'>
        Something went wrong
      </Card.Title>
    </Card>
  );
};
