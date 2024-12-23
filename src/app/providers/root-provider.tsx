import type { JSX, PropsWithChildren } from 'react';

import { StoreProvider } from './store-provider';

export const RootProvider = ({ children }: PropsWithChildren): JSX.Element => {
  return <StoreProvider>{children}</StoreProvider>;
};
