import { BaseAnemic, Nullable } from '@thoraxia/shared';

export interface ItemModel extends BaseAnemic {
  category_id: Nullable<string>;
  location_id: Nullable<string>;
  company_id: Nullable<string>;
  type_id:  Nullable<string>;
  size_id: Nullable<string>;
  title: string;
  slug: string;
  quantity: number;
  minSku: number;
  maxSku: number;
  active: boolean;
}

export interface CreateItem {
  readonly id: string;
  readonly title: string;
  readonly slug: string;
}
