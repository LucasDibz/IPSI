import { Card } from './Card';

type UIErrorProps = {
  error: Error;
};
export const UIError = ({ error }: UIErrorProps) => {
  console.error(error.message);
  return (
    <Card className='max-w-xs !bg-red-200 text-center'>
      <Card.Title className='!text-red-700 font-bold'>
        Something went wrong
      </Card.Title>
    </Card>
  );
};
