import { familyConstants } from '../constants';
import { familyService } from '../services';

export const getFamily = () => {
  return dispatch => {
    dispatch(getFamilyRequest());
    familyService.getMe()
      .then(
        // data => dispatch(getMeSuccess(data)),
        // error => dispatch(getMeFailure(error))
      );
  };
}

export const inviteInfo = (value) => {
  return dispatch => {
    dispatch(inputInviteInfo(value));
  };
}

export const inviteFamily = (email) => {
  return dispatch => {
    // dispatch(inputInviteInfo(email));
    familyService.sendInvitedFamily(email);
    // .then(
    //   data => dispatch(getMeSuccess(data)),
    //   error => dispatch(getMeFailure(error))
    // );
  };
}

const inputInviteInfo = (value) => ({
  type: familyConstants.INPUT_INVITE_DATA,
  payload: value
});

const getFamilyRequest = () => ({
  type: familyConstants.GET_FAMILY_REQUEST
});
