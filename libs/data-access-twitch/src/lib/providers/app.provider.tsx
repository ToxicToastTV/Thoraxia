import React from 'react';
import { combineReducers } from '@thoraxia/shared';
import { AppContext } from '../contexts';
import { UiReducer, AuthReducer } from '../states/reducers';
import { initAppState } from '../states/models';

interface Props {
  children: React.ReactNode;
}

function AppProvider(props: Props) {
  const rootReducer = React.useMemo(() => {
    return combineReducers({
      ui: UiReducer,
      auth: AuthReducer,
    });
  }, []);
  const [state, dispatch] = React.useReducer(rootReducer, initAppState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {props.children}
    </AppContext.Provider>
  );
}

export default React.memo(AppProvider);
