import { PrismicProvider } from '@prismicio/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { client } from './config/prismic';
import { router } from './config/router';

import './index.css';

// biome-ignore lint/style/noNonNullAssertion:
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <PrismicProvider client={client}>
      <RouterProvider router={router} />
    </PrismicProvider>
  </React.StrictMode>,
);
