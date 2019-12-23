import { connect } from 'react-redux';
import Signup from '../components/Signup';
import { signup } from '../actions/auth.actions';
import { signUpInfo } from '../actions/user.actions';
import { push } from 'react-router-redux';

const mapStateToProps = (state, ownProps) => ({
  me: state.user.me,
});

const mapDispatchToProps = dispatch => ({
  signup(email) {
    dispatch(signup(email));
    dispatch(push('/registered'));
  },
  onChange(value) {
    dispatch(signUpInfo(value));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);