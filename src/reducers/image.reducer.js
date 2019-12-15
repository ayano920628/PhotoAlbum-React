import { imageConstants } from '../constants';

const initialState = {
  loading: false,
  image: {
    created_at: null,
    id: null,
    img_comment_1: null,
    img_comment_2: null,
    img_name: 'aaa',
    taken: null,
    updated_at: null,
    user_id: null
  }
};

export function image(state = initialState, action) {
  switch (action.type) {
    case imageConstants.IMAGE_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
      };
    // case imageConstants.IMAGE_STORE:
    //   return {
    //     ...state,
    //     loading: true,
    //     error: false,
    //   };
    case imageConstants.IMAGE_SHOW:
      return {
        ...state,
        loading: false,
        image: action.payload,
      };
    // case imageConstants.IMAGE_UPDATE:
    //   return {
    //     ...state,
    //     loading: false,
    //     error: true,
    //   };
    // case imageConstants.IMAGE_DESTROY:
    //   return {
    //     ...state,
    //     me: {},
    //   }
    case imageConstants.IMAGE_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      };

    default:
      return state
  }
}
