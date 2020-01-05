import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonIcon from '@material-ui/icons/Person';

import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import HomeIcon from '@material-ui/icons/Home';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import PersonAddIcon from '@material-ui/icons/PersonAdd';

const useStyles = makeStyles(theme => ({
  root: {
    // '& > svg': {
    //   margin: theme.spacing(2),
    // },
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },

}));

function FooterMe(props) {
  const classes = useStyles();
  const { me } = props.props;
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        <ListItem button >
          <ListItemIcon><PersonIcon /></ListItemIcon>
          <ListItemText primary={me.user.name} />
        </ListItem>
        {me.user.family_id
          ? <ListItem button disabled >
            <ListItemIcon><PersonAddIcon /></ListItemIcon>
            <ListItemText primary='Invite' />
          </ListItem>
          : <ListItem button to='/invite' component={Link} >
            <ListItemIcon><PersonAddIcon /></ListItemIcon>
            <ListItemText primary='Invite' />
          </ListItem>}
      </List>
      <Divider />
      <List>
        <ListItem button key=''>
          <ListItemIcon><InboxIcon /></ListItemIcon>
          <ListItemText primary='logout' onClick={props.props.onDelete} />
        </ListItem>
      </List>
    </div>
  );
  return (
    <div>
      <Button onClick={toggleDrawer('right', true)}><PersonIcon /></Button>
      <Drawer anchor="right" open={state.right} onClose={toggleDrawer('right', false)}>
        {sideList('right')}
      </Drawer>
    </div>
  );
}

export default function Footer(props) {
  const initialTab = () => {
    if (window.location.pathname === '/dashboard') {
      return 0
      // } else if (window.location.pathname === '/album') {
      //   return 1
      // } else if (window.location.pathname === '/upload') {
      //   return 2
      // } else {
      //   return ;
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
        <Tab icon={<FavoriteIcon />} label="FAVORITES" ></Tab>
        <Tab icon={<FooterMe props={props} />} label="ME" ></Tab>
      </Tabs >
    </Paper >
  );
}

