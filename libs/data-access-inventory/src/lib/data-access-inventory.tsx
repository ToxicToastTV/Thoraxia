import './data-access-inventory.module.scss';
import React from 'react';
import { AppProvider } from './providers';

export interface Props {
  children: React.ReactNode;
}

export function DataAccessInventory(props: Props) {
  return (
    <AppProvider>
      {props.children}
    </AppProvider>
  );
}

export default DataAccessInventory;
