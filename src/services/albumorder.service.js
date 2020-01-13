import { authHeader, authHeaderType } from '../helpers';

const apiHost = 'http://127.0.0.1:8000/api';
// https://www.seichoku.com/user_data/setDraft.php

export const albumorderService = {
  order,
  logout
};

function handleResponse(response) {
  return response.text().then(text => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401) {
        // auto logout if 401 response returned from api
        logout();
      }
      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }
    return data;
  });
}

function order(value) {
  const params = value;
  const requestOptions = {
    method: 'POST',
    headers: authHeader(),
    body: params
  };
  // return fetch(`${apiHost}`, requestOptions)
  //   .then(handleResponse)
}

function logout() {
  // ログアウト時にはローカルストレージからuserアイテムを削除する
  localStorage.removeItem('token');
}