import { SinplProjectCard } from './SinplProjectCard';

const projects = [
  {
    title: 'Project Year 1',
    imageSrc: './images/sinpl-eu-project-1.jpeg',
    pdfFile: './Course syllabus year1.pdf',
  },
  {
    title: 'Project Year 2',
    label: 'Midterm seminar "Pathways of IP law teaching" 1 June 2026',
    pdfFile: './Course syllabus year2.pdf',
    download: {
      title: 'EU IP Law Deck 2026',
      file: './EU IP LAW DECK 2026 short version.pdf',
    },
  },
  {
    title: 'Project Year 3',
    label: 'Final conference "Sustainability through EU IP Law"',
  },
];

export function SinplProjects() {
  return (
    <div className='flex flex-col gap-6'>
      {projects.map((project) => (
        <SinplProjectCard key={project.title} project={project} />
      ))}
    </div>
  );
}
