import type { Author } from './ipsers';

type Schedule = {
  day?: string;
  title?: string;
  schedule: {
    hour?: string;
    event: string;
    authors?: Author[];
    guests?: string[];
  }[];
};

export type Event = {
  title: string;
  link?: string;
  imgSrc: string;
  date: Date | { from: Date; to: Date };
  location: string;
  description: string;
  workload?: number;
  agenda: Schedule[];
};

export const events: Event[] = [
  {
    title: 'Annual Lecture 2023',
    imgSrc: new URL('/images/events/annual_lecture_2023.jpeg', import.meta.url)
      .href,
    date: new Date('14 November, 2023'),
    location: 'Hybrid event at NOVA School of Law and Online',
    description:
      'After a year of passionate work, we are pleased to invite you to our NOVA IPSI Annual Lecture 2023! Join us for a moment of sharing and open discussion on IP & sustainability featuring a keynote lecture on Equity and International IP Law and a joyful gathering with live music and cocktail buffet.',
    agenda: [
      {
        day: '14 November, 2023',
        schedule: [
          {
            hour: '14:00',
            event:
              'Welcome greetings - Margarida Lima Rego and Jorge Morais Carvalho, Dean and Vice-Dean NOVA School of Law.\n One year of NOVA IPSI - Giulia Priora, Assistant Professor and Director NOVA IPSI',
            authors: ['Giulia Priora'],
          },
          {
            hour: '14:30',
            event:
              'Keynote Lecture “Equity and International IP Law” - Emmanuel Oke, Senior Lecturer Edinburgh Law School',
          },
          {
            hour: '15:00',
            event:
              'Reaction and moderated open discussion - João Pedro Quintais, Assistant Professor IViR Amsterdam/NOVA IPSI Advisory Board with the moderation of Júlia Veiga, Aline Bratti, Rúben Ferreira Researchers NOVA IPSI',
            authors: ['Aline Bratti', 'Rúben Ferreira', 'Júlia Schütz Veiga'],
          },
          {
            hour: '15:45',
            event:
              'Closing remarques - Claire Bright, Associate Professor and Director NOVA BHRE',
            authors: ['Claire Bright'],
          },
          {
            hour: '16:00',
            event: 'Live music performance and cocktail buffet - JurisTuna',
          },
        ],
      },
    ],
  },
  {
    title: 'Introduction to Intellectual Property Law in the EU',
    imgSrc: new URL(
      '/images/events/introduction_course_2022.jpeg',
      import.meta.url,
    ).href,
    date: { from: new Date('June 6, 2022'), to: new Date('June 9, 2022') },
    location:
      'Hybrid event at NOVA School of Law and Online with an optional visit to the Intellectual Property Court in Lisbon on June 7th at 10:00 AM (optional)',
    description:
      'NOVA IPSI launches its Summer Course on Introduction to IP in the EU, 5-9 June, online with an optional visit to IP Tribunal in Lisbon.',
    workload: 20,
    agenda: [
      {
        day: '5 June 2023',
        title: 'Introduction to EU IP Law',
        schedule: [
          {
            hour: '14:00 - 15:00',
            event: 'Lecture: What is EU IP law?',
            authors: ['Giulia Priora'],
          },
          {
            hour: '15:00 - 15:30',
            event: 'Class discussion: Main applications of IP law',
            authors: ['Monyca Motta', 'Amanda Novaes'],
          },
          {
            hour: '15:45 - 17:00',
            event: 'Lecture: The daily life of a European IP lawyer',
            guests: ["Vasco Stillwell d'Andrade"],
          },
          {
            hour: '17:00 - 18:00',
            event: 'Q&A and Daily Recap',
            authors: ['Hande Özkayagan'],
          },
        ],
      },
      {
        day: '6 June 2023',
        title: 'EU Trademarks',
        schedule: [
          {
            hour: '14:00 - 15:00',
            event: 'Lecture: What are EU trademarks?',
            authors: ['Giulia Priora'],
          },
          {
            hour: '15:00 - 15:30',
            event: 'Case study: Trademark infringements',
            authors: ['Monyca Motta', 'Amanda Novaes'],
          },
          {
            hour: '15:45 - 17:00',
            event: 'Lecture: EU trademark registration',
            guests: ['Diana Sands'],
          },
          {
            hour: '17:00 - 18:00',
            event: 'Q&A and Daily Recap',
            authors: ['Hande Özkayagan'],
          },
        ],
      },
      {
        day: '7 June 2023',
        title: 'Community Designs',
        schedule: [
          {
            hour: '09:30 - 12:00',
            event:
              'Visit to the Intellectual Property Court, Lisbon (optional). Meeting point: 9:30 am in front of the NOVA School of Law building',
          },
          {
            hour: '14:00 - 15:00',
            event: 'Lecture: What are Community designs?',
            authors: ['Giulia Priora'],
          },
          {
            hour: '15:00 - 15:30',
            event: 'Case study: Design infringements',
            authors: ['Oumaima Derfoufi', 'Amanda Novaes'],
          },
          {
            hour: '15:45 - 17:00',
            event: 'Lecture: Community design registration and infringements',
            guests: ['Noam Shemtov'],
          },
          {
            hour: '17:00 - 18:00',
            event: 'Q&A and Daily Recap',
            authors: ['Monyca Motta', 'Oumaima Derfoufi'],
          },
        ],
      },
      {
        day: '8 June 2023',
        title: 'Copyright',
        schedule: [
          {
            hour: '14:00 - 15:00',
            event: 'Lecture: What is EU copyright law?',
            guests: ['Giuseppe Mazziotti'],
          },
          {
            hour: '15:00 - 15:30',
            event: 'Case study: Copyright infringements',
            authors: ['Monyca Motta', 'Hande Özkayagan'],
          },
          {
            hour: '15:45 - 17:00',
            event: 'Lecture: Copyright contracts',
            authors: ['Monyca Motta'],
          },
          {
            hour: '17:00 - 18:00',
            event: 'Q&A and Daily Recap',
            authors: ['Hande Özkayagan'],
          },
        ],
      },
      {
        day: '9 June 2023',
        title: 'Patents',
        schedule: [
          {
            hour: '14:00 - 15:00',
            event: 'Lecture: What are European patents?',
            authors: ['Giulia Priora'],
          },
          {
            hour: '15:00 - 16:00',
            event: 'Lecture: Filing for a European Patent',
            guests: ["Vasco Stillwell d'Andrade"],
          },
          {
            hour: '16:00 - 18:00',
            event: 'Q&A and Final Recap',
            authors: ['Monyca Motta', 'Giulia Priora'],
          },
        ],
      },
    ],
  },
  {
    title: 'Inaugural Lecture 2022',
    imgSrc: new URL(
      '/images/events/inaugural_lecture_2022.jpeg',
      import.meta.url,
    ).href,
    date: new Date('14 December, 2022'),
    location: 'Hybrid event at NOVA School of Law and Online',
    description:
      'NOVA IPSI is glad to invite you to its Inaugural Lecture 2022. Please find the registration details below. The event will be held in English.',
    agenda: [
      {
        day: '14 December, 2022',
        schedule: [
          {
            hour: '16:00',
            event:
              'Welcome greetings - Margarida Lima Rego, Dean and Associate Professor, NOVA School of Law Presentation of NOVA IPSI - Giulia Priora, Director NOVA IPSI, Assistant Professor, NOVA School of Law',
            authors: ['Giulia Priora'],
          },
          {
            hour: '16:30',
            event:
              'IP and Sustainability? A Relational Paradigm for Intellectual Property” - Keynote lecture by Carys Craig, Associate Professor, Osgoode Hall Law School Q&A discussion - moderated by Oumaima Derfoufi, PhD Candidate, NOVA School of Law',
            authors: ['Oumaima Derfoufi'],
          },
          {
            hour: '17:30',
            event:
              'Presentation of the NOVA Starters Academy partnership - Hélder Lopes, Head of Research and Innovation NOVA University, Carla Portela, Entrepreneurship and Innovation Office NOVA University, and Diogo Brandão, PhD Candidate, NOVA School of Law',
            authors: ['Diogo Brandão'],
          },
          {
            hour: '18:00',
            event:
              'Closing remarks - Joana Farrajota, Vice-Dean and Assistant Professor, NOVA School of Law',
          },
        ],
      },
    ],
  },
  {
    title: 'E-Course Intellectual Property for Sustainable Innovations',
    link: 'https://novalaw.unl.pt/en/e-course-intellectual-property-for-sustainable-innovations',
    imgSrc: new URL('/images/events/e-course_2024.jpg', import.meta.url).href,
    date: {
      from: new Date('16 September, 2024'),
      to: new Date('27 September, 2024'),
    },
    location: 'NOVA School of Law',
    description:
      'This course is a dive into the world of intellectual property (IP) law. IP is becoming a must-know topic, debated and applied across all professional sectors in society, from big companies to start-ups to individual citizens. We will be looking at it from two specific angles: what is IP and how can it help sustainable innovators, those helping the planet and those advancing our societies? Studying IP law means, for us, learning about its regulation and practical applications. We bring law professors, researchers and practitioners together to explain and discuss with you along this enriching training. The course provides you with a comprehensive introduction to all main IP law branches: copyrights, patents, trademarks, designs, geographical indications and trade secrets explaining their key features and impacts on sustainable innovations, looking at international, EU, and selected national legal systems.',
    agenda: [
      {
        day: '16 September 2024',
        title: 'Welcome to the IP world',
        schedule: [
          {
            event: 'Lecture: «What, Why, How Intellectual Property?»',
            authors: ['Giulia Priora'],
          },
          {
            event: 'Lecture: «The Daily Life of an IP lawyer»',
            guests: ['Sónia Queiroz'],
          },
        ],
      },
      {
        day: '17 September 2024',
        title: 'Copyright Law',
        schedule: [
          {
            event: 'Lecture: «Understanding Copyright»',
            authors: ['Monyca Motta'],
          },
          {
            event: 'Lecture: «Copyright Boundaries»',
            authors: ['Hande Özkayagan'],
          },
        ],
      },
      {
        day: '18 September 2024',
        title: 'Inclusive Creativity',
        schedule: [
          {
            event: 'Lecture: «Non-Conventional Copyright»',
            guests: ['Enrico Bonadio'],
          },
          {
            event: 'Lecture: «AI Creativity»',
            guests: ['Peter Mezei'],
          },
        ],
      },
      {
        day: '19 September 2024',
        title: 'Patent Law',
        schedule: [
          {
            event: 'Lecture: «Understanding Patents»',
            guests: ['Pedro Henrique D. Batista'],
          },
          {
            event: 'Lecture: «Applying for a Patent»',
            guests: ["Vasco Stillwell D'Andrade"],
          },
        ],
      },
      {
        day: '20 September 2024',
        title: 'Green Technologies',
        schedule: [
          {
            event: 'Lecture: «Introduction to Tech Transfer»',
            authors: ['Júlia Schütz Veiga'],
          },
          {
            event: "Lecture: «Trade Secrets in Today's World»",
            guests: ['Luc Desaunettes Barbero'],
          },
        ],
      },
      {
        day: '21 September 2024',
        title: 'Trademark Law',
        schedule: [
          {
            event: 'Lecture: «Understanding Trademarks»',
            guests: ['Maria Miguel Carvalho'],
          },
          {
            event: 'Lecture: «Non-traditional Trademarks»',
            guests: ['Simon Geiregat'],
          },
        ],
      },
      {
        day: '22 September 2024',
        title: 'Green Branding and Green Claiming',
        schedule: [
          {
            event: 'Lecture: «Trademarks and GIs for the Land»',
            guests: ['Pilar Montero', 'Vicente Gimeno'],
          },
          {
            event: 'Lecture: «The EU Policies Against Green Washin»',
            guests: ['Pedro Soares'],
          },
        ],
      },
      {
        day: '23 September 2024',
        title: 'Design Law and Morality',
        schedule: [
          {
            event: 'Lecture: «Understanding Industrial Designs»',
            guests: ['Cláudia Tomás Pedro'],
          },
          {
            event: 'Lecture: «Morality in IP industries»',
            authors: ['Amanda Novaes'],
          },
        ],
      },
    ],
  },
];
