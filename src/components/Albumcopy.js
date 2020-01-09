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

import Render from './Example';

const theme = createMuiTheme();
const useStyles = makeStyles(theme => ({

  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  paper: {
    // width: '90%',
    height: 500,
    margin: '0 auto',
    minWidth: 300,
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing(2)}px ${theme.spacing(3)}px ${theme.spacing(3)}px`,
  },
  gridList: {
    // width: 500,
    height: 500,
    transform: 'translateZ(0)',
  },
  titleBar: {
    background:
      'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
      'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
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
  if (image.image.length >= 1 && (album.period_all === 'period_all' || album.period_all === undefined)) {
    return (
      <div>
        <Header />
        <div className={classes.root}>
          <Paper className={classes.paper} elevation={1}>
            {/* <Image
              src={`${process.env.PUBLIC_URL}/20191229054340子どもc81e728d9d4c2f636f067f89cc14862c.jpg`}
              alt=''
              width={250}
              height={250} /> */}

            <GridList cellHeight={150} spacing={3} className={classes.gridList}>
              {image.image
                .slice(offset, offset + 6)
                .map((item) => (
                  <GridListTile>
                    <Image
                      src={`${process.env.PUBLIC_URL}/${item.img_name}`}
                      alt=''
                      width={150}
                      height={150} />
                  </GridListTile>
                ))
              }
            </GridList>
          </Paper>
        </div>
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          {/* <Button>表紙</Button> */}
          <Pagination
            limit={6}
            offset={offset}
            total={image.image.length}
            onClick={(e, offset) => setOffset(offset)}
            centerRipple={true}
          // fullWidth={true}
          />
        </MuiThemeProvider>
        {/* <Button variant="contained" color="primary" to={'/albumorder'} component={Link}>
          発注する
        </Button> */}

        <Footer />
      </div >
    );
  } else if (image.image.length >= 1 && album.period_all === 'period_select') {
    return (
      <div>
        <Header />
        <div className={classes.root}>
          <Paper className={classes.paper} elevation={1}>
            <GridList cellHeight={150} spacing={3} className={classes.gridList}>
              {image.image.filter((i) => i.taken >= album.period_from && i.taken <= album.period_to)
                .slice(offset, offset + 6)
                .map((item) => (
                  <GridListTile>
                    <Image
                      src={`${process.env.PUBLIC_URL}/${item.img_name}`}
                      alt=''
                      width={150}
                      height={150} />
                  </GridListTile>
                ))
              }
            </GridList>
          </Paper>
        </div>
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          {/* <Button>表紙</Button> */}
          <Pagination
            limit={6}
            offset={offset}
            total={image.image.filter((i) => i.taken >= album.period_from && i.taken <= album.period_to).length}
            onClick={(e, offset) => setOffset(offset)}
            centerRipple={true}
          // fullWidth={true}

          />
        </MuiThemeProvider>
        {/* <Button variant="contained" color="primary" to={'/albumorder'} component={Link}>
          発注する
        </Button> */}
        <Footer />
      </div >
    );

  } else {
    return (
      <div >
        <Header />
        <Footer />
      </div >
    )
  }
}

export default Albumcopy;
