import React from 'react';
import App from './App';
import { Route } from '@onboarding/router/data';
import { CustomRouter } from '@onboarding/router/feature';

const routes: Route[] = [
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/login',
    element: <div>hola</div>,
  },
];

const AppRoutes: React.FC = () => {
  console.log('hola');
  return <CustomRouter routes={routes} />;
};

export default AppRoutes;
