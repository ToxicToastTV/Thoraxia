import { Loader, Optional } from '@thoraxia/shared';

export interface ICategoryModel {
  status: Loader;
  error: Optional<string>;
  data: Array<any>;
}

export const initCategoryState: ICategoryModel = {
  status: 'loading',
  error: undefined,
  data: [],
};
