import { Check } from 'lucide-react';
import { Body, Card } from '../components';
import { Authors } from '../components/Ipsers';
import { type Author, ipsers } from '../config/ipsers';

const SINPL_MEMBERS: Array<Author> = [
  'Giulia Priora',
  'Amanda Novaes',
  'Luc Barbero',
  'Pedro Batista',
  'Péter Mezei',
  'Pilar Montero',
  'Vicente Beviá',
];

const AUTHORS = Object.values(ipsers)
  .flatMap(({ members }) =>
    members.filter((member) => SINPL_MEMBERS.includes(member.name)),
  )
  .sort((a, b) => {
    if (a.name === 'Giulia Priora') return -1;

    return a.name.localeCompare(b.name);
  });

export function SINPL() {
  return (
    <>
      <Body variant='sinpl'>
        <Body.Section>
          <Card className='bg-white rounded-[4rem]'>
            <Card.Header>
              <Card.Title className='text-heading'>
                <span className='block'>Jean Monnet Module SINPL-EU</span>

                <span className='block font-light'>
                  Sustainability through Intellectual Property Law in EU
                </span>
              </Card.Title>
              <Card.Subtitle>2024 - 2027</Card.Subtitle>
            </Card.Header>
            <Card.Content className='md:text-justify'>
              <p>
                <b className='pr-1'>
                  SINPL-EU is the first course combining EU Intellectual
                  Property (IP) Law and Sustainability,
                </b>
                reflecting the EU focus on updating and harmonizing IP
                regulations to support sustainable development.
                <span className='block'>
                  The project is structured into three main teaching components
                </span>
              </p>

              <ul className='mt-6 space-y-6 list-inside'>
                <li className='ps-2'>
                  <b className='pr-1'>
                    Preparatory course on EU IP Law at NOVA School of Law
                  </b>
                  - This foundation module introduces the basics of EU IP law.
                </li>

                <li className='ps-2'>
                  <b className='pr-1'>
                    Curricular course on IP & Sustainability at NOVA School of
                    Law
                  </b>
                  - Taught by specialists in Patents, Trademarks, Copyright,
                  Designs, and Trade Secrets of each partner university, this
                  module explores how IP law can drive sustainable innovation in
                  the EU.
                </li>

                <li className='ps-2'>
                  <b className='pr-1'>Online Writing School</b>- Open for the
                  students of all the project partner universities, this final
                  component helps students develop academic writing skills
                  focused on key EU IP legal provisions and their impact on
                  sustainable innovation.
                </li>
              </ul>
            </Card.Content>
          </Card>

          <Card className='bg-white rounded-[4rem]'>
            <Card.Header>
              <Card.Title className='text-heading'>Project outputs</Card.Title>
            </Card.Header>
            <Card.Content>
              <ul className='list-inside space-y-4 m-auto'>
                {[
                  'Introductory Course on IP law (18 hours)',
                  'SINPL-EU Course on EU IP & Sustainability (30 hours)',
                  'Online Writing School on IP & Sustainability (10 hours)',
                  'Conference on Teaching IP & Sustainability',
                  'Conference on IP & Sustainability between theory and practice',
                  'Scientific publications',
                ].map((benefit, index) => (
                  <li
                    // biome-ignore lint/suspicious/noArrayIndexKey: not changing
                    key={index}
                    className='flex items-center gap-2 text-left'
                  >
                    <Check
                      size={16}
                      className='shrink-0 stroke-green-700 rounded-full'
                    />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </Card.Content>
          </Card>

          <Card className='bg-white rounded-[4rem] lg:absolute right-0 2xl:right-8 bottom-0'>
            <Card.Header>
              <Card.Title className='text-heading'>Project members</Card.Title>
            </Card.Header>
            <Card.Content>
              <Authors authors={AUTHORS} />
            </Card.Content>
          </Card>

          <Card className='bg-white rounded-[4rem] text-center'>
            <span className='block font-semibold text-lg'>Stay tuned!</span>

            <span className='text-sm'>
              To know more about our SINPL-EU project, reach out at
            </span>
            <a href='mailto:ipsi@novalaw.unl.pt' className='text-sm'>
              <strong className='px-1'>ipsi@novalaw.unl.pt</strong>
            </a>
          </Card>
        </Body.Section>
      </Body>
    </>
  );
}
