import { DispatchAction, Loader, Nullable } from '@thoraxia/shared';

export enum AuthTypes {
  SetStatus = '[Auth] Set Status',
  SetLoggedIn = '[Auth] Set Logged In',
  SetNickname = '[Auth] Set Nickname',
  SetAvatar = '[Auth] Set Avatar',
  SetAdminStatus = '[Auth] Set Admin Status',
  SetToken = '[Auth] Set Token',
  SetRoles = '[Auth] Set Roles',
  SetTheme = '[Auth] Set Theme',
}

type SetStatusAction = DispatchAction<AuthTypes.SetStatus, Loader>;
type SetLoggedInAction = DispatchAction<AuthTypes.SetLoggedIn, boolean>;
type SetNicknameAction = DispatchAction<AuthTypes.SetNickname, Nullable<string>>;
type SetAvatarAction = DispatchAction<AuthTypes.SetAvatar, Nullable<string>>;
type SetAdminStatusAction = DispatchAction<AuthTypes.SetAdminStatus, boolean>;
type SetTokenAction = DispatchAction<AuthTypes.SetToken, Nullable<string>>;
type SetRolesAction = DispatchAction<AuthTypes.SetRoles, Array<string>>;
type SetThemeAction = DispatchAction<AuthTypes.SetTheme, Nullable<string>>;

export type AuthActionTypes =
  SetStatusAction |
  SetLoggedInAction |
  SetNicknameAction |
  SetAvatarAction |
  SetAdminStatusAction |
  SetTokenAction |
  SetRolesAction |
  SetThemeAction;
