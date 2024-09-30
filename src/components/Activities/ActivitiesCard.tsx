import { Fragment } from 'react';
import type { Activity } from '../../@types';
import { Card } from '../Card';
import { EventCardSkeleton } from '../EventCard';
import { UIError } from '../UIError';

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
  if (loading || !activities) return <EventCardSkeleton />;

  if (error) {
    return <UIError error={error} />;
  }

  return activities.map((activity) => (
    <Card key={activity.id}>
      <Card.Header className='min-h-24'>
        <Card.Title>{activity.data.title[0].text}</Card.Title>
        <Card.Subtitle className='text-md'>
          {activity.data.subtitle?.[0]?.text}
        </Card.Subtitle>
      </Card.Header>
      <Card.Content className='text-center'>
        <p
          // biome-ignore lint/security/noDangerouslySetInnerHtml: Safe
          dangerouslySetInnerHTML={{ __html: activity.data.content[0].text }}
        />
      </Card.Content>
      {activity.data.links && activity.data.links.length > 0 && (
        <div className='mt-auto ml-auto text-end italic text-sm'>
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
