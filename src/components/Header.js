import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import { withStyles } from '@material-ui/core/styles';

import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';

import { green } from '@material-ui/core/colors';
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
    // <AppBar position="static">
    //   <Toolbar>
    //     <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
    //       <MenuIcon />
    //     </IconButton>
    //     <Typography variant="title" color="inherit" className={classes.grow}>
    //       React + ReduxでJWT認証を導入しよう！
    //     </Typography>
    //     <Button color="inherit" onClick={props.onClick}>{props.menu}</Button>
    //   </Toolbar>
    // </AppBar>

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
        <Tab icon={<FavoriteIcon />} label="FAVORITES" ></Tab>
        <Tab icon={<AddPhotoAlternateIcon />} label="PHOTO" to='/upload' component={Link} ></Tab>
      </Tabs >
    </Paper >

  );
}

export default Header;
