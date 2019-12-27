import { familyConstants } from '../constants';

const initialState = {
  loading: false,
  email: '',
};

export function family(state = initialState, action) {
  switch (action.type) {
    // case userConstants.GET_ME_REQUEST:
    //   return {
    //     ...state,
    //     loading: true,
    //     error: false,
    //   };
    // case userConstants.GET_ME_SUCCESS:
    //   return {
    //     ...state,
    //     loading: false,
    //     me: action.payload,
    //   };
    // case userConstants.GET_ME_FAILURE:
    //   return {
    //     ...state,
    //     loading: false,
    //     error: true,
    //   };
    // case userConstants.INPUT_EMAIL_DATA:
    //   return {
    //     ...state,
    //     me: {
    //       user: {
    //         ...state.me.user,
    //         email: action.payload.email,
    //       }
    //     },
    //   };
    // case userConstants.INPUT_PASSWORD_DATA:
    //   return {
    //     ...state,
    //     me: {
    //       user: {
    //         ...state.me.user,
    //         password: action.payload.password,
    //       }
    //     },
    //   };
    case familyConstants.INPUT_INVITE_DATA:
      return {
        ...state,
        email: action.payload,
      };
    // case userConstants.CLEAR_ME:
    //   return {
    //     ...state,
    //     me: {
    //       user: {
    //         created_at: '',
    //         email: '',
    //         email_verified_at: '',
    //         family_id: '',
    //         id: '',
    //         name: '',
    //         updated_at: ''
    //       }
    //     },
    //   }
    default:
      return state
  }
}
