import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Header from './Header';
import { CommunicationPortableWifiOff } from 'material-ui/svg-icons';

import Button from '@material-ui/core/Button';
// import { makeStyles } from '@material-ui/core/styles';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  // root: {
  //   ...theme.mixins.gutters(),
  //   paddingTop: theme.spacing.unit * 2,
  //   paddingBottom: theme.spacing.unit * 2,
  // },
  paper: {
    width: '50%',
    margin: '0 auto',
    minWidth: 300,
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  button: {
    margin: theme.spacing(1),
  },
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
  input: {
    display: 'none',
  },
});

// const useStyles = makeStyles(theme => ({
//   button: {
//     margin: theme.spacing(1),
//   },
// }));

let createObjectURL = (window.URL || window.webkitURL).createObjectURL || window.createObjectURL;


class UploadImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img_name: '',
      image_src: [],
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.uploadFile = this.uploadFile.bind(this);
  }

  componentWillMount() {
    this.props.onMount();
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { img_name } = this.state;
    this.props.onUpload(img_name);
    // if (email && password) {
    // this.props.onUpload(img_name, img_comment_1);
    // }
  }

  uploadFile(e) {
    // this.setState({ img_name: e.target.files[0] });
    this.setState({ img_name: e.target.files });
    let image_url = [];
    for (let i = 0; i < e.target.files.length; i++) {
      image_url.push(createObjectURL(e.target.files[i]));
    }
    this.setState({ image_src: image_url });
  };

  render() {
    //   const classes = useStyles();
    const { classes } = this.props;
    return (
      <div>
        <Header menu="ログアウト" onClick={this.props.onDelete} />
        <Paper className={classes.paper} elevation={1}>
          <Typography variant="headline" component="h3">
            <div className={classes.root}>
              <input
                accept="image/*"
                className={classes.input}
                id="contained-button-file"
                multiple
                type="file"
                name="img_name"
                // onChange={this.uploadFile}
                onChange={this.uploadFile}
              />
              <label htmlFor="contained-button-file">
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.button}
                  startIcon={<CloudUploadIcon />}
                  component="span"
                >
                  Upload
                </Button>
              </label>
              {/* <form className={classes.root} noValidate autoComplete="off">
                <TextField id="standard-basic" label="Standard" name="img_comment_1" onChange={this.handleChange} />
              </form>
              <input accept="image/*" className={classes.input} id="icon-button-file" type="file" />
              <label htmlFor="icon-button-file">
                <IconButton color="primary" aria-label="upload picture" component="span">
                  <PhotoCamera />
                </IconButton>
              </label> */}

              <Button
                variant="contained"
                // variant="raised"
                color="primary"
                type="submit"
                fullWidth
                className={classes.submit}
                onClick={this.handleSubmit}>
                Save
              </Button>
            </div>
            {this.state.image_src.map((image) => <img src={image} alt='' />)}

          </Typography>
          <Typography component="p">
          </Typography>
        </Paper>
      </div >
    );
  }
}

export default withStyles(styles)(UploadImage);
