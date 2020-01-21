import { albumConstants } from '../constants';
import { albumService } from '../services';
import { push } from 'react-router-redux';

export const sendAlbum = (file, title, cover) => {
  return dispatch => {
    // dispatch(albumRequest());
    albumService.store(file, title, cover)
    // .then(
    //   data => dispatch(albumNew(data)),
    //   error => dispatch(albumFailure(error))
    // );
    dispatch(push('/ordered'));
  };
}

export const albums = () => {
  return dispatch => {
    dispatch(albumRequest());
    albumService.show()
      .then(
        data => dispatch(albumShow(data)),
        error => dispatch(albumFailure(error))
      );
  };
}

export const changeCover = (value) => {
  return dispatch => {
    dispatch({
      type: albumConstants.ALBUM_COVER,
      payload: value
    });
  };
}

export const changeTitle = (value) => {
  return dispatch => {
    dispatch({
      type: albumConstants.ALBUM_TITLE,
      payload: value
    });
  };
}

export const changePeriod = (value) => {
  return dispatch => {
    dispatch({
      type: albumConstants.ALBUM_PERIOD,
      payload: value
    });
  };
}

export const changePeriodFrom = (value) => {
  return dispatch => {
    dispatch({
      type: albumConstants.ALBUM_PERIOD_FROM,
      payload: value
    });
  };
}

export const changePeriodTo = (value) => {
  return dispatch => {
    dispatch({
      type: albumConstants.ALBUM_PERIOD_TO,
      payload: value
    });
  };
}

export const setVoice = (value) => {
  return dispatch => {
    dispatch({
      type: albumConstants.ALBUM_SETVOICE,
      payload: value
    });
  };
}

export const saveVoice = (value) => {
  return dispatch => {
    albumService.storevoice(value)
      .then(
        data => dispatch(albumVoiceShow(data)),
        error => dispatch(albumFailure(error))
      );
    // dispatch(push('/albums'));
  };
}

const albumRequest = () => ({
  type: albumConstants.ALBUM_REQUEST
});

const albumShow = (data) => ({
  type: albumConstants.ALBUM_SHOW,
  payload: data
});

const albumVoiceShow = (data) => ({
  type: albumConstants.ALBUM_VOICESHOW,
  payload: data
});

// const albumNew = (data) => ({
//   type: albumConstants.ALBUM_NEW,
//   payload: data
// });


const albumFailure = (error) => ({
  type: albumConstants.ALBUM_FAILURE,
  error
});