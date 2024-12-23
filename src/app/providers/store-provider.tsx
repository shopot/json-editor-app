import type { JSX, PropsWithChildren } from 'react';
import { Provider } from 'react-redux';

import { appStore } from '../store';

export const StoreProvider = ({ children }: PropsWithChildren): JSX.Element => {
  return <Provider store={appStore}>{children}</Provider>;
};
