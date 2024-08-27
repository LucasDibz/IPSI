import type { PrismicDocument } from '@prismicio/client';
import type { Author } from './Author';

type PrismicEvent = {
  id: string;
  uid: string;
  data: {
    'event-title': [
      {
        text: string;
      },
    ];
    link: {
      url: string;
      target: string;
    };
    'location-text': string;
    location: {
      latitude: number;
      longitude: number;
    };
    'start-date': string;
    'end-date': string;
    description: [
      {
        text: string;
      },
    ];
    workload: number;
    image: {
      alt: string;
      url: string;
    };
    agenda: {
      title: string;
      date: string;
      hour: string;
      speakers: {
        text: string;
      }[];
    }[];
    speakers: {
      speaker: Author;
    }[];
  };
};

export type Event = PrismicDocument & PrismicEvent;
