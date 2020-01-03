import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Header from './Header';
import Footer from '../containers/Footer';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import { Document, Page, Text, View, Image, StyleSheet, BlobProvider } from '@react-pdf/renderer';
// import ReactPDF from '@react-pdf/renderer';
// import { PDFDownloadLink } from '@react-pdf/renderer'
// import { pdf } from '@react-pdf/renderer';
import { Link } from 'react-router-dom';

import { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import Image from 'react-image-resizer';
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";

import 'date-fns';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import moment from 'moment';
import 'moment-timezone';

function MaterialUIPickersFrom(props) {
  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const handleDateChange = date => {
    setSelectedDate(date);
    const dateFrom = moment(date).format('YYYY-MM-DD');
    props.props.onPeriodFrom(dateFrom);
  };
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="space-around">
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id="date-picker-inline-from"
          label="Photo From"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
      </Grid>
    </MuiPickersUtilsProvider>
  );
}

function MaterialUIPickersTo(props) {
  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const handleDateChange = date => {
    setSelectedDate(date);
    const dateTo = moment(date).format('YYYY-MM-DD');
    props.props.onPeriodTo(dateTo);
  };
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="space-around">
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id="date-picker-inline-to"
          label="Photo To"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
      </Grid>
    </MuiPickersUtilsProvider>
  );
}


const theme = createMuiTheme();
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
  titleBar: {
    background:
      'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
      'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  icon: {
    color: 'white',
  },
}));

