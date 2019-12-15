import { authHeader } from '../helpers';


const apiHost = 'http://127.0.0.1:8000/api';

export const imageService = {
  store,
  show,
  // update,
  // destroy,
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

function store() {
  const requestOptions = {
    method: 'POST',
    headers: authHeader()
  };
  return fetch(`${apiHost}/images`, requestOptions)
    .then(handleResponse)

}

function show() {
  const requestOptions = {
    method: 'GET',
    headers: authHeader()
  };
  return fetch(`${apiHost}/images`, requestOptions)
    .then(handleResponse)
}
// function update() {

// }
// function destroy() {

// }

// function login(email, password) {
//   const requestOptions = {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(
//       {
//         // name: username,
//         email: email,
//         password
//       }
//     )
//   };

//   return fetch(`${apiHost}/authenticate`, requestOptions)
//     .then(handleResponse)
//     .then(data => {
//       // login successful if there's a jwt token in the response
//       if (data.token) {
//         // store user details and jwt token in local storage to keep user logged in between page refreshes
//         localStorage.setItem('token', JSON.stringify(data.token));
//       }

//       return data;
//     });
// }

function logout() {
  // ログアウト時にはローカルストレージからuserアイテムを削除する
  localStorage.removeItem('token');
}