import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import { withStyles } from '@material-ui/core/styles';


import Paper from '@material-ui/core/Paper';
// import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';


const styles = {
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20
  },
  // root: {
  //   flexGrow: 1,
  //   maxWidth: 500,
  // },
}

function header(props) {
  const { classes } = props;
  // const [value, setValue] = React.useState('');
  // const [value, setValue] = useState(0);
  // const handleChange = (event, newValue) => {
  //   setValue(newValue);
  // };


  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="title" color="inherit" className={classes.grow}>
          React + ReduxでJWT認証を導入しよう！
        </Typography>
        <Button color="inherit" onClick={props.onClick}>{props.menu}</Button>
      </Toolbar>
    </AppBar>
    // <Paper square className={classes.root}>
    //   <Tabs
    //     value={value}
    //     onChange={handleChange}
    //     variant="fullWidth"
    //     indicatorColor="secondary"
    //     textColor="secondary"
    //     aria-label="icon label tabs example"
    //   >
    //     <Tab icon={<PhoneIcon />} label="RECENTS" />
    //     <Tab icon={<FavoriteIcon />} label="FAVORITES" />
    //     <Tab icon={<PersonPinIcon />} label="NEARBY" />
    //   </Tabs>
    // </Paper>

  );
}

export default withStyles(styles)(header);
