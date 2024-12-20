import React from 'react';
import { RouteProps } from 'react-router-dom';
import { CustomRouter, RequireAuth } from '@onboarding/router/feature';
import { OtpPageAuth, MainPage } from '@onboarding/otp-ui/feature';

const routes: RouteProps[] = [
  {
    path: '/',
    element: <MainPage />,
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
