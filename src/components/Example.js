import React, { useState, useEffect } from 'react';
import { Document, Page, Text, View, Image, StyleSheet } from '@react-pdf/renderer';
import { makeStyles } from '@material-ui/core/styles';
import Header from './Header';
import Footer from '../containers/Footer';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Button from '@material-ui/core/Button';
// import Image from 'react-image-resizer';
import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import Pagination from "material-ui-flat-pagination";

// const theme = createMuiTheme();
// const useStyles = makeStyles(theme => ({
//   root: {
//     display: 'flex',
//     flexWrap: 'wrap',
//     justifyContent: 'space-around',
//     overflow: 'hidden',
//     backgroundColor: theme.palette.background.paper,
//   },
//   paper: {
//     width: '80%',
//     margin: '0 auto',
//     minWidth: 300,
//     marginTop: theme.spacing(8),
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     padding: `${theme.spacing(2)}px ${theme.spacing(3)}px ${theme.spacing(3)}px`,
//   },
//   gridList: {
//     width: 500,
//     height: 600,
//     transform: 'translateZ(0)',
//   },
//   titleBar: {
//     background:
//       'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
//       'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
//   },
//   icon: {
//     color: 'white',
//   },
// }));

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    // fontFamily: 'Oswald'
  },
  author: {
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 40,
  },
  subtitle: {
    fontSize: 18,
    margin: 12,
    // fontFamily: 'Oswald'
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: 'justify',
    // fontFamily: 'Times-Roman'
  },
  image: {
    marginVertical: 30,
    marginHorizontal: 100,
  },
  emphasis: {
    margin: 12,
    fontSize: 24,
    color: '#F22300',
    // fontFamily: 'Oswald'
  }
});

// Font.register({
//   family: 'Oswald',
//   src: 'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf'
// });

const Example = () => {
  // const classes = useStyles();
  // const [offset, setOffset] = useState(0);
  // useEffect(() => {
  //   props.onMount();
  // }, []);

  // const { me, image } = props;

  return (
    <Document>
      <Page size="A4" style={styles.body} wrap>
        <Text style={styles.title}>Don Quijote de la Mancha</Text>
        <Text style={styles.author}>Miguel de Cervantes</Text>
        {/* <Image
        style={styles.image}
        src="/static/images/quijote1.jpg"
      /> */}
        <Text style={styles.subtitle}>
          Capítulo I: Que trata de la condición y ejercicio del famoso hidalgo D.
          Quijote de la Mancha
      </Text>
        <Text style={styles.text}>
          En un lugar de la Mancha,
      </Text>
        <Text style={styles.emphasis}>Instead of showing the title here</Text>
      </Page>
      <Page size="A4" style={styles.body} wrap>
        <Text style={styles.subtitle}>
          Capítulo II: Que trata de la primera salida que de su tierra hizo el
          ingenioso Don Quijote
      </Text>
        {/* <Text style={[styles.emphasis, { position: 'absolute', top: 60, right: 30 }]}> */}
        <Text style={styles.emphasis}>
          It breaks to the top of the next page
      </Text>
        {/* <Image
        style={styles.image}
        src="/static/images/quijote2.png"
      /> */}
        <Text style={styles.text}>
          Hechas, pues, estas prevenciones,
      </Text>
      </Page>
    </Document>
  )
};

export { Example };