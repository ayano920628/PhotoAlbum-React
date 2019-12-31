import { albumConstants } from '../constants';
import { albumService } from '../services';

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

const albumFailure = (error) => ({
  type: albumConstants.ALBUM_FAILURE,
  error
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
