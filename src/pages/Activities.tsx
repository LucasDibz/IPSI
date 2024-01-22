import { Body, Card } from '../components';
import { activities } from '../config/activities';

export function Activities() {
  return (
    <Body>
      <Body.PageTitle>Activities</Body.PageTitle>

      <Body.Section className='gap-3 md:grid-cols-2'>
        {activities.map((activity) => (
          <Card>
            <Card.Header>
              <Card.Title>{activity.title}</Card.Title>
              <Card.Subtitle>{activity.subtitle}</Card.Subtitle>
            </Card.Header>
            <Card.Content>{activity.content}</Card.Content>
            {activity.links && (
              <>
                <span className='inline-block mt-2'>Discover more at</span>
                {activity.links.map(({ title, to }, index) => (
                  <>
                    <Card.Link to={to}>{title}</Card.Link>
                    {index + 1 !== activity.links.length && ' and '}
                  </>
                ))}
              </>
            )}
          </Card>
        ))}
      </Body.Section>
    </Body>
  );
}

// activity.links.map(({ title, to }) => (
//   <Card.Link to={to}>{title}</Card.Link>
// ))
