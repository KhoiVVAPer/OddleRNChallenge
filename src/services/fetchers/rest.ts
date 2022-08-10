import {APP_ACCOUNT_KEY} from '@env';

export const fetcher = async (url: string, method: string, payload?: any) => {
  var response = await fetch(url, {
    method: method,
    headers: {
      'Content-Type': 'application/json',
      Authorization: APP_ACCOUNT_KEY,
    },
    ...(payload && {body: JSON.stringify(payload)}),
  });
  const res = await response.json();
  return {success: response.ok, code: response.status, result: res.data};
};
