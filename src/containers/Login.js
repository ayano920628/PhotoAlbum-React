import { connect } from 'react-redux';
import Login from '../components/Login';
import { login } from '../actions/auth.actions';
import { inputEmailInfo, inputPasswordInfo } from '../actions/user.actions';
import { push } from 'react-router-redux';

const mapStateToProps = (state, ownProps) => ({
  me: state.user.me,
});

const mapDispatchToProps = dispatch => ({
  login(email, password) {
    dispatch(login(email, password));
    dispatch(push('/dashboard'));
  },
  onEmailChange(inputdata) {
    dispatch(inputEmailInfo(inputdata));
  },
  onPasswordChange(inputdata) {
    dispatch(inputPasswordInfo(inputdata));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);