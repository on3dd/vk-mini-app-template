import React from 'react';
import { Provider } from 'react-redux';

import store from '../store/index';

type StoreProviderProps = {
  children: JSX.Element;
};

const StoreProvider: React.FC<StoreProviderProps> = ({
  children,
}: StoreProviderProps) => {
  return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;
