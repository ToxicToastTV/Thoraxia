import { UIActionTypes } from './ui.action';
import { AuthActionTypes } from './auth.action';
import { CategoryActionTypes } from './category.action';

export type AppActionModel =
  UIActionTypes |
  AuthActionTypes |
  CategoryActionTypes;
