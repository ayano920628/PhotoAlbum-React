import { albumConstants } from '../constants';

const initialState = {
  error: false,
  loading: false,
  album: {
    period_all: '',
    period_from: '',
    period_to: '',
    title: '',
    pagination_row: '',
    pagination_column: '',
    cover_photo: '',
  }
};

export function album(state = initialState, action) {
  switch (action.type) {
    case albumConstants.ALBUM_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case albumConstants.ALBUM_SHOW:
      return {
        ...state,
        album: action.payload,
        loading: false,
      };
    case albumConstants.ALBUM_VOICESHOW:
      return {
        ...state,
        album: {
          ...state.album,
          voice: action.payload,
        },
        loading: false,
      };
    case albumConstants.ALBUM_COVER:
      return {
        ...state,
        loading: false,
        album: {
          ...state.album,
          cover_photo: action.payload,
        },
      };
    case albumConstants.ALBUM_TITLE:
      return {
        ...state,
        loading: false,
        album: {
          ...state.album,
          title: action.payload,
        },
      };
    case albumConstants.ALBUM_PERIOD:
      return {
        ...state,
        loading: false,
        album: {
          ...state.album,
          period_all: action.payload,
        },
      };
    case albumConstants.ALBUM_PERIOD_FROM:
      return {
        ...state,
        loading: false,
        album: {
          ...state.album,
          period_from: action.payload,
        },
      };
    case albumConstants.ALBUM_PERIOD_TO:
      return {
        ...state,
        loading: false,
        album: {
          ...state.album,
          period_to: action.payload,
        },
      };
    case albumConstants.ALBUM_READ:
      return {
        ...state,
        loading: false,
        album: action.payload,
      };
    case albumConstants.ALBUM_SETVOICE:
      return {
        ...state,
        loading: false,
        album: {
          ...state.album,
          voice: action.payload,
        },
      };
    case albumConstants.ALBUM_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state
  }
}
