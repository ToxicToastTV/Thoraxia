import { Loader, Optional } from '@thoraxia/shared';

export interface ICompanyModel {
  status: Loader;
  error: Optional<string>;
  data: Array<any>;
}

export const initCompanyState: ICompanyModel = {
  status: 'loading',
  error: undefined,
  data: [],
};
