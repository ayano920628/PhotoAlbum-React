import { connect } from 'react-redux';
import Login from '../components/Login';
import { login } from '../actions/auth.actions';
import { push } from 'react-router-redux';
const mapStateToProps = (state, ownProps) => ({});

const mapDispatchToProps = dispatch => ({
  login(email, password) {
    dispatch(login(email, password));
    dispatch(push('/dashboard'));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);