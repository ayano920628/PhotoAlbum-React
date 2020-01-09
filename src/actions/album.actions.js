import { albumConstants } from '../constants';
import { albumService } from '../services';

export const sendAlbum = (file, title, cover) => {
  return dispatch => {
    // return 'aaa';
    // dispatch(albumRequest());
    albumService.store(file, title, cover)
    // .then(
    //   data => dispatch(albumNew(data)),
    //   error => dispatch(albumFailure(error))
    // );
  };
}

export const setAlbum = (file) => {
  return dispatch => {
    dispatch(albumNew(file))
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
    dispatch(albumCover(value));
  };
}

export const changeTitle = (value) => {
  return dispatch => {
    dispatch(albumTitle(value));
  };
}

export const changePeriod = (value) => {
  return dispatch => {
    dispatch(albumPeriod(value));
  };
}

export const changePeriodFrom = (value) => {
  return dispatch => {
    dispatch(albumPeriodFrom(value));
  };
}

export const changePeriodTo = (value) => {
  return dispatch => {
    dispatch(albumPeriodTo(value));
  };
}

const albumRequest = () => ({
  type: albumConstants.ALBUM_REQUEST
});

const albumShow = (data) => ({
  type: albumConstants.ALBUM_SHOW,
  payload: data
});

const albumNew = (data) => ({
  type: albumConstants.ALBUM_NEW,
  payload: data
});


const albumFailure = (error) => ({
  type: albumConstants.ALBUM_FAILURE,
  error
});

const albumCover = (value) => ({
  type: albumConstants.ALBUM_COVER,
  payload: value
});

const albumTitle = (value) => ({
  type: albumConstants.ALBUM_TITLE,
  payload: value
});

const albumPeriod = (value) => ({
  type: albumConstants.ALBUM_PERIOD,
  payload: value
});

const albumPeriodFrom = (value) => ({
  type: albumConstants.ALBUM_PERIOD_FROM,
  payload: value
});

const albumPeriodTo = (value) => ({
  type: albumConstants.ALBUM_PERIOD_TO,
  payload: value
});
