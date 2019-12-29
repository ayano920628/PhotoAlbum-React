import { imageConstants } from '../constants';
import { imageService } from '../services';

export const images = () => {
  return dispatch => {
    dispatch(imageRequest());
    imageService.show()
      .then(
        data => dispatch(imageShow(data)),
        error => dispatch(imageFailure(error))
      );
  };
}

export const upload = (img_name) => {
  return dispatch => {
    // dispatch(imageRequest());
    imageService.store(img_name)
    // .then(
    //   data => dispatch(imageShow(data)),
    //   error => dispatch(imageFailure(error))
    // );
  };
}

export const imageDelete = (id) => {
  return dispatch => {
    imageService.destroy(id)
  }
};

export const imageEdit = (id) => {
  return dispatch => {
    imageService.edit(id)
      .then(
        data => dispatch(imageRead(data)),
        error => dispatch(imageFailure(error))
      );
  }
};

export const imageUpdate = (id, img_comment_1, img_comment_2) => {
  return dispatch => {
    imageService.update(id, img_comment_1, img_comment_2)
      .then(
        data => dispatch(imageRead(data)),
        error => dispatch(imageFailure(error))
      );
  }
};

export const imageChange_1 = (value) => {
  return dispatch => {
    dispatch({
      type: imageConstants.IMAGE_CHANGE_1,
      payload: value
    })
  }
};

export const imageChange_2 = (value) => {
  return dispatch => {
    dispatch({
      type: imageConstants.IMAGE_CHANGE_2,
      payload: value
    })
  }
};

const imageRequest = () => ({
  type: imageConstants.IMAGE_REQUEST
});

const imageShow = (data) => ({
  type: imageConstants.IMAGE_SHOW,
  payload: data
});

const imageRead = (data) => ({
  type: imageConstants.IMAGE_READ,
  payload: data
});

const imageFailure = (error) => ({
  type: imageConstants.IMAGE_FAILURE,
  error
});
