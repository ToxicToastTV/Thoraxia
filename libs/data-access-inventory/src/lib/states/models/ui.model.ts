import { Loader, Optional } from '@thoraxia/shared';

export interface IUiModel {
  status: Loader;
  error: Optional<string>;
  navigation: Array<{ title: string; route: string; }>;
  socket: Array<any>;
}

export const initUIState: IUiModel = {
  status: 'loading',
  error: undefined,
  navigation: [],
  socket: [],
};
