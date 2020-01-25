import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Header from './Header';
import Footer from '../containers/Footer';
// const imgurl = 'http://www.photoalbum.com.s3-website-ap-northeast-1.amazonaws.com/uploadpdf';

const styles = theme => ({
  // root: {
  //   ...theme.mixins.gutters(),
  //   paddingTop: theme.spacing(2),
  //   paddingBottom: theme.spacing(2),
  // },
  root: {
    // display: 'flex',
    // flexWrap: 'wrap',
    // justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  paper: {
    width: '80%',
    height: 630,
    margin: '0 auto',
    minWidth: 300,
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    // padding: `${theme.spacing(2)}px ${theme.spacing(3)}px ${theme.spacing(3)}px`,
  },
});

class Albums extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   img_name: '',
    //   image_src: '',
    // }
    this.props.onMount();
  }

  render() {
    const { classes, me, album } = this.props;
    if (album.album.length >= 1) {
      return (
        <React.Fragment>
          <Header />
          <div className={classes.root}>
            <Paper className={classes.paper} elevation={0}>
              {/* {album.album.map((item) => ( */}
              <div>
                {/* <img src="https://api.qrserver.com/v1/create-qr-code/?data=https://workabroad.jp/posts/2131&size=100x100&format=svg&color=1d417a&bgcolor=f7f6eb" alt="" title="" /> */}
                <img src="https://api.qrserver.com/v1/create-qr-code/?data=https://s3-ap-northeast-1.amazonaws.com/www.photoalbum.com/uploadpdf/20200116005239my_imagec81e728d9d4c2f636f067f89cc14862c.pdf/zPrGllhsQrQ1MWVEmoZavRRCOtuFRHjfwBrLj4Cu.pdf&size=100x100&format=svg&color=1d417a&bgcolor=f7f6eb" alt="" title="" />
                {/* <a href={`https://s3-ap-northeast-1.amazonaws.com/www.photoalbum.com/uploadpdf/20200116005239my_imagec81e728d9d4c2f636f067f89cc14862c.pdf/zPrGllhsQrQ1MWVEmoZavRRCOtuFRHjfwBrLj4Cu.pdf`} >PDFサンプル</a> */}
              </div>
              {/* ))} */}
            </Paper>
          </div>
          <Footer />
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <Header />
          <div className={classes.root}>
            <Paper className={classes.paper} elevation={0}>
            </Paper>
          </div>
          <Footer />
        </React.Fragment>
      );
    }
  }
}
export default withStyles(styles)(Albums);
