import React from 'react';
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
      <Text style={styles.title}>{props.data.title}</Text>
      <Image style={styles.image} src={`${process.env.PUBLIC_URL}/${props.data.cover_photo}`} alt='' />
      <Text style={styles.author}>Ayano</Text>
      <View style={styles.view} break>
        {(props.data.period_all === 'period_all') || (props.data.period_all === undefined) ?
          props.data.images.map((item) => {
            return (
              <View style={styles.viewsub} wrap={false}>
                <Image style={styles.image} src={`${process.env.PUBLIC_URL}/${item.img_name}`} alt='' />
                <Text style={styles.text} >{item.img_comment_1}</Text>
                <Text style={styles.text} >{item.img_comment_2}</Text>
              </View>
            )
          }) :
          props.data.images.filter((i) => i.taken >= props.data.period_from && i.taken <= props.data.period_to).map((item) => {
            return (
              <View style={styles.viewsub} wrap={false}>
                <Image style={styles.image} src={`${process.env.PUBLIC_URL}/${item.img_name}`} alt='' />
                <Text style={styles.text} >{item.img_comment_1}</Text>
                <Text style={styles.text} >{item.img_comment_2}</Text>
              </View>
            )
          })
        }
      </View>

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
    // height: 250,
  },
  subtitle: {
    fontSize: 18,
    margin: 12,
    fontFamily: 'Oswald'
  },
  text: {
    margin: 5,
    fontSize: 14,
    textAlign: 'justify',
    fontFamily: 'Times-Roman'
  },
  image: {
    marginVertical: 5,
    marginHorizontal: 10,
  },
  header: {
    fontSize: 12,
    marginBottom: 10,
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
    <div>
      <BlobProvider document={<Quixote data={props.data.album} />}>
        {({ blob, url, loading, error }) => {
          if (blob) {
            let file = new File([blob], "my_image.pdf", { type: "application/pdf", lastModified: new Date() })
            // console.log(props.data.album.title);
            props.data.onSendPdf(file, props.data.album.title, props.data.album.cover_photo)
          }
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