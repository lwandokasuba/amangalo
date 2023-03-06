/* eslint-disable import/no-extraneous-dependencies */
import React, {
  createContext, FC, useContext,
} from 'react';
import { DataProviderProps } from './DataProvider.types';
import { DataContextProps } from './DataContext.types';

const DataContext = createContext<DataContextProps>(undefined!);
export function useData() {
  return useContext(DataContext);
}

export const DataProviderBase: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // eslint-disable-next-line no-console
  console.log('DataProviderBase');
  const test = 'test';
  return (
    <DataContext.Provider
      value={{
        test,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const DataProvider: FC<DataProviderProps> = ({
  children,
}) => {
  // const database = getDatabase(app);
  // eslint-disable-next-line no-console
  console.log(import.meta.env.VITE_API_KEY);
  return (
    <DataProviderBase>
      {children}
    </DataProviderBase>
  );
};
