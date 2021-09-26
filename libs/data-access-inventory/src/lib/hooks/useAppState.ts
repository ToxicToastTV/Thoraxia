import React from 'react';
import { AppContext } from '../contexts';

export function useAppState() {
  const { state, dispatch } = React.useContext(AppContext);
  return {
    appState: state,
    dispatch
  };
}
