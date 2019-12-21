import { connect } from 'react-redux';
import Image from '../components/Image';

// actionの読み込み
import { logoutAndRedirect } from '../actions/auth.actions';
import { getMe, clearMe } from '../actions/user.actions';
import { images, imageDelete, imageEdit, imageUpdate, imageChange } from '../actions/image.actions';
import { Field, reduxForm } from 'redux-form';

// props経由でAPI経由で取得した自分自身の情報をコンポーネントに渡す
const mapStateToProps = (state, ownProps) => ({
  me: state.user.me,
  // image: state.image[ownProps.match.params.id]
  image: state.image
});

const mapDispatchToProps = dispatch => ({
  onMount() {
    dispatch(getMe());
    // dispatch(images());
  },
  onGetImage(id) {
    dispatch(imageEdit(id));
  },
  onDelete() {
    dispatch(logoutAndRedirect());
    dispatch(clearMe());
  },
  onDeleteImage(id) {
    dispatch(imageDelete(id));
  },
  onUpdateImage(id, img_comment_1, img_comment_2) {
    dispatch(imageUpdate(id, img_comment_1, img_comment_2));
  },
  onChange(value) {
    dispatch(imageChange(value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(
  reduxForm({ enableReinitialize: true })(Image))

// export default connect(mapStateToProps, mapDispatchToProps)(Image);