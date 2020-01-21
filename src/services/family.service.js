import { authHeader, authHeaderType } from '../helpers';

// const apiHost = 'http://13.112.62.50/api';
const apiHost = 'http://127.0.0.1:8000/api';

export const familyService = {
  sendInvitedFamily,
  // logout,
  // getMe,
  // signup,
  // activate
};

// function login(username, password) {
function sendInvitedFamily(email) {
  const requestOptions = {
    method: 'POST',
    headers: authHeaderType(),
    body: JSON.stringify(
      { email: email }
    )
  };
  return fetch(`${apiHost}/familyregister`, requestOptions)
    .then(handleResponse);
  // .then(data => {
  // if (data.token) {
  //   localStorage.setItem('token', JSON.stringify(data.token));
  // }
  // return data;
  // });
}

function logout() {
  // ログアウト時にはローカルストレージからuserアイテムを削除する
  localStorage.removeItem('token');
}

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

