import { DispatchAction, Loader } from '@thoraxia/shared';

export enum AuthTypes {
  SetStatus = '[Auth] Set Status',
  SetLoggedIn = '[Auth] Set Logged In',
  SetNickname = '[Auth] Set Nickname',
  SetAvatar = '[Auth] Set Avatar',
}

type SetStatusAction = DispatchAction<AuthTypes.SetStatus, Loader>;
type SetLoggedInAction = DispatchAction<AuthTypes.SetLoggedIn, boolean>;
type SetNicknameAction = DispatchAction<AuthTypes.SetNickname, string>;
type SetAvatarAction = DispatchAction<AuthTypes.SetAvatar, string>;

export type AuthActionTypes =
  SetStatusAction |
  SetLoggedInAction |
  SetNicknameAction |
  SetAvatarAction;
