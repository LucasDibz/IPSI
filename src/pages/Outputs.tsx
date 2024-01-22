import { Body, Books, Card } from '../components';
import { outputs } from '../config/outputs';

export function Outputs() {
  return (
    <Body>
      <Body.PageTitle>Scientific Outputs</Body.PageTitle>

      <Body.Section>
        {Object.values(outputs).map((output) => (
          <Card key={output.title} className='max-w-5xl'>
            <Card.Title>{output.title}</Card.Title>
            <Card.Content>
              <ul className='divide-y divider-slate-200'>
                {output.books.map((book) => (
                  <Books key={book.title} book={book} />
                ))}
              </ul>
            </Card.Content>
          </Card>
        ))}
      </Body.Section>
    </Body>
  );
}
