import { Loader, Optional } from '@thoraxia/shared';

export interface ISizeModel {
  status: Loader;
  error: Optional<string>;
  data: Array<any>;
}

export const initSizeState: ISizeModel = {
  status: 'loading',
  error: undefined,
  data: [],
};
