import { albumorderConstants } from '../constants';
import { albumorderService } from '../services';

export const orderAlbum = (value) => {
  return dispatch => {
    albumorderService.order(value)
    //   .then(
    //     data => dispatch(imageRead(data)),
    //     error => dispatch(imageFailure(error))
    //   );
    // dispatch(push('/Dashboard'));
  }
};

export const setZip1 = (data) => {
  return dispatch => {
    dispatch({
      type: albumorderConstants.ALBUMORDER_ZIP1,
      payload: data
    })
  };
}

export const setZip2 = (data) => {
  return dispatch => {
    dispatch({
      type: albumorderConstants.ALBUMORDER_ZIP2,
      payload: data
    })
  };
}

export const setPref = (data) => {
  return dispatch => {
    dispatch({
      type: albumorderConstants.ALBUMORDER_PREF,
      payload: data
    })
  };
}

export const setAddr1 = (data) => {
  return dispatch => {
    dispatch({
      type: albumorderConstants.ALBUMORDER_ADDR1,
      payload: data
    })
  };
}

export const setAddr2 = (data) => {
  return dispatch => {
    dispatch({
      type: albumorderConstants.ALBUMORDER_ADDR2,
      payload: data
    })
  };
}

export const setTel = (data) => {
  return dispatch => {
    dispatch({
      type: albumorderConstants.ALBUMORDER_TEL,
      payload: data
    })
  };
}

export const setName = (data) => {
  return dispatch => {
    dispatch({
      type: albumorderConstants.ALBUMORDER_NAME,
      payload: data
    })
  };
}

export const setEmail = (data) => {
  return dispatch => {
    dispatch({
      type: albumorderConstants.ALBUMORDER_EMAIL,
      payload: data
    })
  };
}

