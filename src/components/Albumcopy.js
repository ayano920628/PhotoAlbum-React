import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from './Header';
import Footer from '../containers/Footer';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Button from '@material-ui/core/Button';
import Image from 'react-image-resizer';
import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import Pagination from "material-ui-flat-pagination";
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';
const imgurl = `${process.env.PUBLIC_URL}`
// const imgurl = 'http://www.photoalbum.com.s3-website-ap-northeast-1.amazonaws.com/upload';

const theme = createMuiTheme();
const useStyles = makeStyles(theme => ({

  root: {
    // display: 'flex',
    flexWrap: 'wrap',
    // justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    height: 645,
  },
  paper: {
    // width: '90%',
    width: 350,
    height: 430,
    margin: '0 auto',
    // minWidth: 300,
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(1),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing(4)}px ${theme.spacing(0)}px ${theme.spacing(4)}px`,
  },
  subpaper: {
    // width: '90%',
    width: 350,
    height: 180,
    margin: '0 auto',
    // minWidth: 300,
    marginTop: theme.spacing(0),
    marginBottom: theme.spacing(1),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing(4)}px ${theme.spacing(0)}px ${theme.spacing(4)}px`,
  },
  gridList: {
    width: 300,
    height: 500,
    transform: 'translateZ(0)',
  },
  icon: {
    color: 'white',
  },
}));

function Albumcopy(props) {
  const classes = useStyles();
  const [offset, setOffset] = useState(0);
  const { me, image, album } = props;
  useEffect(() => {
    props.onMount();
  }, []);
  if (image.image.length >= 1 && (album.album.period_all === 'period_all' || album.album.period_all === undefined)) {
    return (
      <React.Fragment>
        <Header />
        <div className={classes.root}>
          <Paper className={classes.paper} elevation={5}>
            {/* <Image
              src={`${process.env.PUBLIC_URL}/20191229054340子どもc81e728d9d4c2f636f067f89cc14862c.jpg`}
              alt=''
              width={250}
              height={250} /> */}

            <GridList cellHeight={180} spacing={1} className={classes.gridList} cols={2}>
              {image.image
                .slice(offset, offset + 4)
                .map((item) => (
                  <GridListTile>
                    <Image
                      src={`${imgurl}/${item.img_name}`}
                      alt=''
                      width={150}
                      height={180} />
                  </GridListTile>
                ))
              }
            </GridList>
          </Paper>
          <Paper className={classes.subpaper} elevation={0}>
            <MuiThemeProvider theme={theme}>
              <CssBaseline />
              <Button>表紙</Button>
              <Pagination
                limit={4}
                offset={offset}
                total={image.image.length}
                onClick={(e, offset) => setOffset(offset)}
                centerRipple={true}
              // fullWidth={true}
              />
            </MuiThemeProvider>
            <div>
              <Button variant="contained" color="primary" to={'/albumorder'} component={Link}>
                発注する
              </Button>
            </div>
          </Paper>
        </div>
        <Footer />
      </ React.Fragment >
    );
  } else if (image.image.length >= 1 && album.album.period_all === 'period_select') {
    return (
      <React.Fragment>
        <Header />
        <div className={classes.root}>
          <Paper className={classes.paper} elevation={5}>
            <GridList cellHeight={150} spacing={1} className={classes.gridList}>
              {image.image.filter((i) => i.taken >= album.album.period_from && i.taken <= album.album.period_to)
                .slice(offset, offset + 4)
                .map((item) => (
                  <GridListTile>
                    <Image
                      src={`${imgurl}/${item.img_name}`}
                      alt=''
                      width={150}
                      height={150} />
                  </GridListTile>
                ))
              }
            </GridList>
          </Paper>
          <Paper className={classes.subpaper} elevation={0}>
            <MuiThemeProvider theme={theme}>
              <CssBaseline />
              <Button>表紙</Button>
              <Pagination
                limit={4}
                offset={offset}
                total={image.image.filter((i) => i.taken >= album.album.period_from && i.taken <= album.album.period_to).length}
                onClick={(e, offset) => setOffset(offset)}
                centerRipple={true}
              // fullWidth={true}
              />
            </MuiThemeProvider>
            <div>
              <Button variant="contained" color="primary" to={'/albumorder'} component={Link}>
                発注する
              </Button>
            </div>
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
          <Paper className={classes.paper} elevation={5}></Paper>
          <Paper className={classes.subpaper} elevation={0}>
            <MuiThemeProvider theme={theme}>
              <CssBaseline />
              <Button>表紙</Button>
              <Pagination
                limit={4}
                offset={offset}
                total={10}
                onClick={(e, offset) => setOffset(offset)}
                centerRipple={true}
              // fullWidth={true}
              />
            </MuiThemeProvider>
            <div>
              <Button variant="contained" color="primary" to={'/albumorder'} component={Link}>
                発注する
              </Button>
            </div>
          </Paper>
        </div>
        <Footer />
      </ React.Fragment>
    )
  }
}

export default Albumcopy;
