import { connect } from 'react-redux';
import Signup from '../components/Signup';
import { signup } from '../actions/auth.actions';

const mapStateToProps = (state, ownProps) => ({});

const mapDispatchToProps = dispatch => ({
  signup(email) {
    dispatch(signup(email));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);