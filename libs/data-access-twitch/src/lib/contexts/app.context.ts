import React from 'react';
import { InitializeContext } from '@thoraxia/shared';
import { IAppModel, initAppState } from '../states/models';
import { AppActionModel } from '../states/actions';

export const AppContext = React.createContext<
  InitializeContext<IAppModel, React.Dispatch<AppActionModel>>
>({
  state: initAppState,
  dispatch: () => null,
});
