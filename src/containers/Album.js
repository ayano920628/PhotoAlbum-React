import { connect } from 'react-redux';
import Album from '../components/Album';

// actionの読み込み
import { logoutAndRedirect } from '../actions/auth.actions';
import { getMe, clearMe } from '../actions/user.actions';
import { images } from '../actions/image.actions';

// props経由でAPI経由で取得した自分自身の情報をコンポーネントに渡す
const mapStateToProps = (state, ownProps) => ({
  me: state.user.me,
  image: state.image
});

const mapDispatchToProps = dispatch => ({
  onMount() {
    dispatch(getMe());
    dispatch(images());
  },
  onDelete() {
    dispatch(logoutAndRedirect());
    dispatch(clearMe());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Album);