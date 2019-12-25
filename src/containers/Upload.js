import { connect } from 'react-redux';
import Upload from '../components/Upload';

// actionの読み込み
import { getMe } from '../actions/user.actions';
import { upload } from '../actions/image.actions';

// props経由でAPI経由で取得した自分自身の情報をコンポーネントに渡す
const mapStateToProps = (state, ownProps) => ({
  me: state.user.me,
  // image: state.image
});

const mapDispatchToProps = dispatch => ({
  onMount() {
    dispatch(getMe());
  },
  onUpload(img_name) {
    dispatch(upload(img_name));
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(Upload);