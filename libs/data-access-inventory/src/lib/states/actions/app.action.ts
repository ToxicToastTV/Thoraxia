import { UIActionTypes } from './ui.action';
import { AuthActionTypes } from './auth.action';

export type AppActionModel =
  UIActionTypes |
  AuthActionTypes;
