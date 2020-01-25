import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Header from './Header';
import Footer from '../containers/Footer';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import DeleteIcon from '@material-ui/icons/Delete';
// import SvgIcon from '@material-ui/core/SvgIcon';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Image from 'react-image-resizer';

const imgurl = `${process.env.PUBLIC_URL}`
// const imgurl = 'http://www.photoalbum.com.s3-website-ap-northeast-1.amazonaws.com/upload';

const styles = theme => ({
  // root: {
  //   ...theme.mixins.gutters(),
  //   paddingTop: theme.spacing.unit * 2,
  //   paddingBottom: theme.spacing.unit * 2,
  // },
  paper: {
    width: '80%',
    height: 595,
    margin: '0 auto',
    minWidth: 300,
    marginTop: theme.spacing(1),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing(2)}px ${theme.spacing(3)}px ${theme.spacing(3)}px`,
  },
  button: {
    margin: theme.spacing(1),
  },
  // root: {
  //   '& > *': {
  //     margin: theme.spacing(1),
  //     width: 200,
  //   },
  // },
  input: {
    display: 'none',
  },
  inline: {
    display: 'inline',
  },
});

class UploadImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img_comment_1: '',
      img_comment_2: '',
    }
    this.handleChange_1 = this.handleChange_1.bind(this);
    this.handleChange_2 = this.handleChange_2.bind(this);
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

  handleChange_1(e) {
    const { name, value } = e.target;
    this.props.onChange_1(value);
  }

  handleChange_2(e) {
    const { name, value } = e.target;
    this.props.onChange_2(value);
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
    const { classes, image, me } = this.props;
    return (
      <React.Fragment>
        <Header />
        <Paper className={classes.paper} elevation={1}>
          {/* <div className={classes.root}> */}
          {/* <img src={`${process.env.PUBLIC_URL}/${image.image.img_name}`} alt='' /> */}
          <Image
            src={`${imgurl}/${image.image.img_name}`}
            alt=''
            width={300}
            height={300} />
          <div>
            <List className={classes.root}>
              {me.user.user_type === 1 ?
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar
                      alt=""
                      src=""
                      children={me.user.name}
                    ></Avatar>
                  </ListItemAvatar>
                  <form className={classes.root} noValidate autoComplete="off">
                    <TextField
                      id="standard-basic"
                      label=""
                      name="img_comment_1"
                      value={this.props.image.image.img_comment_1}
                      onChange={this.handleChange_1}
                    />
                  </form>
                </ListItem> :
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar
                      alt=""
                      src=""
                      children=''
                    ></Avatar>
                  </ListItemAvatar>
                  <ListItemText primary={this.props.image.image.img_comment_1} />
                </ListItem>}
              {/* <Divider variant="inset" component="li" /> */}
              {me.user.user_type === 2 ?
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar
                      alt=""
                      src=""
                      children={me.user.name}
                    ></Avatar>
                  </ListItemAvatar>
                  <form className={classes.root} noValidate autoComplete="off">
                    <TextField
                      id="standard-basic"
                      label=""
                      name="img_comment_2"
                      value={this.props.image.image.img_comment_2}
                      onChange={this.handleChange_2}
                    />
                  </form>
                </ListItem> :
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar
                      alt=""
                      src=""
                      children=''
                    ></Avatar>
                  </ListItemAvatar>
                  <ListItemText primary={this.props.image.image.img_comment_2} />
                </ListItem>}
            </List>
          </div>
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
          <IconButton
            aria-label="delete"
            color="primary"
            onClick={this.handleDelete}
          >
            <DeleteIcon />
          </IconButton>

          {/* </div> */}
        </Paper>
        <Footer />
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(UploadImage);
