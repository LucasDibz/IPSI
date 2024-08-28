import { Navigate, createBrowserRouter } from 'react-router-dom';
import { Layout } from '../Layout';
import {
  AboutUs,
  Activities,
  Contacts,
  ErrorPage,
  Events,
  Home,
  Outputs,
} from '../pages';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'about-us',
        element: <AboutUs />,
      },
      {
        path: 'events',
        element: <Events />,
      },
      {
        path: 'activities',
        element: <Activities />,
      },
      {
        path: 'scientific-outputs',
        element: <Outputs />,
      },
      {
        path: 'contacts',
        element: <Contacts />,
      },
      {
        path: '*',
        element: <Navigate to='/' replace />,
      },
    ],
  },
  {
    path: '/sinpl',
    element: <Layout theme='sinpl' />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <ErrorPage />,
      },
    ],
  },
]);
