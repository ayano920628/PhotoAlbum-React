import { connect } from 'react-redux';
import Albumorder from '../components/Albumorder';

// actionの読み込み
import { getMe } from '../actions/user.actions';
import { images } from '../actions/image.actions';
import { sendAlbum } from '../actions/album.actions';
import { setZip1, setZip2, setPref, setAddr1, setAddr2, setTel, setName, setEmail, orderAlbum } from '../actions/albumorder.actions';

// props経由でAPI経由で取得した自分自身の情報をコンポーネントに渡す
const mapStateToProps = (state, ownProps) => ({
  me: state.user.me,
  image: state.image,
  album: state.album,
  albumorder: state.albumorder,
});

const mapDispatchToProps = dispatch => ({
  onMount() {
    dispatch(getMe());
    dispatch(images());
  },
  onSetZip1(value) {
    dispatch(setZip1(value));
  },
  onSetZip2(value) {
    dispatch(setZip2(value));
  },
  onSetPref(value) {
    dispatch(setPref(value));
  },
  onSetAddr1(value) {
    dispatch(setAddr1(value));
  },
  onSetAddr2(value) {
    dispatch(setAddr2(value));
  },
  onSetTel(value) {
    dispatch(setTel(value));
  },
  onSetName(value) {
    dispatch(setName(value));
  },
  onSetEmail(value) {
    dispatch(setEmail(value));
  },

  onSendPdf(file, title, cover) {
    dispatch(sendAlbum(file, title, cover));
  },
  onOrder(data) {
    dispatch(orderAlbum(data));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Albumorder);