import React, { useState, useEffect } from 'react';
import PhotoAlbumIcon from '@material-ui/icons/PhotoAlbum';
import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';
import HomeIcon from '@material-ui/icons/Home';

// const useStyles = makeStyles(theme => ({
//   root: {
//     '& > svg': {
//       margin: theme.spacing(2),
//     },
//   },
// }));

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

function Header() {
  const initialTab = () => {
    if (window.location.pathname === '/dashboard') {
      return 0
    } else if (window.location.pathname === '/album') {
      return 1
    } else if (window.location.pathname === '/upload') {
      return 2
    } else {
      return;
    }
  }
  const [value, setValue] = useState(initialTab());
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

