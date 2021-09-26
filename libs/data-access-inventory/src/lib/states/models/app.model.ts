import { InitializeAppState } from '@thoraxia/shared';
import { initUIState, IUiModel } from './ui.model';

export interface IAppModel {
  ui: IUiModel;
}

export const initAppState = InitializeAppState<IAppModel>({
  ui: initUIState,
});
