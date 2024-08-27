export type Author = {
  id: string;
  data: {
    name: string;
    occupation: string;
    invisible?: boolean;
    image: {
      alt: string;
      url: string;
    };
    url: {
      url: string;
      target: string;
    };
  };
};
