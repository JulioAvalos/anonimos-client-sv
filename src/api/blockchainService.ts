import { http, JSONBody } from './config';

export const getChain = () => {
  const url = '/chain';
  return http.get(url, {
    headers: JSONBody,
  });
};
