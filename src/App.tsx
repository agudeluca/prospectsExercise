import {QueryClientProvider, QueryClient} from '@tanstack/react-query';
import React from 'react';

import Navigation from '@/navigation';
import {DrawerProvider} from '@/providers/drawer';

const queryClient = new QueryClient();

export default () => {
  return (
    <QueryClientProvider client={queryClient}>
      <DrawerProvider>
        <Navigation />
      </DrawerProvider>
    </QueryClientProvider>
  );
};
