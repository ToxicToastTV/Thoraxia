import { Loader, Nullable } from '@thoraxia/shared';

export interface IAuthModel {
  status: Loader;
  loggedIn: boolean;
  isAdmin: boolean;
  username: Nullable<string>;
  avatar: Nullable<string>;
  token: Nullable<string>;
  roles: Array<string>;
}

export const initAuthState: IAuthModel = {
  status: 'loading',
  loggedIn: false,
  isAdmin: false,
  username: null,
  avatar: null,
  token: null,
  roles: [],
}
