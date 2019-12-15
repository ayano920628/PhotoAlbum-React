import { userConstants } from '../constants';

const initialState = {
  loading: false,
  me: {
    user: {
      created_at: null,
      email: null,
      email_verified_at: null,
      family_id: null,
      id: null,
      name: null,
      updated_at: null
    }
  }
};

export function user(state = initialState, action) {
  switch (action.type) {
    case userConstants.GET_ME_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case userConstants.GET_ME_SUCCESS:
      return {
        ...state,
        loading: false,
        me: action.payload,
      };
    case userConstants.GET_ME_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      };
    case userConstants.CLEAR_ME:
      return {
        ...state,
        me: {
          user: {
            created_at: null,
            email: null,
            email_verified_at: null,
            family_id: null,
            id: null,
            name: null,
            updated_at: null
          }
        },
      }
    default:
      return state
  }
}
