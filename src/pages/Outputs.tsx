import { Body, Books, Card } from '../components';
import { outputs } from '../config/outputs';

export function Outputs() {
  return (
    <Body>
      <Body.PageTitle>Scientific Outputs</Body.PageTitle>

      <Body.Section>
        <Card className='max-w-2xl mx-auto'>
          <Card.Title>NOVA IPSI Booklet</Card.Title>
          <Card.Content className='md:flex gap-4'>
            <a
              download
              href={new URL('/Booklet-IPSI-2023.pdf', import.meta.url).href}
              className='min-h-[420px] md:h-auto md:min-w-96 md:rounded-none md:rounded-s-lg shadow hover:shadow-lg hover:scale-105 transition'
            >
              <img
                src={new URL('/images/booklet.jpg', import.meta.url).href}
                alt={'NOVA IPSI Booklet'}
                className='object-cover w-full rounded-t-lg'
              />
            </a>
            <div className='flex flex-col gap-5 mt-2 md:mt-0 justify-between text-slate-600 leading-8 text-left'>
              <p>
                The
                <strong className='px-1 font-bold'>NOVA IPSI Booklet</strong>
                is a comprehensive compilation featuring our reviews of the most
                inspiring and impactful readings, articles, court decisions,
                reports, and events we engaged with throughout the year. The
                booklet is available for <strong>free</strong>, and if
                preferred, you can request a printed version from us.
              </p>

              <div className='h-full w-full flex items-center justify-center'>
                <a
                  download
                  href={new URL('/Booklet-IPSI-2023.pdf', import.meta.url).href}
                  className='w-fit px-3 py-2 text-center text-white border border-slate-400 bg-slate-600 rounded-lg hover:brightness-90 hover:shadow transition focus:ring-4 focus:outline-none focus:ring-slate-200'
                >
                  Download here
                </a>
              </div>
            </div>
          </Card.Content>
        </Card>
      </Body.Section>

      <Body.Section>
        {/* Display only outputs that have URL's */}
        {Object.values(outputs)
          .filter((output) => output.books.some((book) => book.link))
          .map((output) => (
            <Card key={output.title} className='max-w-5xl'>
              <Card.Title>{output.title}</Card.Title>
              <Card.Content>
                <ul className='divide-y divider-slate-200'>
                  {output.books
                    .filter((book) => book.link)
                    .map((book) => (
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
