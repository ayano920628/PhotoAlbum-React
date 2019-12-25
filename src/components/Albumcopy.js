import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from './Header';
import Footer from './Footer';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Button from '@material-ui/core/Button';


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
  // table: {
  //   minWidth: 500,
  // },
}));

function Albumcopy(props) {
  const classes = useStyles();
  useEffect(() => {
    props.onMount();
  }, []);

  const { me, image } = props;
  if (image.image.length >= 1) {
    return (
      <div>
        <Header />
        <div className={classes.root}>
          <GridList cellHeight={200} spacing={1} className={classes.gridList}>
            {image.image.map((item) => (
              <GridListTile>
                <img src={`${process.env.PUBLIC_URL}/${item.img_name}`} alt='' />
              </GridListTile>
            ))}
          </GridList>
        </div>
        <Footer />
        <Button color="inherit" onClick={props.onDelete}>logout</Button>
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
