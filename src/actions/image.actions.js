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
// export const sendfile = (file) => {
//   return dispatch => {
//     // dispatch(imageRequest());
//     imageService.filestore(file)
//       .then(
//         data => dispatch(imageShow(data)),
//         error => dispatch(imageFailure(error))
//       );
//   };
// }

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
const imageFailure = (error) => ({
  type: imageConstants.IMAGE_FAILURE,
  error
});

// export const clearMe = () => ({
//   type: imageConstants.CLEAR_ME
// });
