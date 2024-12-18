import React from 'react';
import App from './App';
import { Route } from '@onboarding/router/data';
import { CustomRouter } from '@onboarding/router/feature';
import { OtpPageAuth } from '@onboarding/otp-ui/feature';

const routes: Route[] = [
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/login',
    element: <OtpPageAuth />,
  },
];

const AppRoutes: React.FC = () => {
  return <CustomRouter routes={routes} />;
};

export default AppRoutes;
