import { imageConstants } from '../constants';

const initialState = {
  image: {
    id: '',
    user_id: '',
    img_comment_1: '',
    img_comment_2: '',
    img_name: '',
    taken: '',
    // created_at: '',
    // updated_at: '',
  }
};

export function image(state = initialState, action) {
  switch (action.type) {
    case imageConstants.IMAGE_REQUEST:
      return {
        ...state,
        // error: false,
      };
    case imageConstants.IMAGE_STORE:
      return {
        ...state,
        image: action.payload,
        // error: false,
      };
    case imageConstants.IMAGE_SHOW:
      return {
        ...state,
        image: action.payload,
      };
    case imageConstants.IMAGE_READ:
      return {
        ...state,
        image: action.payload,
      };
    case imageConstants.IMAGE_FAILURE:
      return {
        ...state,
        error: true,
      };
    case imageConstants.IMAGE_CHANGE_1:
      return {
        ...state,
        image: {
          ...state.image,
          img_comment_1: action.payload,
        },
        // error: true,
      };
    case imageConstants.IMAGE_CHANGE_2:
      return {
        ...state,
        image: {
          ...state.image,
          img_comment_2: action.payload,
        },
        // error: true,
      };

    default:
      return state
  }
}
