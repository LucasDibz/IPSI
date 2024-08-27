export type Activity = {
  id: string;
  data: {
    title: [
      {
        text: string;
      },
    ];
    subtitle: [
      {
        text: string;
      },
    ];
    content: [
      {
        text: string;
      },
    ];
    links: {
      'link-title': [
        {
          text: string;
        },
      ];
      link: {
        url: string;
      };
    }[];
  };
};
