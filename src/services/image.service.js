import { authHeader, authHeaderType } from '../helpers';

// const apiHost = 'http://13.112.62.50/api';
const apiHost = 'http://127.0.0.1:8000/api';

export const imageService = {
  store,
  show,
  edit,
  update,
  destroy,
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

function store(img_name) {
  for (let i = 0; i < img_name.length; i++) {
    const params = new FormData();
    params.append('img_name', img_name[i]);
    const requestOptions = {
      method: 'POST',
      headers: authHeader(),
      body: params
    };
    fetch(`${apiHost}/images`, requestOptions);
  }
  // return handleResponse();
}

function show() {
  const requestOptions = {
    method: 'GET',
    headers: authHeader()
  };
  return fetch(`${apiHost}/images`, requestOptions)
    .then(handleResponse)
}

function destroy(id) {
  const requestOptions = {
    method: 'DELETE',
    headers: authHeader()
  };
  return fetch(`${apiHost}/images/${id}`, requestOptions)
    .then(handleResponse)
}

function edit(id) {
  const requestOptions = {
    method: 'GET',
    headers: authHeader()
  };
  return fetch(`${apiHost}/images/${id}`, requestOptions)
    .then(handleResponse)
}

function update(id, img_comment_1, img_comment_2) {
  const requestOptions = {
    method: 'PUT',
    headers: authHeaderType(),
    body: JSON.stringify(
      {
        img_comment_1: img_comment_1,
        img_comment_2: img_comment_2,
      }
    )
  };
  return fetch(`${apiHost}/images/${id}`, requestOptions)
    .then(handleResponse)
}

function logout() {
  // ログアウト時にはローカルストレージからuserアイテムを削除する
  localStorage.removeItem('token');
}