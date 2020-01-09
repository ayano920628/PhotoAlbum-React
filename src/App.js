import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';

import Login from './containers/Login';
import Signup from './containers/Signup';
import Activate from './containers/Activate';
import FamilyActivate from './containers/FamilyActivate';
import Dashboard from './containers/Dashboard';
import Upload from './containers/Upload';
import Image from './containers/Image';
import Album from './containers/Album';
import Albumcopy from './containers/Albumcopy';
import InviteFamily from './containers/InviteFamily';

import Albumorder from './containers/Albumorder';

import Render from './components/Example';

import { PrivateRoute } from './components/PrivateRoute';
import Registered from './components/Registered';

const styles = {
  root: {
    flexGrow: 1,
  },
}

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        {/* <Router> */}
        <Switch>
          <div className={classes.root}>
            <PrivateRoute path="/dashboard" exact={true} component={Dashboard}></PrivateRoute>
            <PrivateRoute path="/upload" exact={true} component={Upload}></PrivateRoute>
            <PrivateRoute path="/image/:id" component={Image}></PrivateRoute>
            <PrivateRoute path="/album" exact={true} component={Album}></PrivateRoute>
            <PrivateRoute path="/albumcopy" exact={true} component={Albumcopy}></PrivateRoute>
            <PrivateRoute path="/albumorder" exact={true} component={Albumorder}></PrivateRoute>
            <PrivateRoute path="/invite" exact={true} component={InviteFamily}></PrivateRoute>
            <Route path="/" exact={true} component={Login}></Route>
            <Route path="/register" exact={true} component={Signup}></Route>
            <Route path="/registered" exact={true} component={Registered}></Route>
            <Route path="/verify" component={Activate}></Route>
            <Route path="/familyverify" component={FamilyActivate}></Route>
            <PrivateRoute path="/test" exact={true} component={Render}></PrivateRoute>
          </div>
        </Switch>
        {/* </Router> */}
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(App);