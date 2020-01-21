import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Header from './Header';
import Footer from '../containers/Footer';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

const styles = theme => ({
  // root: {
  //   ...theme.mixins.gutters(),
  //   paddingTop: theme.spacing.unit * 2,
  //   paddingBottom: theme.spacing.unit * 2,
  // },
  root: {
    // display: 'flex',
    // flexWrap: 'wrap',
    // justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },

  paper: {
    width: '80%',
    height: 600,
    margin: '0 auto',
    minWidth: 300,
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing(2)}px ${theme.spacing(3)}px ${theme.spacing(2)}px`,
  },
  button: {
    width: 200,
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
  gridList: {
    width: 350,
    height: 500,
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },

});

let createObjectURL = (window.URL || window.webkitURL).createObjectURL || window.createObjectURL;

class UploadImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img_name: '',
      image_src: [],
      showFlag: false,
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.uploadFile = this.uploadFile.bind(this);
  }

  componentWillMount() {
    this.props.onMount();
  }

  // handleChange(e) {
  //   const { name, value } = e.target;
  //   this.setState({ [name]: value });
  // }

  handleSubmit(e) {
    e.preventDefault();
    const { img_name } = this.state;
    this.props.onUpload(img_name);
    // if (email && password) {
    // this.props.onUpload(img_name, img_comment_1);
    // }
  }

  uploadFile(e) {
    this.setState({ img_name: e.target.files });
    let image_url = [];
    for (let i = 0; i < e.target.files.length; i++) {
      image_url.push(createObjectURL(e.target.files[i]));
    }
    this.setState({ image_src: image_url });
    this.setState({ showFlag: true })
  };

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Header />
        <div className={classes.root}>
          <Paper className={classes.paper} elevation={1}>
            <input
              accept="image/*"
              className={classes.input}
              id="contained-button-file"
              multiple
              type="file"
              name="img_name"
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
                写真を選ぶ
                </Button>
            </label>
            <GridList cellHeight={175} spacing={1} className={classes.gridList}>
              {this.state.image_src.map((image) => (
                <GridListTile>
                  <img src={image} alt='' />
                </GridListTile>
              ))}
            </GridList>
            {this.state.showFlag
              && <Button
                variant="contained"
                color="primary"
                type="submit"
                fullWidth
                className={classes.button}
                onClick={this.handleSubmit}>
                Save
              </Button>
            }
          </Paper>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(UploadImage);
