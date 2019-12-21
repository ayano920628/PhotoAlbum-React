import { connect } from 'react-redux';
import Image from '../components/Image';

// actionの読み込み
import { logoutAndRedirect } from '../actions/auth.actions';
import { getMe, clearMe } from '../actions/user.actions';
import { imageDelete, imageEdit, imageUpdate } from '../actions/image.actions';

// props経由でAPI経由で取得した自分自身の情報をコンポーネントに渡す
const mapStateToProps = (state, ownProps) => ({
  me: state.user.me,
  image: state.image
});

const mapDispatchToProps = dispatch => ({
  onMount(id) {
    dispatch(getMe());
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
});

export default connect(mapStateToProps, mapDispatchToProps)(Image);