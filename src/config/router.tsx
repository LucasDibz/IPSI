import { Navigate, createBrowserRouter } from 'react-router-dom';
import { Layout } from '../Layout';
import {
  Conferences,
  Contacts,
  Courses,
  ErrorPage,
  Home,
  Outputs,
  SINPL,
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
        path: 'scientific-publications',
        element: <Outputs />,
      },
      {
        path: 'conferences',
        element: <Conferences />,
      },
      {
        path: 'courses',
        element: <Courses />,
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
    path: '/sinpl-eu',
    element: <Layout theme='sinpl' />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <SINPL />,
      },
    ],
  },
]);
