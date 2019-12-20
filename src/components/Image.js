import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Header from './Header';
import Footer from './Footer';

import Button from '@material-ui/core/Button';
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
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing(2)}px ${theme.spacing(3)}px ${theme.spacing(3)}px`,
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


class UploadImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img_name: '',
      image_src: [],
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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


  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Header />
        <Paper className={classes.paper} elevation={1}>
          <Typography variant="headline" component="h3">
            <div className={classes.root}>
              <img src='' alt='' />
              <form className={classes.root} noValidate autoComplete="off">
                <TextField id="standard-basic" label="Standard" name="img_comment_1" onChange={this.handleChange} />
              </form>
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
          </Typography>
          <Typography component="p">
          </Typography>
        </Paper>
        <Footer />
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(UploadImage);
