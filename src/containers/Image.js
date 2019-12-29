import { connect } from 'react-redux';
import Image from '../components/Image';

// actionの読み込み
import { getMe } from '../actions/user.actions';
import { images, imageDelete, imageEdit, imageUpdate, imageChange_1, imageChange_2 } from '../actions/image.actions';
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
  onDeleteImage(id) {
    dispatch(imageDelete(id));
  },
  onUpdateImage(id, img_comment_1, img_comment_2) {
    dispatch(imageUpdate(id, img_comment_1, img_comment_2));
  },
  onChange_1(value) {
    dispatch(imageChange_1(value));
  },
  onChange_2(value) {
    dispatch(imageChange_2(value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(
  reduxForm({ enableReinitialize: true })(Image))

// export default connect(mapStateToProps, mapDispatchToProps)(Image);