import React from 'react';
import { combineReducers } from '@thoraxia/shared';
import { AppContext } from '../contexts';
import { UiReducer } from '../states/reducers';
import { initAppState } from '../states/models';

interface Props {
  children: React.ReactNode;
}

export function AppProvider(props: Props) {

  const rootReducer = React.useMemo(() => {
    return combineReducers({
      ui: UiReducer,
    });
  }, []);
  const [state, dispatch] = React.useReducer(rootReducer, initAppState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {props.children}
    </AppContext.Provider>
  );
}
