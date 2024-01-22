import { createBrowserRouter } from 'react-router-dom';

import { Layout } from './Layout';
import { AboutUs, Contacts, ErrorPage, Main } from './pages';

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
        {
          path: 'contacts',
          element: <Contacts />,
        },
      ],
    },
  ],
  {
    basename: '/IPSI',
  },
);
