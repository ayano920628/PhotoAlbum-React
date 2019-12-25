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
    width: '80%',
    margin: '0 auto',
    minWidth: 300,
    marginTop: theme.spacing(8),
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
  useEffect(() => {
    props.onMount();
  }, []);

  const { me, image } = props;
  if (image.image.length >= 1) {
    return (
      <div>
        <Header />
        <div className={classes.root}>
          <GridList cellHeight={200} spacing={3} className={classes.gridList}>
            {image.image
              .slice(offset, offset + 6)
              .map((item) => (
                <GridListTile>
                  <Image
                    src={`${process.env.PUBLIC_URL}/${item.img_name}`}
                    alt=''
                    width={180}
                    height={180} />
                </GridListTile>
              ))
            }
          </GridList>
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
      </div>
    );
  } else {
    return (
      <div >
        <Header />
        <Footer />
        <Button color="inherit" onClick={props.onDelete}>logout</Button>
      </div >
    )
  }
}

export default Albumcopy;
