import { authHeader, authHeaderType } from '../helpers';


const apiHost = 'http://127.0.0.1:8000/api';

export const albumService = {
  show,
  store,
  logout,
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

function show() {
  const requestOptions = {
    method: 'GET',
    headers: authHeader()
  };
  return fetch(`${apiHost}/images`, requestOptions)
    .then(handleResponse)
}

function store(album_name, title, cover) {
  const params = new FormData();
  params.append('album_name', album_name);
  params.append('title', title);
  params.append('cover_photo', cover);
  const requestOptions = {
    method: 'POST',
    headers: authHeader(),
    body: params
  };
  return fetch(`${apiHost}/albums`, requestOptions)
    .then(handleResponse)
}


function logout() {
  // ログアウト時にはローカルストレージからuserアイテムを削除する
  localStorage.removeItem('token');
}