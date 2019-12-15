import { imageConstants } from '../constants';
import { imageService } from '../services';

export const images = () => {
  return dispatch => {
    dispatch(imageRequest());
    imageService.show()
      .then(
        data => dispatch(imageShow(data)),
        // error => dispatch(getMeFailure(error))
      );
  };
}

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
// const getMeSuccess = (data) => ({
//   type: imageConstants.IMAGE_UPDATE,
//   payload: data
// });
// const getMeSuccess = (data) => ({
//   type: imageConstants.IMAGE_DESTROY,
//   payload: data
// });
// const getMeFailure = (error) => ({
//   type: imageConstants.GET_ME_FAILURE,
//   error
// });

// export const clearMe = () => ({
//   type: imageConstants.CLEAR_ME
// });
