/* eslint-disable import/no-extraneous-dependencies */
import React, {
  createContext, FC, useContext,
} from 'react';
import { Database, getDatabase } from 'firebase/database';
import { DataProviderProps } from './DataProvider.types';
import { DataContextProps } from './DataContext.types';
import { app } from '../../firebase';

const DataContext = createContext<DataContextProps>(undefined!);
export function useData() {
  return useContext(DataContext);
}

export const DataProviderBase: FC<{ children: React.ReactNode, database: Database }> = ({
  children,
  database,
}) => {
  // eslint-disable-next-line no-console
  console.log('DataProviderBase');
  return (
    <DataContext.Provider
      value={{
        database,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const DataProvider: FC<DataProviderProps> = ({
  children,
}) => {
  const database = getDatabase(app);
  if (!database) return <></>;
  return (
    <DataProviderBase database={database}>
      {children}
    </DataProviderBase>
  );
};
