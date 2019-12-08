import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import {
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom'
import axios from 'axios';

export default class UploadImage extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { name: '', password: '' };
  //   this.handleChange = this.handleChange.bind(this);
  //   this.handleSubmit = this.handleSubmit.bind(this);
  // }

  render() {
    return (
      <React.Fragment>
        <form method="post" encType="multipart/form-data">
          <label>
            Image: <input type="file" multiple name="upload_file[]" />
          </label>
          <label>
            Comment: <input type="text" name="comment" />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <div>
        </div>
      </React.Fragment>
    )
  }
}
