import { createContext, useContext } from 'react';

import { HeaderDeps } from './HeaderDeps';

function createHeaderDepsContext() {
  const Context = createContext<HeaderDeps | null>(null);
  Context.displayName = 'HeaderDepsContext';
  return Context;
}

export const HeaderDepsContext = createHeaderDepsContext();

const HeaderDepsFallback: HeaderDeps = { enabled: false };

export function useHeaderDepsContext() {
  const context = useContext(HeaderDepsContext);

  return context ?? HeaderDepsFallback;
}

export function useEnabledHeaderDepsContext() {
  const context = useHeaderDepsContext();
  if (!context.enabled) {
    throw new Error('HeaderDepsContext is not enabled.');
  }
  return context;
}
