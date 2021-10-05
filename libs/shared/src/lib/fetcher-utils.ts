import { Nullable } from './base-types';

export async function fetcherUtils<T>(uri: string, token: Nullable<string>) {
  const url = `http://localhost:3333/api/${uri}`;
  const headers = new Headers();
  if (token !== null) {
    headers.set('Authorization', `Bearer ${token}`);
  }
  const request = new Request(url, {
    headers,
  });
  const res = await fetch(request);
  if (!res.ok) {
    const json = await res.json();
    const error = new Error('An error occurred while fetching the data.') as Error & { info: string; status: number };
    error.info = json;
    error.status = res.status;
    throw error;
  }
  return res.json();
}
