import { imageConstants } from '../constants';

const initialState = {
  loading: false,
  image: {
    created_at: '',
    id: '',
    img_comment_1: '',
    img_comment_2: '',
    img_name: '',
    taken: '',
    updated_at: '',
    user_id: ''
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
    case imageConstants.IMAGE_STORE:
      return {
        ...state,
        loading: true,
        image: action.payload,
        // error: false,
      };
    case imageConstants.IMAGE_SHOW:
      return {
        ...state,
        loading: false,
        image: action.payload,
      };
    case imageConstants.IMAGE_READ:
      return {
        ...state,
        loading: false,
        image: action.payload,
      };
    case imageConstants.IMAGE_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      };
    case imageConstants.IMAGE_CHANGE:
      return {
        ...state,
        loading: false,
        image: {
          ...state.image,
          img_comment_1: action.payload,
        },
        // error: true,
      };

    default:
      return state
  }
}
