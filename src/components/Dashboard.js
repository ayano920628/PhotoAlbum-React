import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Header from './Header';
import Footer from '../containers/Footer';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { Link } from 'react-router-dom';
const imgurl = `${process.env.PUBLIC_URL}`
// const imgurl = 'http://www.photoalbum.com.s3-website-ap-northeast-1.amazonaws.com/upload';

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
  gridList: {
    width: 350,
    height: 600,
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
});

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img_name: '',
      image_src: '',
    }
    this.props.onMount();
  }

  render() {
    const { classes, me, image } = this.props;
    if (image.image.length >= 1) {
      return (
        <React.Fragment>
          <Header />
          <div className={classes.root}>
            <Paper className={classes.paper} elevation={0}>
              <GridList cellHeight={175} spacing={1} className={classes.gridList} cols={2}>
                {image.image.map((item) => (
                  <GridListTile
                    to={`/image/${item.id}`}
                    component={Link}
                  >
                    <img src={`${imgurl}/${item.img_name}`} alt='' />
                  </GridListTile>
                ))}
              </GridList>
            </Paper>
          </div>
          <Footer />
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment >
          <Header />
          <div className={classes.root}>
            <Paper className={classes.paper} elevation={1}>
            </Paper>
          </div>
          <Footer />
        </React.Fragment >
      )
    }
  }
}
export default withStyles(styles)(Dashboard);
