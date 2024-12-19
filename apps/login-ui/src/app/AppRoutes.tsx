import React from 'react';
import App from './App';
import { RouteProps } from 'react-router-dom';
import { CustomRouter, RequireAuth } from '@onboarding/router/feature';
import { OtpPageAuth } from '@onboarding/otp-ui/feature';

const routes: RouteProps[] = [
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/login',
    element: <OtpPageAuth />,
  },
  {
    path: '/about-me',
    element: (
      <RequireAuth>
        <div>about me</div>
      </RequireAuth>
    ),
  },
];

const AppRoutes: React.FC = () => {
  return <CustomRouter routes={routes} />;
};

export default AppRoutes;
