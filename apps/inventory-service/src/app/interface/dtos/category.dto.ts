import { Nullable } from '@thoraxia/shared';

export interface SingleCategory {
  id: string;
}

export interface CreateCategory {
  title: string;
  picture: Nullable<string>;
}
