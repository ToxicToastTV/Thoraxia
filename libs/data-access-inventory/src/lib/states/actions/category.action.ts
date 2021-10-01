import { DispatchAction, Loader } from '@thoraxia/shared';

export enum CategoryTypes {
  SetStatus = '[Category] Set Status',
  SetData = '[Category] Set Data',
}

type SetStatusAction = DispatchAction<CategoryTypes.SetStatus, Loader>;
type SetDataAction = DispatchAction<CategoryTypes.SetData, any>;

export type CategoryActionTypes =
  SetStatusAction |
  SetDataAction;
