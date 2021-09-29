import { Loader } from '@thoraxia/shared';

export interface IAuthModel {
  status: Loader;
  loggedIn: boolean;
  username: string;
  avatar: string;
}

export const initAuthState: IAuthModel = {
  status: 'loading',
  loggedIn: false,
  username: '',
  avatar: ''
}
