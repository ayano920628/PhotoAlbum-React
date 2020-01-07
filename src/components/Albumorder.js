import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from './Header';
import Footer from '../containers/Footer';
import Button from '@material-ui/core/Button';
import Render from './Example';

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

function Albumorder(props) {
  const classes = useStyles();
  const { me, image, album } = props;

  const handleSubmit = e => {
    e.preventDefault();
    const hrefPDF = document.getElementById('aaa').getElementsByTagName('a')[0].getAttribute('href');
    console.log(hrefPDF);
  }
  if (image.image.length >= 1) {
    return (
      <div>
        <Header />
        <div id="aaa">
          <Render data={props} />
        </div>

        <Button variant="contained" color="primary" onClick={handleSubmit} >
          PDF送信
              </Button>
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

export default Albumorder;