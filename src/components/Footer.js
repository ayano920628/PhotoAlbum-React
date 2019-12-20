import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonIcon from '@material-ui/icons/Person';

import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
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
    </SvgIcon >
  );
}

function Footer() {
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
        <Tab icon={<FavoriteIcon />} label="FAVORITES" ></Tab>
        <Tab icon={<PersonIcon />} label="ME" to='/upload' component={Link} ></Tab>
      </Tabs >
    </Paper >
  );
}

export default Footer;