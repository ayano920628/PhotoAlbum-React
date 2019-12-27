import { connect } from 'react-redux';
import InviteFamily from '../components/InviteFamily';
import { push } from 'react-router-redux';
import { getMe } from '../actions/user.actions';
import { inviteInfo, inviteFamily } from '../actions/family.actions';

const mapStateToProps = (state, ownProps) => ({
  me: state.user.me,
  family: state.family,
});

const mapDispatchToProps = dispatch => ({
  onMount() {
    dispatch(getMe());
  },
  onChange(value) {
    dispatch(inviteInfo(value));
  },
  onInvite(email) {
    dispatch(inviteFamily(email));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(InviteFamily);