import { connect } from 'react-redux';
import Dashboard from '../components/Dashboard';
// actionの読み込み
import { logoutAndRedirect } from '../actions/auth.actions';
import { getMe, clearMe } from '../actions/user.actions';

// props経由でAPI経由で取得した自分自身の情報をコンポーネントに渡す
const mapStateToProps = (state, ownProps) => ({
  me: state.user.me
});

const mapDispatchToProps = dispatch => ({
  onMount() {
    dispatch(getMe());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);