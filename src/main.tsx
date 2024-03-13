import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Styles
import './main.css';

// Layouts
const _Layout = lazy(() => import('./layouts/_Layout'));

// Loader
import Loader from './components/loader/Loader';

// Pages
const Home = lazy(() => import('./pages/Home/App'));

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense fallback={<Loader />}>
        <_Layout>
          <Home />
        </_Layout>
      </Suspense>
    ),
  },
]);
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

