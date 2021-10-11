import { Loader, Nullable, Optional } from '@thoraxia/shared';

export interface IItemModel {
  status: Loader;
  error: Optional<string>;
  data: Array<any>;
  selectedCategory: Nullable<string>;
  selectedItem: Nullable<string>;
  selectedCompany: Nullable<string>;
  selectedLocation: Nullable<string>;
  selectedType: Nullable<string>;
  selectedSize: Nullable<string>;
}

export const initItemState: IItemModel = {
  status: 'loading',
  error: undefined,
  data: [],
  selectedCategory: null,
  selectedItem: null,
  selectedCompany: null,
  selectedLocation: null,
  selectedType: null,
  selectedSize: null,
};
