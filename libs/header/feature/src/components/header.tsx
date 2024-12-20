import { useHeaderDepsContext } from '@onboarding/header-data';
import React from 'react';

export const Header = () => {
  const headerDepsContext = useHeaderDepsContext();

  console.log('🚀 ~ Header ~ headerDepsContext:', headerDepsContext);

  return <div>Header</div>;
};
