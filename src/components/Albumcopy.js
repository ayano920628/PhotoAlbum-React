import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from './Header';
// import { Footer } from './Footer';
import Footer from '../containers/Footer';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Button from '@material-ui/core/Button';
import Image from 'react-image-resizer';
import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import Pagination from "material-ui-flat-pagination";
import Paper from '@material-ui/core/Paper';

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
    width: 500,
    height: 600,
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
  const [images, setImages] = useState([])
  useEffect(() => {
    props.onMount();
    // setImages(props.image);
  }, []);

  const { me, image, album } = props;
  // console.log(images);
  // const selectedImages = () => {
  //   setImages(props.props.image);
  // }

  if (image.image.length >= 1) {
    console.log(image.image);
    const result = image.image.filter((i) => i.taken >= '2019-12-29' && i.taken <= '2020-12-31');
    return (
      <div>
        <Header />
        <Render data={image.image} />
        <div className={classes.root}>
          <Paper className={classes.paper} elevation={1}>
            <GridList cellHeight={250} spacing={3} className={classes.gridList}>
              {result
                .slice(offset, offset + 6)
                .map((item) => (
                  <GridListTile>
                    <Image
                      src={`${process.env.PUBLIC_URL}/${item.img_name}`}
                      alt=''
                      width={250}
                      height={250} />
                  </GridListTile>
                ))
              }
            </GridList>
          </Paper>
        </div>
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <Pagination
            limit={6}
            offset={offset}
            total={image.image.length}
            onClick={(e, offset) => setOffset(offset)}
          />
        </MuiThemeProvider>

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
