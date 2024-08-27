import type { PrismicDocument } from '@prismicio/client';

type PrismicOutput = {
  type: string;
  title: {
    text: string;
  }[];
  subtitle: {
    text: string;
  }[];
  link: {
    url: string;
    target: string;
  };
  authors?: {
    author: {
      data: {
        name: string;
        url: {
          url: string;
          target: string;
        };
        image: {
          url: string;
          alt: string;
        };
      };
    };
  }[];
};

export type Output = PrismicDocument & { data: PrismicOutput };
