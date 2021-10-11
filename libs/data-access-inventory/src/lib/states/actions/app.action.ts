import { UIActionTypes } from './ui.action';
import { AuthActionTypes } from './auth.action';
import { CategoryActionTypes } from './category.action';
import { ItemActionTypes } from './item.action';

export type AppActionModel =
  UIActionTypes |
  AuthActionTypes |
  CategoryActionTypes |
  ItemActionTypes;
