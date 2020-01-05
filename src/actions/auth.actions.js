import { authConstants } from '../constants';
import { userService } from '../services/user.service';
import { push } from 'react-router-redux';

export const login = (email, password) => {
  return dispatch => {
    dispatch(loginRequest({ email }));
    userService.login(email, password)
      .then(
        data => {
          dispatch(loginSuccess(data));
          dispatch(push('/dashboard'));
        },
        error => {
          dispatch(loginFailure(error));
          dispatch(logout());
          dispatch(push('/'));
        });
  }
}

export const logoutAndRedirect = () => {
  return dispatch => {
    userService.logout();
    dispatch(logout());
    dispatch(push('/'));
  }
}

const logout = () => ({
  type: authConstants.LOGOUT
});

// const loginRequest = data => ({
//   type: authConstants.LOGIN_REQUEST,
// });
const loginRequest = data => ({
  type: authConstants.LOGIN_REQUEST,
  payload: data
});

const loginSuccess = data => ({
  type: authConstants.LOGIN_SUCCESS,
  payload: data
});
const loginFailure = error => ({
  type: authConstants.LOGIN_FAILURE,
  payload: error
});

export const signup = (email) => {
  return dispatch => {
    userService.signup(email)
      .then(
        () => {
          dispatch(push('/registered'));
        },
        //   error => {
        //     dispatch(loginFailure(error));
        //   }
      );
  };
}

export const activate = (name, code, password) => {
  return dispatch => {
    // dispatch(loginRequest({ email }));
    userService.activate(name, code, password)
      .then(
        data => {
          if (data.token) {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('token', JSON.stringify(data.token));
          }

          // return data;
          // dispatch(loginSuccess(data));
          dispatch(push('/dashboard'));
        },
        error => {
          dispatch(loginFailure(error));
        }
      );
  };
}

export const familyactivate = (name, code, password) => {
  return dispatch => {
    // dispatch(loginRequest({ email }));
    userService.familyactivate(name, code, password)
      .then(
        data => {
          if (data.token) {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('token', JSON.stringify(data.token));
          }

          // return data;
          // dispatch(loginSuccess(data));
          dispatch(push('/dashboard'));
        },
        error => {
          dispatch(loginFailure(error));
        }
      );
  };
}