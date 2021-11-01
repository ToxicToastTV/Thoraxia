import './data-access-twitch.module.scss';
import React from 'react';
import { AppProvider } from './providers';

export interface Props {
  children: React.ReactNode;
}

export function DataAccessTwitch(props: Props) {
  return <AppProvider>{props.children}</AppProvider>;
}

export default DataAccessTwitch;
