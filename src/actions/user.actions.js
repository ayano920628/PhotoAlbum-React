import { userConstants } from '../constants';
import { userService } from '../services';
import { push } from 'react-router-redux';

export const getMe = () => {
  return dispatch => {
    dispatch(getMeRequest());
    userService.getMe()
      .then(
        data => dispatch(getMeSuccess(data)),
        // error => dispatch(getMeFailure(error))
        error => {
          dispatch(getMeFailure(error));
          userService.logout();
          dispatch(push('/'));
        }
      );
  };
}

export const inputEmailInfo = (inputdata) => {
  return dispatch => {
    dispatch(inputLoginEmailInfo(inputdata));
  };
}

export const inputPasswordInfo = (inputdata) => {
  return dispatch => {
    dispatch(inputLoginPasswordInfo(inputdata));
  };
}

export const signUpInfo = (value) => {
  return dispatch => {
    dispatch(inputSignupInfo(value));
  };
}

const getMeRequest = () => ({
  type: userConstants.GET_ME_REQUEST
});
const getMeSuccess = (data) => ({
  type: userConstants.GET_ME_SUCCESS,
  payload: data
});
const getMeFailure = (error) => ({
  type: userConstants.GET_ME_FAILURE,
  error
});
const inputLoginEmailInfo = (inputdata) => ({
  type: userConstants.INPUT_EMAIL_DATA,
  payload: inputdata
});
const inputLoginPasswordInfo = (inputdata) => ({
  type: userConstants.INPUT_PASSWORD_DATA,
  payload: inputdata
});
const inputSignupInfo = (value) => ({
  type: userConstants.INPUT_SIGNUP_DATA,
  payload: value
});

export const clearMe = () => ({
  type: userConstants.CLEAR_ME
});

