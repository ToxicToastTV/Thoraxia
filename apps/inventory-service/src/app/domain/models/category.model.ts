import { BaseAnemic, Nullable } from '@thoraxia/shared';

export interface CategoryModel extends BaseAnemic {
  readonly title: string;
  readonly slug: string;
  readonly active: boolean;
  readonly picture: Nullable<string>;
}

export interface CreateCategory {
  readonly id: string;
  readonly title: string;
  readonly slug: string;
  readonly picture: Nullable<string>;
}
