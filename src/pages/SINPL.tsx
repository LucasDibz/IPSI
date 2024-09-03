import { Check } from 'lucide-react';
import { Body, Card } from '../components';
import { Authors } from '../components/Ipsers';
import { type Author, ipsers } from '../config/ipsers';

const SINPL_COORDINATORS: Array<Author> = ['Giulia Priora', 'Amanda Novaes'];
const SINPL_MEMBERS: Array<Author> = [
  'Luc Barbero',
  'Pedro Batista',
  'Péter Mezei',
  'Pilar Montero',
  'Vicente Beviá',
];

const coordinators = Object.values(ipsers).flatMap(({ members }) =>
  members.filter((member) => SINPL_COORDINATORS.includes(member.name)),
);
const members = Object.values(ipsers)
  .flatMap(({ members }) =>
    members.filter((member) => SINPL_MEMBERS.includes(member.name)),
  )
  .sort((a, b) => a.name.localeCompare(b.name));

export function SINPL() {
  return (
    <>
      <Body variant='sinpl'>
        <Body.Section>
          <Card className='bg-white rounded-[3rem] max-w-full'>
            <Card.Header>
              <Card.Title className='text-heading'>
                The Jean Monnet Module on Sustainability through Intellectual
                Property Law in EU (SINPLE-EU)
              </Card.Title>
              <Card.Subtitle className='text-xs italic'>
                from September 2024 to September 2027
              </Card.Subtitle>
            </Card.Header>
            <Card.Content className='md:text-justify flex flex-col gap-2 leading-relaxed'>
              <p>
                <b className='pr-1'>SINPL-EU</b>
                is the first course combining EU Intellectual Property (IP) Law
                and Sustainability. It is a 30-hours curricular course held at
                NOVA School of Law in Lisbon, complemented by a 18-hours
                preparatory course on Foundations of IP law and a 10-hours
                Online Writing School component, the latter being open to the
                students of all the project partner universities. The need to
                combine EU IP law and Sustainability comes from the nature and
                evolution of this legal discipline: the EU is expanding its
                harmonization of IP rules and modernizing them to promote
                sustainable goals.
              </p>

              <p>
                EU IP law is becoming a fundamental part of law school curricula
                across the EU. However, there is a lack of learning activities
                on the intersection between IP and Sustainability. This is a
                highly problematic gap, as IP law is central to incentive all
                industry sectors towards technological and cultural innovation.
              </p>

              <p>
                <b className='pr-1'>SINPL-EU</b>
                aims to fill this gap. It provides a high-profile learning
                experience for students passionate about EU law, IP law, and
                Sustainability studies. The course covers all the main areas of
                IP law - namely Patents, Trademarks, Copyright, Designs, and
                Trade Secrets - and explores them through the lens of the
                promotion of sustainable innovation in the EU internal market.
                Building a solid background and applying their knowledge to
                practical cases, students and their professors will jointly
                advance the discipline of EU IP law, developing academic
                doctrine and suggesting policy proposals. By doing so,{' '}
                <b className='pr-1'>SINPL-EU</b>
                will significantly support the role of the EU as the first
                player regulating IP law for a sustainable world.
              </p>

              <span className='text-sm'>
                More information at:
                <a
                  href='https://novaipsi.novalaw.unl.pt'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='pl-1 font-semibold text-heading'
                >
                  https://novaipsi.novalaw.unl.pt
                </a>
              </span>
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

          <Card className='bg-white rounded-[3rem] lg:absolute right-0 2xl:right-8 bottom-0'>
            <Card.Header>
              <Card.Title className='text-heading'>Coordinators</Card.Title>
            </Card.Header>
            <Card.Content>
              <Authors authors={coordinators} />
            </Card.Content>
            <Card.Header>
              <Card.Title className='text-heading'>Members</Card.Title>
            </Card.Header>
            <Card.Content>
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
