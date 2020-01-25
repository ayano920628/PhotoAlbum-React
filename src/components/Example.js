import React from 'react';
import { BlobProvider } from '@react-pdf/renderer';
import font from '../fonts/NotoSansJP-Regular.otf'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {
  Document,
  View,
  Page,
  Text,
  Image,
  StyleSheet,
  Font,
} from '@react-pdf/renderer';


const imgurl = `${process.env.PUBLIC_URL}`
// const imgurl = 'http://www.photoalbum.com.s3-website-ap-northeast-1.amazonaws.com/upload';
const voiceurl = `${process.env.PUBLIC_URL}`
// const voiceurl = 'http://www.photoalbum.com.s3-website-ap-northeast-1.amazonaws.com/uploadvoice';

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      padding: theme.spacing(0),
      justifyContent: 'center',
    }
  },
}));

const Quixote = (props) => {
  return (
    <Document>
      <Page style={styles.body}>
        <Text style={styles.header} fixed>
          ~ My Memory ~
          </Text>
        <Text style={styles.title}>{props.data.album.album.title}</Text>
        <Image style={styles.coverimage} src={`${imgurl}/${props.data.album.album.cover_photo}`} alt='' />
        <Image style={styles.qrcode} src={`https://api.qrserver.com/v1/create-qr-code/?data=${voiceurl}/${props.data.album.album.voice.voice_name}&size=100x100`} alt="" title="" />
        {/* <Text style={styles.author}>Ayano</Text> */}
        <View style={styles.view} break>
          {(props.data.album.album.period_all === 'period_all') || (props.data.album.album.period_all === undefined) ?
            props.data.image.image.map((item) => {
              return (
                <View style={styles.viewsub} wrap={false}>
                  <Image style={styles.image} src={`${imgurl}/${item.img_name}`} alt='' />
                  <Text style={styles.text} >{item.img_comment_1}</Text>
                  <Text style={styles.text} >{item.img_comment_2}</Text>
                </View>
              )
            }) :
            props.data.image.image.filter((i) => i.taken >= props.data.album.album.period_from && i.taken <= props.data.album.album.period_to).map((item) => {
              return (
                <View style={styles.viewsub} wrap={false}>
                  <Image style={styles.image} src={`${imgurl}/${item.img_name}`} alt='' />
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
  )
};

Font.register({
  family: 'font',
  // src: 'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf'
  src: font

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
    fontFamily: 'font'
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
    // flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  viewsub: {
    // width: 250,
    height: 350,
  },
  subtitle: {
    fontSize: 18,
    margin: 12,
    fontFamily: 'font'
  },
  text: {
    margin: 5,
    fontSize: 14,
    textAlign: 'center',
    fontFamily: 'font',
    position: 'absolute',
    bottom: 10,
    color: 'white',
    backgroundColor: '#80d8ff',
    fontWeight: '700',
  },
  coverimage: {
    marginVertical: 5,
    marginHorizontal: 10,
    objectFit: 'contain',
    // maxWidth: 500,
    maxHeight: 500,
  },
  image: {
    marginVertical: 5,
    // marginHorizontal: 10,
    objectFit: 'contain',
  },
  qrcode: {
    width: 100,
    height: 100,
    // marginVertical: 5,
    // marginHorizontal: 10,
    position: 'absolute',
    bottom: 50,
    right: 30,
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
const pref = [
  { value: 1, label: '北海道', },
  { value: 2, label: '青森県', },
  { value: 3, label: '岩手県', },
  { value: 4, label: '宮城県', },
  { value: 5, label: '秋田県', },
  { value: 6, label: '山形県', },
  { value: 7, label: '福島県', },
  { value: 8, label: '茨城県', },
  { value: 9, label: '栃木県', },
  { value: 10, label: '群馬県', },
  { value: 11, label: '埼玉県', },
  { value: 12, label: '千葉県', },
  { value: 13, label: '東京都', },
  { value: 14, label: '神奈川県', },
  { value: 15, label: '新潟県', },
  { value: 16, label: '富山県', },
  { value: 17, label: '石川県', },
  { value: 18, label: '福井県', },
  { value: 19, label: '山梨県', },
  { value: 20, label: '長野県', },
  { value: 21, label: '岐阜県', },
  { value: 22, label: '静岡県', },
  { value: 23, label: '愛知県', },
  { value: 24, label: '三重県', },
  { value: 25, label: '滋賀県', },
  { value: 26, label: '京都府', },
  { value: 27, label: '大阪府', },
  { value: 28, label: '兵庫県', },
  { value: 29, label: '奈良県', },
  { value: 30, label: '和歌山県', },
  { value: 31, label: '鳥取県', },
  { value: 32, label: '島根県', },
  { value: 33, label: '岡山県', },
  { value: 34, label: '広島県', },
  { value: 35, label: '山口県', },
  { value: 36, label: '徳島県', },
  { value: 37, label: '香川県', },
  { value: 38, label: '愛媛県', },
  { value: 39, label: '高知県', },
  { value: 40, label: '福岡県', },
  { value: 41, label: '佐賀県', },
  { value: 42, label: '長崎県', },
  { value: 43, label: '熊本県', },
  { value: 44, label: '大分県', },
  { value: 45, label: '宮崎県', },
  { value: 46, label: '鹿児島県', },
  { value: 47, label: '沖縄県', },
];

const Order = (props) => {
  const classes = useStyles();

  const handleChangeZip1 = event => {
    props.data.onSetZip1(event.target.value)
  };
  const handleChangeZip2 = event => {
    props.data.onSetZip2(event.target.value)
  };
  const handleChangePref = event => {
    props.data.onSetPref(event.target.value)
  };
  const handleChangeAddr1 = event => {
    props.data.onSetAddr1(event.target.value)
  };
  const handleChangeAddr2 = event => {
    props.data.onSetAddr2(event.target.value)
  };
  const handleChangeTel = event => {
    props.data.onSetTel(event.target.value)
  };
  const handleChangeName = event => {
    props.data.onSetName(event.target.value)
  };
  const handleChangeEmail = event => {
    props.data.onSetEmail(event.target.value)
  };


  return (
    <form className={classes.root} noValidate autoComplete="off">
      <Typography style={{ width: 55, display: 'inline-block' }}>
        〒
        </Typography>
          <TextField required style={{ width: 60}} id="standard-required" label="XXX" defaultValue="" onChange={handleChangeZip1} />
          <TextField disabled style={{ width: 10}} id="standard-required" label="" defaultValue="" />
        <TextField required style={{ width: 80 }} id="standard-required" label="XXXX" defaultValue="" onChange={handleChangeZip2} />
        <br/>
      <Typography style={{ width: 55, display: 'inline-block' }}>
        Address
      </Typography>
          <TextField
          id="standard-select-currency"
          select
          label="Select"
          style={{ width: 210}}
          onChange={handleChangePref}
          helperText="Prefecture"
          required
        >
          {pref.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
          </ TextField>
        <Typography style={{ width: 55, display: 'inline-block' }}></Typography>
        <TextField style={{ width: 220}} id="outlined-basic" label="Address1" variant="outlined" onChange={handleChangeAddr1} required />
        <Typography style={{ width: 55, display: 'inline-block' }}></Typography>
        <TextField style={{ width: 220}} id="outlined-basic" label="Address2" variant="outlined" onChange={handleChangeAddr2} required />
        <br/>
      <Typography style={{ width: 55, display: 'inline-block' }}>
        Tel
      </Typography>
          <TextField style={{ width: 220}} id="outlined-basic" label="☎︎" variant="outlined" onChange={handleChangeTel} required />
      <br/>
      <Typography style={{ width: 55, display: 'inline-block' }}>
        Name
      </Typography>
          <TextField style={{ width: 220}} id="outlined-basic" label="Ayano Omori" variant="outlined" onChange={handleChangeName} required />
      <br/>
      <Typography style={{ width: 55, display: 'inline-block' }}>
        E-Mail
      </Typography>
          <TextField style={{ width: 220}} id="outlined-basic" label="mymemory@sample.com" variant="outlined" onChange={handleChangeEmail} required />
    </form>
  )
}


const Render = (props) => {
  const handleSubmit = file => () => {
    // e.preventDefault();
    // console.log(file);
    props.data.onSendPdf(file, props.data.album.album.title, props.data.album.album.cover_photo)
    props.data.onOrder(props.data.albumorder)
  }
  return (
    // <div>
    //   <Order data={props.data} />
    //   <Button variant="contained" color="primary" onClick={handleSubmit}>ORDER</Button>
    // </div>
    <BlobProvider document={<Quixote data={props.data} />}>
      {({ blob, url, loading, error }) => {
        if (blob) {
          let file = new File([blob], "my_image.pdf", { type: "application/pdf", lastModified: new Date() })
          return (
            <div>
              <Order data={props.data} />
              <Button variant="contained" color="primary" onClick={handleSubmit}>ORDER</Button>
            </div>
          );
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
  );
}

export default Render;