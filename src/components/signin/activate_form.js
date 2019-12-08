import React, { Component } from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
// import { connect } from 'react-redux';
// import { readEvents } from '../actions';
// const App = () => (<Counter></Counter>)
// import _ from 'lodash'
import { Link } from 'react-router-dom'
import {
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom'
import axios from 'axios';

export default class ActivateForm extends Component {
  constructor(props) {
    super(props);
    this.state = { name: '', password: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    alert('Email: ' + this.state.name);
    event.preventDefault();
  }

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit} method='post'>
          <label>
            Name: <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
          </label>
          <label>
            Password: <input type="text" name="password" value={this.state.password} onChange={this.handleChange} />
          </label>
          {/* <label>
            Email: <input type="text" name="email" value={this.state.email} onChange={this.handleChange} />
          </label> */}
          <input type="submit" value="Submit" />
        </form>
        <div>
        </div>
      </React.Fragment>
    )
  }
}
