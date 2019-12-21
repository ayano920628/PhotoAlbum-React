import React, { useState } from 'react';
import PhotoAlbumIcon from '@material-ui/icons/PhotoAlbum';

import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';
import SvgIcon from '@material-ui/core/SvgIcon';

const useStyles = makeStyles(theme => ({
  root: {
    '& > svg': {
      margin: theme.spacing(2),
    },
  },
}));

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

function Header(props) {
  const [value, setValue] = useState(0);
  const classes = useStyles();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    <Paper square className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="fullWidth"
        indicatorColor="secondary"
        textcolor="secondary"
        aria-label="icon label tabs example"
      >
        <Tab icon={<HomeIcon />} label="HOME" to='/dashboard' component={Link} ></Tab>
        <Tab icon={<PhotoAlbumIcon />} label="ALBUM" to='/album' component={Link} ></Tab>
        <Tab icon={<AddPhotoAlternateIcon />} label="PHOTO" to='/upload' component={Link} ></Tab>
      </Tabs >
    </Paper >

  );
}

export default Header;
