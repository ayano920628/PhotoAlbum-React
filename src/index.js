import React from 'react';
import { render } from 'react-dom';
// import { Provider } from 'react-redux';
// import { createStore } from 'redux';
// import LoginForm from './components/signin/login_form.js';
import Header from './common/header.js';
import Menu from './common/menu.js';
import Contents from './route.js';
import RegisterForm from './components/signin/register_form';
import {
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom'

render(
  <React.Fragment>
    <Header />
    <Menu />
    <Contents />
    {/* <LoginForm /> */}
    <div>aaa</div>
  </React.Fragment>,
  // <Provider store={store}>
  // </Provider>,
  document.getElementById('root')
);
