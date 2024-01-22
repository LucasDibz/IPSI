import { Body, Book, Card } from '../components';
import { outputs } from '../config/outputs';

export function Outputs() {
  return (
    <Body>
      <Body.PageTitle>Scientific Outputs</Body.PageTitle>

      <Body.Section>
        {outputs.map((output) => (
          <Card key={output.title}>
            <Card.Title>{output.title}</Card.Title>
            <Card.Content>
              <ol className='mt-3 divide-y divider-slate-200'>
                {output.books.map((book) => (
                  <Book key={book.title} book={book} />
                ))}
              </ol>
            </Card.Content>
          </Card>
        ))}
      </Body.Section>
    </Body>
  );
}
