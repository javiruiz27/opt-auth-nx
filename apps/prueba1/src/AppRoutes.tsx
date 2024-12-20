import React from 'react';
import { RouteProps } from 'react-router-dom';
import { CustomRouter } from '@onboarding/router/feature';
import { MainPage } from '@onboarding/otp-ui/feature';

const routes: RouteProps[] = [
  {
    path: '/',
    element: <MainPage />,
  },
];

const AppRoutes: React.FC = () => {
  return <CustomRouter routes={routes} />;
};

export default AppRoutes;
