import { connect } from 'react-redux';
import Activate from '../components/Activate';
import { activate } from '../actions/auth.actions';

const mapStateToProps = (state, ownProps) => ({});

const mapDispatchToProps = dispatch => ({
  activate(name, code, password) {
    dispatch(activate(name, code, password));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Activate);