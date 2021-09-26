export interface DispatchAction<T, V> {
  type: T;
  payload: V;
}
