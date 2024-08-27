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
      link_type: string;
      url: string;
      target: string;
    };
  };
};
