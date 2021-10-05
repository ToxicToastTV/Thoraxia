import { Nullable } from "./base-types";

export interface BaseAnemic {
  readonly id: string;
  readonly created_at: Date;
  readonly updated_at: Nullable<Date>;
  readonly deleted_at: Nullable<Date>;
  readonly isUpdated: boolean;
  readonly isDeleted: boolean;
}
