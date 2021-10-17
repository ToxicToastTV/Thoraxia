import { ICompanyModel } from '../models';
import { CompanyActionTypes, CompanyTypes } from '../actions';

export function CompanyReducer(state: ICompanyModel, action: CompanyActionTypes): ICompanyModel {

  switch (action.type) {
    default:
      return state;

    case CompanyTypes.SetStatus:
      return {
        ...state,
        status: action.payload,
      }

    case CompanyTypes.SetData:
      return {
        ...state,
        data: action.payload,
      }
  }

}
