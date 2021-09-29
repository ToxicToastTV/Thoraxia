import { Loader, Optional } from '@thoraxia/shared';

export interface ITypeModel {
  status: Loader;
  error: Optional<string>;
  data: Array<any>;
}

export const initTypeState: ITypeModel = {
  status: 'loading',
  error: undefined,
  data: [],
};
