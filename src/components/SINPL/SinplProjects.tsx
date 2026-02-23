import { useState } from 'react';
import { Card } from '../';
import { SinplProjectCard } from './SinplProjectCard';

const projects = [
  {
    label: 'Year 1',
    imageSrc: './images/sinpl-eu-project-1.jpeg',
    pdfFile: './Course syllabus year1.pdf',
  },
  {
    label: 'Year 2',
    title: 'Midterm seminar "Pathways of IP law teaching"',
    pdfFile: './Course syllabus year2.pdf',
  },
  {
    label: 'Year 3',
    title: 'Final conference "Sustainability through EU IP Law"',
  },
];

export function SinplProjects() {
  const [activeProject, setActiveProject] = useState(0);
  const project = projects[activeProject];

  return (
    <Card className='bg-white rounded-[3rem] max-w-full'>
      <Card.Title className='text-heading'>Projects</Card.Title>
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
          title={project.title}
          imageSrc={project.imageSrc}
          pdfFile={project.pdfFile}
        />
      </Card.Content>
    </Card>
  );
}