const styles = StyleSheet.create({
  body: {
    // flexDirection: 'row',
    paddingTop: 35,
    paddingBottom: 65,
    // paddingHorizontal: 35,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    // fontFamily: 'Oswald'
  },
  author: {
    fontSize: 12,
    textAlign: 'center',
    // marginBottom: 40,
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
    // maxWidth: 500,
    // maxHeight: 500,
    // marginVertical: 30,
    // marginHorizontal: 100,
    height: 150,
    marginBottom: 30,
    marginHorizontal: 100,
  },
  emphasis: {
    margin: 12,
    fontSize: 24,
    color: '#F22300',
    // fontFamily: 'Oswald'
  },
  paper: {
    width: '50%',
    height: 500,
    margin: '0 auto',
    minWidth: 300,
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing(2)}px ${theme.spacing(3)}px ${theme.spacing(3)}px`,
  },
  gridList: {
    // width: 500,
    height: 200,
    transform: 'translateZ(0)',
  },


});

// Font.register({
//   family: 'Oswald',
//   src: 'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf'
// });

// const Example = () => (
const Example = (props) => {

  // useEffect(() => {
  //   props.props.onMount();
  // }, []);
  // const { image } = props.props;
  // if (image.image.length >= 1) {
  return (
    <Document>
      <Page size="A4" style={styles.body} wrap>
        <Text style={styles.title}>PhotoAlbum</Text>
        <Text style={styles.author}>2020.01.01</Text>
        {/* </Page>
        <Page size="A4" style={styles.body} wrap> */}
        {/* < Text style={styles.subtitle} break>{image.image.length}</Text> */}
        < Text style={styles.subtitle} break>
          Happy New Year!
          </Text>
        <Image style={styles.image} src={`${process.env.PUBLIC_URL}/20191229054340子どもc81e728d9d4c2f636f067f89cc14862c.jpg`} />
        {/* <Image style={styles.image} safePath={`20191229054340子どもc81e728d9d4c2f636f067f89cc14862c.jpg`} /> */}
        {/* {image.image.map((item) => {
            return (<Image style={styles.image} src={`${process.env.PUBLIC_URL}/${item.img_name}`} alt='' />);
          })} */}
        <Text style={styles.emphasis}>
          Instead of showing the title here
          </Text>
        {/* </Page>
        <Page size="A4" style={styles.body} wrap> */}
        <Text style={styles.subtitle} break>
          Next Page
          </Text>
        <Text style={styles.emphasis}>
          Images...
          </Text>
        <Text style={styles.text}>
          my memory
          </Text>
      </Page>
    </Document >
    // )
    // } else {
    //   return "a";
    // }
  )
};




// const style = StyleSheet.create({
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

const SelectPhoto = (props) => {
  const [value, setValue] = React.useState('');
  const [cover, setCover] = useState(false);
  const [state, setState] = useState(false);
  const [coverId, setCoverId] = useState('');

  const handleShowCover = event => {
    event.preventDefault();
    setCover(!cover);
  };

  const handleSelectCover = value => () => {
    setCover(!cover);
    setState(true);
    setCoverId(value);
    props.props.onSelectCover(value);
  }

  const handleChangeTitle = event => {
    event.preventDefault();
    props.props.onTitle(event.target.value);
  };

  const handleChangePeriod = event => {
    event.preventDefault();
    setValue(event.target.value);
    props.props.onPeriod(event.target.value);
  };

  return (
    <div>
      <div>
        <Button variant="contained" color="primary" onClick={handleShowCover}>
          表紙の選択
        </Button>
        <div>{cover &&
          <GridList cellHeight={100} spacing={1} className={props.props.classes.gridList} cols={4}>
            {props.props.image.image.map((item) => (
              <GridListTile
                onClick={handleSelectCover(item.id)}
              >
                <img src={`${process.env.PUBLIC_URL}/${item.img_name}`} alt='' />
              </GridListTile>
            ))}
          </GridList>
        }</div>
        <div>{state &&
          <img src={`${process.env.PUBLIC_URL}/${props.props.image.image.coverId}`} alt='' />
        }</div>
      </div>
      <div>Album Title
        <TextField
          id="standard-basic"
          label=""
          name="title"
          onChange={handleChangeTitle}
        />
      </div>
      <FormControl component="fieldset">
        <FormLabel component="legend">Period</FormLabel>
        <RadioGroup aria-label="position" name="position" value={value} onChange={handleChangePeriod} row>
          <FormControlLabel
            value="period_all"
            control={<Radio color="primary" />}
            label="All Photo"
            labelPlacement="bottom"
          />
          <FormControlLabel
            value="period_select"
            control={<Radio color="primary" />}
            label="Select Period"
            labelPlacement="bottom"
          />
          {props.props.album.period_all === 'period_select' && <div><MaterialUIPickersFrom props={props.props} /> <MaterialUIPickersTo props={props.props} /></div>}
        </RadioGroup>
      </FormControl>
      <div>
        <Button variant="contained" color="primary" to={'/albumcopy'} component={Link}>
          Preview
        </Button>
      </div>
    </div>
  )
}


class Album extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img_name: '',
      image_src: '',
      showFlag: false,
    }
    this.props.onMount();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNewAlbum = this.handleNewAlbum.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const hrefPDF = document.getElementById('aaa').getElementsByTagName('a')[0].getAttribute('href');
    console.log(hrefPDF);
  }

  handleNewAlbum(e) {
    e.preventDefault();
    this.setState({ showFlag: !this.state.showFlag })
  }

  render() {
    const { classes, me, image } = this.props;
    if (image.image.length >= 1) {
      return (
        <React.Fragment>
          <Header />

          <main className={classes.layout}>
            <Paper className={classes.paper} elevation={1}>
              <Button variant="contained" color="primary" onClick={this.handleNewAlbum} >
                New
              </Button>
              <div>{this.state.showFlag ? <SelectPhoto props={this.props} /> : ''}</div>
              <div id="aaa">
                <BlobProvider document={<Example props={this.props} />}>
                  {/* <BlobProvider document={<Example />}> */}
                  {({ blob, url, loading, error }) => {
                    if (loading) {
                      return "generating document...";
                    }
                    // if (blob) {
                    // }
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
                {/* <Button variant="contained" color="primary" onClick={this.handleSubmit} >
                  PDF送信
              </Button> */}

              </div>
            </Paper>
          </main>
          <Footer />
        </React.Fragment >
      );
    } else {
      return (
        <React.Fragment >
          <Header />
          <Footer />
        </React.Fragment >
      )
    }
  }
}

export default withStyles(styles)(Album);
