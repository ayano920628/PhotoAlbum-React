import React, { Component } from 'react';
// import { Route } from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';

import Login from './containers/Login';
import Signup from './containers/Signup';
import Activate from './containers/Activate';
import Dashboard from './containers/Dashboard';
import Upload from './containers/Upload';
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
      <Router>
        <div className={classes.root}>
          <PrivateRoute path="/dashboard" component={Dashboard}></PrivateRoute>
          <PrivateRoute path="/upload" component={Upload}></PrivateRoute>
          {/* <Route path="/upload" component={Upload}></Route> */}
          {/* <Route path="/dashboard" component={Dashboard}></Route> */}
          <Route path="/" exact={true} component={Login}></Route>
          <Route path="/register" exact={true} component={Signup}></Route>
          <Route path="/registered" exact={true} component={Registered}></Route>
          <Route path="/verify" component={Activate}></Route>
        </div>
      </Router>
    );
  }
}

export default withStyles(styles)(App);