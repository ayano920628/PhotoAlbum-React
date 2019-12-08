import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom'
import { Link } from 'react-router-dom'

import LoginForm from './components/signin/login_form.js';
import RegisterForm from './components/signin/register_form.js';
import ActivateForm from './components/signin/activate_form.js';
import UploadImage from './components/image/upload.js';
// import PrivateRoute from './privateroute'

export default class Contents extends Component {
  render() {
    //   // メニューの選択状態
    //   const currentPage = this.state.currentPage; // （1）

    //   //  メイン部分のコンポーネントの入れ物
    //   let Content = null; // デフォルトでは何も表示しない

    //   switch (currentPage) {
    //     case "記事を見る":
    //       // 記事を見るページのコンポーネント
    //       Content = (() => <Article id="001" />);
    //       break;
    //     case "お問い合わせ":
    //       // お問い合わせページのコンポーネント
    //       Content = (() => <Contact />);
    //       break;
    //   }

    //   // return (
    //   //   <div>
    //   //     <Content /> {/* （2） */}
    //   //   </div>
    //   // );
    // }
    return (
      <Router>
        <Link to="/">Login</Link>
        <Link to="/register">Sign Up</Link>
        <Link to="/activate">Activate</Link>
        <Link to="/upload">Upload</Link>
        <Switch>
          <Route exact path='/' component={LoginForm} />
          <Route exact path='/register' component={RegisterForm} />
          <Route exact path='/activate' component={ActivateForm} />
          <Route exact path='/upload' component={UploadImage} />
          {/* <PrivateRoute path="/upload" component={UploadImage} /> */}
          <Route exact component={LoginForm} />
        </Switch>
      </Router>
    );
  }
}