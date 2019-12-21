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
  }
};

export const imageChange = (value) => {
  return dispatch => {
    dispatch({
      type: imageConstants.IMAGE_CHANGE,
      payload: value
    })
  }
};

const imageRequest = () => ({
  type: imageConstants.IMAGE_REQUEST
});

// const getMeRequest = () => ({
//   type: imageConstants.IMAGE_STORE
// });
const imageShow = (data) => ({
  type: imageConstants.IMAGE_SHOW,
  payload: data
});

const imageRead = (data) => ({
  type: imageConstants.IMAGE_READ,
  payload: data
});

const imageChangeState = (value) => ({
  type: imageConstants.IMAGE_READ,
  payload: value
});

// const getMeSuccess = (data) => ({
//   type: imageConstants.IMAGE_UPDATE,
//   payload: data
// });
// const getMeSuccess = (data) => ({
//   type: imageConstants.IMAGE_DESTROY,
//   payload: data
// });
const imageFailure = (error) => ({
  type: imageConstants.IMAGE_FAILURE,
  error
});

// export const clearMe = () => ({
//   type: imageConstants.CLEAR_ME
// });
