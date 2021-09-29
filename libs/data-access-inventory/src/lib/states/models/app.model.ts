import { InitializeAppState } from '@thoraxia/shared';
import { initUIState, IUiModel } from './ui.model';
import { ICategoryModel, initCategoryState } from './category.model';
import { ICompanyModel, initCompanyState } from './company.model';
import { IItemModel, initItemState } from './item.model';
import { ILocationModel, initLocationState } from './location.model';
import { initSizeState, ISizeModel } from './size.model';
import { initTypeState, ITypeModel } from './type.model';
import { IAuthModel, initAuthState } from './auth.model';

export interface IAppModel {
  ui: IUiModel;
  category: ICategoryModel;
  company: ICompanyModel;
  item: IItemModel;
  location: ILocationModel;
  size: ISizeModel;
  type: ITypeModel;
  auth: IAuthModel;
}

export const initAppState = InitializeAppState<IAppModel>({
  ui: initUIState,
  category: initCategoryState,
  company: initCompanyState,
  item: initItemState,
  location: initLocationState,
  size: initSizeState,
  type: initTypeState,
  auth: initAuthState,
});
