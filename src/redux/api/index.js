import {API_URL_PROD} from '../../constants';

const returnApiCallHeader = (token) => {
  if (token) {
    return {
      'Content-Type': 'application/json',
      // 'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Bearer ${token}`,
    };
  } else {
    return {
      'Content-Type': 'application/json',
      // 'Content-Type': 'application/x-www-form-urlencoded',
    };
  }
};

export const makeApiCall = async (url, method, data, token = null) => {
  const header = returnApiCallHeader(token);
  console.log('header', header, data, url, method, token);
  return await fetch(API_URL_PROD + url, {
    method: method, // *GET, POST, PUT, DELETE, etc.
    headers: header,
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  }).then((response) => {
    return response.json();
  });
};
