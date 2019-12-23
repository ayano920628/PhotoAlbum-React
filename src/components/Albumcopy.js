import React, { useState, useEffect } from 'react';
// import { withStyles } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import Header from './Header';
import Footer from './Footer';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
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
}));


// class Albumcopy extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       img_name: '',
//       image_src: '',
//     }
//     this.props.onMount();
//   }

//   render() {
//     const { classes, me, image } = this.props;
//     if (image.image.length >= 1) {
//       return (
//         <div>
//           <Header />
//           <div className={classes.root}>
//             <GridList cellHeight={200} spacing={1} className={classes.gridList}>
//               {image.image.map((item) => (
//                 <GridListTile>
//                   <img src={`${process.env.PUBLIC_URL}/${item.img_name}`} alt='' />
//                 </GridListTile>
//               ))}
//             </GridList>
//           </div>
//           <Footer />
//           <Button color="inherit" onClick={this.props.onDelete}>logout</Button>
//         </div>
//       );
//     } else {
//       return (
//         <div >
//           <Header />
//           <Footer />
//           <Button color="inherit" onClick={this.props.onDelete}>logout</Button>
//         </div >
//       )
//     }
//   }
// }

function Albumcopy() {
  const [value, setValue] = useState(0);
  const classes = useStyles();
  useEffect(() => {
    this.props.onMount();
  }, []);

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     img_name: '',
  //     image_src: '',
  //   }
  //   this.props.onMount();
  // }

  // render() {
  const { me, image } = this.props;
  if (image.image.length >= 1) {
    return (
      <div>
        <Header />
        <div className={classes.root}>
          <GridList cellHeight={200} spacing={1} className={classes.gridList}>
            {image.image.map((item) => (
              <GridListTile>
                <img src={`${process.env.PUBLIC_URL}/${item.img_name}`} alt='' />
              </GridListTile>
            ))}
          </GridList>
        </div>
        <Footer />
        <Button color="inherit" onClick={this.props.onDelete}>logout</Button>
      </div>
    );
  } else {
    return (
      <div >
        <Header />
        <Footer />
        <Button color="inherit" onClick={this.props.onDelete}>logout</Button>
      </div >
    )
  }
  // }
}

export default Albumcopy;
