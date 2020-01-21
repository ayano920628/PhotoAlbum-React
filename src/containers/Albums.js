import { connect } from 'react-redux';
import Albums from '../components/Albums';

// actionの読み込み
import { getMe } from '../actions/user.actions';
import { albums } from '../actions/album.actions';

// props経由でAPI経由で取得した自分自身の情報をコンポーネントに渡す
const mapStateToProps = (state, ownProps) => ({
  me: state.user.me,
  image: state.image,
  album: state.album
});

const mapDispatchToProps = dispatch => ({
  onMount() {
    dispatch(getMe());
    dispatch(albums());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Albums);