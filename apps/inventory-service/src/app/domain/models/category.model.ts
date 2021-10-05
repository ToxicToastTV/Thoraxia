import { BaseAnemic } from '@thoraxia/shared';

export interface CategoryModel extends BaseAnemic {
  readonly title: string,
  readonly slug: string,
  readonly active: boolean,
}

export interface CreateCategory {
  readonly id: string;
  readonly title: string;
  readonly slug: string;
}
