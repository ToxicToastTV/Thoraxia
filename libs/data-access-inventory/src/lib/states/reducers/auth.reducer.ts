import { IAuthModel } from '../models';
import { AuthActionTypes, AuthTypes } from '../actions/auth.action';

export function AuthReducer(state: IAuthModel, action: AuthActionTypes): IAuthModel {

  switch (action.type) {
    default:
      return state;

    case AuthTypes.SetStatus:
      return {
        ...state,
        status: action.payload,
      }

    case AuthTypes.SetLoggedIn:
      return {
        ...state,
        loggedIn: action.payload,
      }

    case AuthTypes.SetNickname:
      return {
        ...state,
        username: action.payload
      }

    case AuthTypes.SetAvatar:
      return {
        ...state,
        avatar: action.payload,
      }

    case AuthTypes.SetAdminStatus:
      return {
        ...state,
        isAdmin: action.payload
      }

    case AuthTypes.SetToken:
      return {
        ...state,
        token: action.payload
      }

    case AuthTypes.SetRoles:
      return {
        ...state,
        roles: action.payload
      }

    case AuthTypes.SetTheme:
      return {
        ...state,
        theme: action.payload
      }
  }

}
