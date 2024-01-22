import { createBrowserRouter } from 'react-router-dom';

import { Layout } from './Layout';
import { AboutUs, ErrorPage, Main } from './pages';

export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Main />,
        },
        {
          path: 'about-us',
          element: <AboutUs />,
        },
      ],
    },
  ],
  {
    basename: '/IPSI',
  },
);
