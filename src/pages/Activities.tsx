import { Fragment } from 'react';
import { Body, Card } from '../components';
import { activities } from '../config/activities';

export function Activities() {
  return (
    <Body>
      <Body.PageTitle>Activities</Body.PageTitle>

      <Body.Section className='gap-3 md:grid-cols-2'>
        {activities.map((activity) => (
          <Card key={activity.title}>
            <Card.Header>
              <Card.Title>{activity.title}</Card.Title>
              <Card.Subtitle>{activity.subtitle}</Card.Subtitle>
            </Card.Header>
            <Card.Content>
              {/* biome-ignore lint/security/noDangerouslySetInnerHtml: trusted */}
              <p dangerouslySetInnerHTML={{ __html: activity.content }} />
            </Card.Content>
            {activity.links && (
              <div className='mt-auto ml-auto text-end italic'>
                <span>Discover more at</span>
                {activity.links.map(({ title, ...props }, index) => (
                  <Fragment key={title}>
                    <Card.Link {...props}>{title}</Card.Link>
                    {index + 1 !== activity.links.length && ' and '}
                  </Fragment>
                ))}
              </div>
            )}
          </Card>
        ))}
      </Body.Section>
    </Body>
  );
}
