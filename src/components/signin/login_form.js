import React, { Component } from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
// import { connect } from 'react-redux';
// import { readEvents } from '../actions';
// const App = () => (<Counter></Counter>)
// import _ from 'lodash'
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router-dom'
import {
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom'
import axios from 'axios';
import RegisterForm from './register_form';

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = { email: '', password: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    const api = 'http://127.0.0.1:8000/api/authenticate';
    axios
      .post(api, { email: this.state.email, password: this.state.password })
      .then((results) => {
        console.log(results.data.token);
      },
      )
      .catch(() => {
        console.log('通信に失敗しました。');
      });
    event.preventDefault();
  }

  render() {
    return (
      <React.Fragment>
        <Router>
          <Link to="/register">Sign Up</Link>
          <Route exact path='/register' component={RegisterForm} />
        </Router>
        <form onSubmit={this.handleSubmit} method='post'>
          <label>
            Email: <input type="text" name="email" value={this.state.email} onChange={this.handleChange} />
          </label>
          <label>
            Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <div>
        </div>
      </React.Fragment>
    )
  }
}
