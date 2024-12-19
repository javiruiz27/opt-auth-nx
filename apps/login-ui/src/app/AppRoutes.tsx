import React from 'react';
import App from './App';
import { RouteProps } from 'react-router-dom';
import { CustomRouter } from '@onboarding/router/feature';
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
    element: <div>about me</div>,
  },
];

const AppRoutes: React.FC = () => {
  return <CustomRouter routes={routes} />;
};

export default AppRoutes;
