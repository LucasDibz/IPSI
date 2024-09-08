import { Check } from 'lucide-react';
import { Body, Card } from '../components';
import { Authors } from '../components/Ipsers';
import { type Author, ipsers } from '../config/ipsers';

const SINPL_MEMBERS: Array<Author> = [
  'Amanda Novaes',
  'Luc Desaunettes-Barbero',
  'Pedro Henrique D. Batista',
  'Péter Mezei',
  'Pilar Montero',
  'Vicente Gimeno Beviá',
];

const coordinators = ipsers.coordination.members;
const members = Object.values(ipsers)
  .flatMap(({ members }) =>
    members.filter((member) => SINPL_MEMBERS.includes(member.name)),
  )
  .sort((a, b) => a.name.localeCompare(b.name));

export function SINPL() {
  return (
    <>
      <Body variant='sinpl' className='pt-32'>
        <Body.Section>
          <Card className='bg-white rounded-[3rem] max-w-full'>
            <Card.Header>
              <Card.Title className='text-heading'>
                <span className='block'>Jean Monnet Module SINPL-EU</span>

                <span className='block font-light'>
                  Sustainability through Intellectual Property Law in EU
                </span>
              </Card.Title>
              <Card.Subtitle className='italic'>2024 - 2027</Card.Subtitle>
            </Card.Header>
            <Card.Content className='md:text-justify flex flex-col gap-2 leading-relaxed'>
              <p>
                <b className='pr-1'>SINPL-EU</b>
                is a course that combines EU Intellectual Property (IP) Law with
                Sustainability, addressing the growing need to integrate these
                areas as the EU is expanding its harmonization of IP rules and
                modernizing them to promote sustainable goals. While IP law is
                becoming essential in EU law curricula, there is a lack of focus
                on its connection with Sustainability, which is crucial for
                driving innovation across industries.
              </p>
              <p>
                <b className='pr-1'>SINPL-EU</b>fills this gap by offering
                students a comprehensive learning experience in IP law,
                emphasizing its role in promoting sustainable innovation in the
                EU. The course covers key IP areas like Patents, Trademarks,
                Copyright, Designs, and Trade Secrets, helping students and
                professors advance the field through academic theories and
                policy proposals.
              </p>
            </Card.Content>
          </Card>

          <Card className='bg-white rounded-[3rem] max-w-full'>
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

          <Card className='bg-white rounded-[3rem] lg:absolute right-0 md:-right-12 2xl:right-2 bottom-0 max-w-full'>
            <Card.Header>
              <Card.Title className='text-heading'>Coordinator</Card.Title>
            </Card.Header>
            <Card.Content className='py-2'>
              <Authors authors={coordinators} />
            </Card.Content>
            <Card.Header>
              <Card.Title className='text-heading'>Members</Card.Title>
            </Card.Header>
            <Card.Content className='py-2'>
              <Authors authors={members} />
            </Card.Content>
          </Card>

          <Card className='bg-white rounded-[3rem] max-w-full text-center'>
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
