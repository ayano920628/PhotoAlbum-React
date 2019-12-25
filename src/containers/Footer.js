import { connect } from 'react-redux';
import Footer from '../components/Footer';
// import Footer from '../components/Footer';
import { logoutAndRedirect } from '../actions/auth.actions';
import { getMe, clearMe } from '../actions/user.actions';

const mapStateToProps = (state, ownProps) => ({
  me: state.user.me,
});

const mapDispatchToProps = dispatch => ({
  onMount() {
    dispatch(getMe());
  },
  onDelete() {
    dispatch(logoutAndRedirect());
    dispatch(clearMe());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Footer);