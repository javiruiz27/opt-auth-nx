import React from 'react';
import { Route as IRoute } from '@onboarding/router/data';
import { Routes, Route } from 'react-router-dom';

interface Props {
  routes: IRoute[];
}

export const CustomRouter: React.FC<Props> = ({ routes }) => {
  return (
    <Routes>
      {routes.map((e, index: number) => {
        return (
          <Route key={`${e.path}-${index}`} path={e.path} element={e.element} />
        );
      })}
    </Routes>
  );
};
