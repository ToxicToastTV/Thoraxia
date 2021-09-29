import { Loader, Optional } from '@thoraxia/shared';

export interface ILocationModel {
  status: Loader;
  error: Optional<string>;
  data: Array<any>;
}

export const initLocationState: ILocationModel = {
  status: 'loading',
  error: undefined,
  data: [],
};
