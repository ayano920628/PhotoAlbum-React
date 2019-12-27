import { connect } from 'react-redux';
import FamilyActivate from '../components/FamilyActivate';
import { familyactivate } from '../actions/auth.actions';

const mapStateToProps = (state, ownProps) => ({});

const mapDispatchToProps = dispatch => ({
  familyactivate(name, code, password) {
    dispatch(familyactivate(name, code, password));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(FamilyActivate);