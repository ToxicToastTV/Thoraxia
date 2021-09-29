import { DispatchAction, Loader, Optional } from '@thoraxia/shared';

export enum UiTypes {
  SetStatus = '[UI] Set Status',
  SetError = '[UI] Set Error',
  SetNavigation = '[UI] Set Navigation',
  SetSocketData = '[UI] Set Socket Data (TEST)',
}

type SetStatusAction = DispatchAction<UiTypes.SetStatus, Loader>;
type SetErrorAction = DispatchAction<UiTypes.SetError, Optional<string>>;
type SetNavigationAction = DispatchAction<UiTypes.SetNavigation, Array<{ title: string; route: string; }>>;
type SetSocketDataAction = DispatchAction<UiTypes.SetSocketData, any>;

export type UIActionTypes =
  SetStatusAction |
  SetErrorAction |
  SetNavigationAction |
  SetSocketDataAction;
