import { UIActionTypes } from './ui.action';
import { AuthActionTypes } from './auth.action';
import { CategoryActionTypes } from './category.action';
import { ItemActionTypes } from './item.action';
import { CompanyActionTypes } from './company.action';

export type AppActionModel =
  UIActionTypes |
  AuthActionTypes |
  CategoryActionTypes |
  ItemActionTypes |
  CompanyActionTypes;
