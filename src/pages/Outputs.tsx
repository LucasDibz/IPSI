import { Body, Card } from '../components';
import { outputs } from '../config/outputs';

export function Outputs() {
  return (
    <Body>
      <Body.PageTitle>Scientific Outputs</Body.PageTitle>

      <Body.Section className='gap-3 md:grid-cols-2'>
        {outputs.map((output) => (
          <Card>
            <Card.Header>
              <Card.Title>{output.title}</Card.Title>
              <Card.Subtitle>{output.subtitle}</Card.Subtitle>
            </Card.Header>
            <Card.Content>{output.content}</Card.Content>
          </Card>
        ))}
      </Body.Section>
    </Body>
  );
}
