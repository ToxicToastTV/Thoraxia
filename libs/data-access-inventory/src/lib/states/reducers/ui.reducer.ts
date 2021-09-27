import { IUiModel } from '../models';
import { UIActionTypes, UiTypes } from '../actions/ui.action';

export function UiReducer(state: IUiModel, action: UIActionTypes): IUiModel {
  switch (action.type) {

    default:
      return state;

    case UiTypes.SetStatus:
      return {
        ...state,
        status: action.payload
      }

    case UiTypes.SetError:
      return {
        ...state,
        error: action.payload,
      }

    case UiTypes.SetNavigation:
      return {
        ...state,
        navigation: action.payload,
      }
  }
}
