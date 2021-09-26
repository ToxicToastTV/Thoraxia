import { Loader, Optional } from '@thoraxia/shared';

export interface IUiModel {
  status: Loader;
  error: Optional<string>;
}

export const initUIState: IUiModel = {
  status: 'loading',
  error: undefined,
};

