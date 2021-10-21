import {
  API_URL_PROD
} from '../../constants';

const returnApiCallHeader = (token) => {
  if(token) {
    return {
      headers: {
        'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Bearer ${token}`
      }
    }
  }else{      
    return {
      headers: {
        'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
      }
    }
  }
}

export const makeApiCall = async (url, method, data, token=null) => {
  const header = returnApiCallHeader(token);
  await fetch(
    "https://fathomless-ridge-02021.herokuapp.com/auth/login",
    {
      method: method, // *GET, POST, PUT, DELETE, etc.
      headers: header,
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    },
  ).then((response) => {console.log(response.json())});
}