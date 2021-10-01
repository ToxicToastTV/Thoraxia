import { DispatchAction, Loader, Optional } from '@thoraxia/shared';

export enum UiTypes {
  SetStatus = '[UI] Set Status',
  SetError = '[UI] Set Error',
  SetNavigation = '[UI] Set Navigation',
}

type SetStatusAction = DispatchAction<UiTypes.SetStatus, Loader>;
type SetErrorAction = DispatchAction<UiTypes.SetError, Optional<string>>;
type SetNavigationAction = DispatchAction<UiTypes.SetNavigation, Array<{ title: string; route: string; }>>;

export type UIActionTypes =
  SetStatusAction |
  SetErrorAction |
  SetNavigationAction;
