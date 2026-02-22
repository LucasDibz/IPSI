import { Check } from 'lucide-react';
import { useState } from 'react';
import { Body, Card } from '../components';
import { Authors } from '../components/AboutUs';
import { type Author, ipsers } from '../config/ipsers';
import { SinplProjectCard } from './SinplProjectCard';

const projects = [
  {
    label: 'Project Year 1',
    imageSrc: './images/sinpl-eu-project-1.jpeg',
    pdfFile: './Course syllabus year1.pdf',
  },
  { label: 'Project Year 2', pdfFile: './Course syllabus year2.pdf' },
  { label: 'Project Year 3' },
];

const SINPL_MEMBERS: Array<Author> = [
  'Amanda Costa Novaes',
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
  const [activeProject, setActiveProject] = useState(0);
  const project = projects[activeProject];

  return (
    <>
      <Body variant='sinpl' className='pt-32' showImage>
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
                At the NOVA School of Law the focus on Intellectual Property and
                Sustainability has been growing through our research interests
                and activities at NOVA IPSI and, since 2024, also thanks to the
                <b className='pl-1'>SINPL-EU project</b>
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

          <Card className='bg-white rounded-[3rem] max-w-full'>
            <ul className='-mb-3 flex flex-wrap text-sm'>
              {projects.map((p, i) => (
                <li key={p.label}>
                  <button
                    type='button'
                    className='inline-block p-4 text-lg font-bold text-slate-400 rounded-t-lg hover:cursor-pointer hover:shadow-inner transition data-[active=true]:shadow-inner data-[active=true]:text-heading'
                    data-active={i === activeProject}
                    onClick={() => setActiveProject(i)}
                  >
                    {p.label}
                  </button>
                </li>
              ))}
            </ul>
            <Card.Content>
              <SinplProjectCard
                key={activeProject}
                imageSrc={project.imageSrc}
                pdfFile={project.pdfFile}
              />
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
