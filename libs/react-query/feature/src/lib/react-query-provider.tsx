import React from 'react';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export const customReactQueryOptions = {
  queries: {
    retry: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: true,
    staleTime: 0,
    cacheTime: 0,
  },
};

const queryClient = new QueryClient({
  defaultOptions: customReactQueryOptions,
});

interface Props {
  children: React.ReactNode;
}
export const ReactQueryProvider: React.FC<Props> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
