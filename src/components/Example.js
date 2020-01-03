import React from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer'
import { BlobProvider } from '@react-pdf/renderer';

import ReactPDF, {
  Document,
  View,
  Page,
  Text,
  Image,
  StyleSheet,
  Font,
} from '@react-pdf/renderer';

const Quixote = (props) => (
  <Document>
    <Page style={styles.body}>
      <Text style={styles.header} fixed>
        ~ My Photoalbum ~
      </Text>
      <Text style={styles.title}>Don Quijote de la Mancha</Text>
      <Text style={styles.author}>Miguel de Cervantes</Text>
      <View style={styles.view}>
        {props.data.map((item) => {
          return (
            <View style={styles.viewsub}>
              <Image style={styles.image} src={`${process.env.PUBLIC_URL}/${item.img_name}`} alt='' />
              <Text style={styles.subtitle} >{item.img_comment_1}</Text>
            </View>
          )
        })}
      </View>
      <Text style={styles.subtitle}>
        Capítulo I: Que trata de la condición y ejercicio del famoso hidalgo D.
        Quijote de la Mancha
      </Text>
      <Text style={styles.text}>
        En un lugar de la Mancha, de cuyo nombre no quiero acordarme, no ha
      </Text>
      <Text style={styles.text}>
        En resolución, él se enfrascó tanto en su lectura, que se le pasaban las
      </Text>
      <Text style={styles.subtitle} break>
        Capítulo II: Que trata de la primera salida que de su tierra hizo el
        ingenioso Don Quijote
      </Text>
      {/* <Image
        style={styles.image}
        src={`${process.env.PUBLIC_URL}/20191229054340子どもc81e728d9d4c2f636f067f89cc14862c.jpg`}
      /> */}
      <Text style={styles.text}>
        Hechas, pues, estas prevenciones, no quiso aguardar más tiempo a poner
      </Text>
      <Text style={styles.text}>
        Casi todo aquel día caminó sin acontecerle cosa que de contar fuese, de
      </Text>
      <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => (
        `${pageNumber} / ${totalPages}`
      )} fixed />
    </Page>
  </Document >
);

Font.register({
  family: 'Oswald',
  src: 'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf'
});

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    fontFamily: 'Oswald'
  },
  author: {
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 40,
  },
  view: {
    width: 500,
    // height: 500,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  viewsub: {
    width: 250,
    height: 250,
  },
  subtitle: {
    fontSize: 18,
    margin: 12,
    fontFamily: 'Oswald'
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: 'justify',
    fontFamily: 'Times-Roman'
  },
  image: {
    marginVertical: 15,
    marginHorizontal: 10,
  },
  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: 'center',
    color: 'grey',
  },
  pageNumber: {
    position: 'absolute',
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: 'center',
    color: 'grey',
  },
});

const Render = (props) => (
  <div>
    {/* <PDFDownloadLink document={<Quixote />} fileName="somename.pdf">
      {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now!')}
    </PDFDownloadLink> */}
    <div>
      <BlobProvider document={<Quixote data={props.data} />}>
        {({ blob, url, loading, error }) => {
          if (loading) {
            return "generating document...";
          }
          if (!loading && url) {
            return (
              <a href={url} download>
                - Download (PDF) -
                      </a>
            );
          }
          if (error) {
            return error;
          }
          return <div>The PDF is rendering...</div>;
        }}
      </BlobProvider>
    </div>
  </div>
)

export default Render;