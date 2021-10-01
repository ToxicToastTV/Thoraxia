import { ICategoryModel } from '../models';
import { CategoryActionTypes, CategoryTypes } from '../actions/category.action';

export function CategoryReducer(state: ICategoryModel, action: CategoryActionTypes): ICategoryModel {

  switch (action.type) {
    default:
      return state;

    case CategoryTypes.SetStatus:
      return {
        ...state,
        status: action.payload,
      }

    case CategoryTypes.SetData:
      return {
        ...state,
        data: action.payload,
      }
  }

}
