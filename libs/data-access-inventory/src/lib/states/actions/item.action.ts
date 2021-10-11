import { DispatchAction, Loader, Nullable } from '@thoraxia/shared';

export enum ItemTypes {
  SetStatus = '[Item] Set Status',
  SetData = '[Item] Set Data',
  SetCategoryId = '[Item] Set Category ID',
}

type SetStatusAction = DispatchAction<ItemTypes.SetStatus, Loader>;
type SetDataAction = DispatchAction<ItemTypes.SetData, any>;
type SetCategoryIdAction = DispatchAction<ItemTypes.SetCategoryId, Nullable<string>>;

export type ItemActionTypes =
  SetStatusAction |
  SetDataAction |
  SetCategoryIdAction;
