import { connect } from 'react-redux';
import Album from '../components/Album';

// actionの読み込み
import { getMe } from '../actions/user.actions';
import { images } from '../actions/image.actions';
import { albums, changeCover, changeTitle, changePeriod, changePeriodFrom, changePeriodTo } from '../actions/album.actions';

// props経由でAPI経由で取得した自分自身の情報をコンポーネントに渡す
const mapStateToProps = (state, ownProps) => ({
  me: state.user.me,
  image: state.image,
  album: state.album,
});

const mapDispatchToProps = dispatch => ({
  onMount() {
    dispatch(getMe());
    dispatch(images());
    dispatch(albums());
  },
  onSelectCover(value) {
    dispatch(changeCover(value));
  },
  onTitle(value) {
    dispatch(changeTitle(value));
  },
  onPeriod(value) {
    dispatch(changePeriod(value));
  },
  onPeriodFrom(value) {
    dispatch(changePeriodFrom(value));
  },
  onPeriodTo(value) {
    dispatch(changePeriodTo(value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Album);