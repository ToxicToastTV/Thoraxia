import { IItemModel } from '../models';
import { ItemActionTypes, ItemTypes } from '../actions/item.action';

// TODO: ItemActionTypes
export function ItemReducer(state: IItemModel, action: ItemActionTypes): IItemModel {

  switch (action.type) {
    default:
      return state;

    case ItemTypes.SetData:
      return {
        ...state,
        data: action.payload,
      }

    case ItemTypes.SetStatus:
      return {
        ...state,
        status: action.payload,
      }

    case ItemTypes.SetCategoryId:
      return {
        ...state,
        selectedCategory: action.payload,
      }
  }


}
