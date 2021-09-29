import { Loader, Optional } from '@thoraxia/shared';

export interface IItemModel {
  status: Loader;
  error: Optional<string>;
  data: Array<any>;
}

export const initItemState: IItemModel = {
  status: 'loading',
  error: undefined,
  data: [],
};
