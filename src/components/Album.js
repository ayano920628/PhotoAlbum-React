import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Header from './Header';
import Footer from './Footer';
import Albumcopy from './Albumcopy';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Button from '@material-ui/core/Button';
import { Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import ReactPDF from '@react-pdf/renderer';
import { PDFDownloadLink, Document } from '@react-pdf/renderer'
import { pdf, BlobProvider } from '@react-pdf/renderer';
// const styles = StyleSheet.create({
//   page: {
//     flexDirection: 'row',
//     backgroundColor: '#E4E4E4'
//   },
//   section: {
//     margin: 10,
//     padding: 10,
//     flexGrow: 1
//   }
// });

// const MyDoc = () => (
//   <Document>
//     <Page size="A4" style={styles.page}>
//       <View style={styles.section}>
//         <Text>Section #1</Text>
//       </View>
//       <View style={styles.section}>
//         <Text>Section #2</Text>
//       </View>
//     </Page>
//   </Document>
// );
// const blob = pdf(MyDoc).toBlob();

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  layout: {
    width: 'auto',
    display: 'block',
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    [theme.breakpoints.up(400 + theme.spacing(3 * 2))]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
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
    this.props.onMount();
  }

  render() {
    const { classes, me, image } = this.props;
    if (image.image.length >= 1) {
      return (
        <React.Fragment>
          <Header />
          <main className={classes.layout}>
            <Button variant="contained" color="primary" >
              アルバムpreview
            </Button>
            <div className={classes.root}>
              <GridList cellHeight={200} spacing={1} className={classes.gridList}>
                {image.image.map((item) => (
                  <GridListTile>
                    <img src={`${process.env.PUBLIC_URL}/${item.img_name}`} alt='' />
                  </GridListTile>
                ))}
              </GridList>
            </div>
            <div>
              {/* <PDFDownloadLink document={<MyDoc />} fileName="somename.pdf">
              {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now!')}
            </PDFDownloadLink> */}
              {/* <BlobProvider document={MyDoc}>
              {({ blob, url, loading, error }) => {
                return <div>There's something going on on the fly</div>
              }}
            </BlobProvider> */}
            </div>
          </main>
          <Footer />
          <Button color="inherit" onClick={this.props.onDelete}>logout</Button>
        </React.Fragment >
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
