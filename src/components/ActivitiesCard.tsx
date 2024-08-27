import { Fragment } from 'react';
import { Activity } from '../@types';
import { Card } from './Card';
import { Spinner } from './Spinner';

type ActivitiesCardProps = {
  activities: Activity[] | undefined;
  loading: boolean;
  error?: Error;
};
export const ActivitiesCard = ({
  activities,
  error,
  loading,
}: ActivitiesCardProps) => {
  if (loading || !activities) return <Spinner />;

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

  return activities.map((activity) => (
    <Card key={activity.id}>
      <Card.Header>
        <Card.Title>{activity.data.title[0].text}</Card.Title>
        <Card.Subtitle>{activity.data.subtitle[0].text}</Card.Subtitle>
      </Card.Header>
      <Card.Content>
        <p
          // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
          dangerouslySetInnerHTML={{ __html: activity.data.content[0].text }}
        />
      </Card.Content>
      {activity.data.links && activity.data.links.length > 0 && (
        <div className='mt-auto ml-auto text-end italic'>
          <span>Discover more at</span>
          {activity.data.links.map((link, index) => (
            <Fragment key={link.link.url}>
              <Card.Link to={link.link.url}>
                {link['link-title'][0].text}
              </Card.Link>
              {index + 1 !== activity.data.links.length && ' and '}
            </Fragment>
          ))}
        </div>
      )}
    </Card>
  ));
};
