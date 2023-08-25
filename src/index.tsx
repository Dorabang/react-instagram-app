import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ExplorePage from './pages/explore';
import UserPage from './pages/user';
import ReelsPage from './pages/reels';
import DirectPage from './pages/direct';
import { RecoilRoot } from 'recoil';
import LoginPage from './pages/login';
import RegisterPage from './pages/register';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'explore',
        element: <ExplorePage />,
      },
      {
        path: 'reels',
        element: <ReelsPage />,
      },
      {
        path: 'direct/inbox',
        element: <DirectPage />,
      },
      {
        path: 'dora_bangs',
        element: <UserPage />,
      },
      {
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: 'register',
        element: <RegisterPage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <RouterProvider router={router} />
    </RecoilRoot>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
