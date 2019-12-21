export function authHeader() {
  // return authorization header with jwt token
  let token = JSON.parse(localStorage.getItem('token'));

  if (token) {
    return { 'Authorization': 'Bearer ' + token };
    // return { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token };
  } else {
    return {};
  }
}

export function authHeaderType() {
  // return authorization header with jwt token
  let token = JSON.parse(localStorage.getItem('token'));

  if (token) {
    return { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token };
  } else {
    return {};
  }
}