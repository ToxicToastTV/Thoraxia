export interface BaseDomain<T> {
  isUpdated(): boolean;
  isDeleted(): boolean;
  toAnemic(): T;
  delete(): void;
  restore(): void;
}
