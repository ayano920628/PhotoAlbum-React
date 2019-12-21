import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Header from './Header';
import Footer from './Footer';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  // root: {
  //   ...theme.mixins.gutters(),
  //   paddingTop: theme.spacing(2),
  //   paddingBottom: theme.spacing(2),
  // },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  paper: {
    width: '80%',
    margin: '0 auto',
    minWidth: 300,
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing(2)}px ${theme.spacing(3)}px ${theme.spacing(3)}px`,
  },
  gridList: {
    width: 500,
    // width: '80%',
    height: 600,
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  titleBar: {
    background:
      'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
      'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  icon: {
    color: 'white',
  },
});

class Album extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img_name: '',
      image_src: '',
    }
  }

  componentWillMount() {
    this.props.onMount();
  }

  render() {
    const { classes, me, image } = this.props;
    // const tileData = [
    //   {
    //     img: image,
    //     title: 'Image',
    //     author: 'author',
    //     featured: true,
    //   },
    // ];
    if (image.image.length >= 1) {
      return (
        <React.Fragment>

          <Header />
          <div className={classes.root}>
            <GridList cellHeight={200} spacing={1} className={classes.gridList}>
              {image.image.map((item) => (
                // <GridListTile key={tile.img} cols={tile.featured ? 2 : 1} rows={tile.featured ? 2 : 1}>
                <GridListTile
                  to={`/image/${item.id}`}
                  component={Link}
                >
                  <img src={`${process.env.PUBLIC_URL}/${item.img_name}`} alt='' />
                  {/* <GridListTileBar
                    title={tile.title}
                    titlePosition="top"
                    actionIcon={
                      <IconButton aria-label={`star ${tile.title}`} className={classes.icon}>
                        <StarBorderIcon />
                      </IconButton>
                    }
                    actionPosition="left"
                    className={classes.titleBar}
                  /> */}
                </GridListTile>
              ))}
            </GridList>
          </div>
          <Footer />
          <Button color="inherit" onClick={this.props.onDelete}>logout</Button>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment >
          <Header />
          <Footer />
          <Button color="inherit" onClick={this.props.onDelete}>logout</Button>
        </React.Fragment >
      )
    }
  }
}
export default withStyles(styles)(Album);
