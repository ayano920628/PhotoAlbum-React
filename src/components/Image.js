import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Header from './Header';
import Footer from './Footer';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import DeleteIcon from '@material-ui/icons/Delete';
// import SvgIcon from '@material-ui/core/SvgIcon';


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
      img_comment_1: '',
      img_comment_2: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  componentWillMount() {
    this.props.onMount();
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    if (id) this.props.onGetImage(id);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.props.onChange(value);
  }

  handleDelete() {
    const { id } = this.props.match.params;
    this.props.onDeleteImage(id);
  }

  handleUpdate(e) {
    e.preventDefault();
    const { id } = this.props.match.params;
    const { img_comment_1, img_comment_2 } = this.props.image.image;
    this.props.onUpdateImage(id, img_comment_1, img_comment_2);
  }

  render() {
    const { classes, image } = this.props;
    console.log(this.props);
    return (
      <React.Fragment>
        <Header />
        <Paper className={classes.paper} elevation={1}>
          <Typography variant="headline" component="h3">
            <div className={classes.root}>
              <img src={`${process.env.PUBLIC_URL}/${image.image.img_name}`} alt='' />
              <form className={classes.root} noValidate autoComplete="off">
                <TextField
                  id="standard-basic"
                  label=""
                  name="img_comment_1"
                  value={this.props.image.image.img_comment_1}
                  // value={image.image.img_comment_1}
                  onChange={this.handleChange}
                />
              </form>
              <Button
                variant="contained"
                // variant="raised"
                color="primary"
                type="submit"
                fullWidth
                className={classes.submit}
                onClick={this.handleUpdate}>
                Save
              </Button>
              <Button onClick={this.handleDelete}><DeleteIcon /></Button>

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
