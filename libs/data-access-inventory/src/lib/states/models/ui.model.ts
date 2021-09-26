import { Optional } from '@thoraxia/shared';

export interface IUiModel {
  status: 'loading' | 'loaded' | 'error';
  error: Optional<string>;
}

export const initUIState: IUiModel = {
  status: 'loading',
  error: undefined,
};

