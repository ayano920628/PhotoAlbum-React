import React, { useState, useEffect } from 'react';
import PhotoAlbumIcon from '@material-ui/icons/PhotoAlbum';

import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Paper from '@material-ui/core/Paper';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';
import SvgIcon from '@material-ui/core/SvgIcon';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
// import SwipeableViews from 'react-swipeable-views';

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


function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};
function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

function Header() {
  const initialTab = () => {
    if (window.location.pathname === '/dashboard') {
      return 0
    } else if (window.location.pathname === '/album') {
      return 1
    } else if (window.location.pathname === '/upload') {
      return 2
    }
  }
  const [value, setValue] = useState(initialTab());
  const classes = useStyles();
  const theme = useTheme();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      {/* <Paper square className={classes.root}> */}
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="fullWidth"
          scrollButtons="on"
          indicatorColor="secondary"
          textColor="secondary"
          aria-label="full width tabs example"
        >
          <Tab icon={<HomeIcon />} label="HOME" {...a11yProps(0)} to='/dashboard' component={Link} ></Tab>
          <Tab icon={<PhotoAlbumIcon />} label="ALBUM" {...a11yProps(1)} to='/album' component={Link} ></Tab>
          <Tab icon={<AddPhotoAlternateIcon />} label="PHOTO" {...a11yProps(2)} to='/upload' component={Link} ></Tab>
        </Tabs >
      </AppBar>
      <TabPanel value={value} index={0} dir={theme.direction}>
      </TabPanel>
      <TabPanel value={value} index={1} dir={theme.direction}>
      </TabPanel>
      <TabPanel value={value} index={2} dir={theme.direction}>
      </TabPanel>
    </div >
  );
}

export default Header;

