import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Header from './Header';
import Footer from '../containers/Footer';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
import RecordVoiceOverIcon from '@material-ui/icons/RecordVoiceOver';
import { useState } from 'react';
import PhotoIcon from '@material-ui/icons/Photo';
import AddIcon from '@material-ui/icons/Add';
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Image from 'react-image-resizer';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
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
const imgurl = `${process.env.PUBLIC_URL}`
// const imgurl = 'http://www.photoalbum.com.s3-website-ap-northeast-1.amazonaws.com/upload';

function MaterialUIPickersFrom(props) {
  const [selectedDate, setSelectedDate] = useState(new Date());
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
          format="yyyy/MM/dd"
          // margin="normal"
          id="date-picker-inline-from"
          label="Taken From"
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
  const [selectedDate, setSelectedDate] = useState(new Date());
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
          format="yyyy/MM/dd"
          // margin="normal"
          id="date-picker-inline-to"
          label="Taken To"
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

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    height: 645,
  },
  paper: {
    width: '80%',
    height: 600,
    margin: '0 auto',
    minWidth: 300,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing(0)}px ${theme.spacing(1)}px ${theme.spacing(0)}px`,
  },
  card: {
    height: 530,
    width: '90%',
    minWidth: 300,
    marginTop: theme.spacing(1),
    padding: `${theme.spacing(0)}px ${theme.spacing(0)}px ${theme.spacing(0)}px`,
  },
  gridList: {
    width: 300,
    height: 180,
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
  button: {
    margin: theme.spacing(1),
    textTransform: 'none',
  },
  input: {
    display: 'none',
  },

});

const SelectPhoto = (props) => {
  const [value, setValue] = useState('');
  const [cover, setCover] = useState(false);
  const [voice, setVoice] = useState(false);
  const [savevoice, setSaveVoice] = useState(false);
  const [state, setState] = useState(false);
  const [preview, setPreview] = useState(false);
  const [coverId, setCoverId] = useState('');
  const { classes } = props.props;

  const handleShowCover = event => {
    event.preventDefault();
    setState(false);
    setCover(!cover);
  };

  const handleSelectCover = value => () => {
    setCoverId(value);
    props.props.onSelectCover(value);
    setCover(!cover);
    setState(true);
    if (props.props.album.album.title && props.props.album.album.cover_photo && props.props.album.album.period_all) {
      setPreview(true);
    }
  }

  const handleChangeTitle = event => {
    event.preventDefault();
    props.props.onTitle(event.target.value);
    if (props.props.album.album.title && props.props.album.album.cover_photo && props.props.album.album.period_all) {
      setPreview(true);
    }
  };

  const handleChangePeriod = event => {
    event.preventDefault();
    setValue(event.target.value);
    props.props.onPeriod(event.target.value);
    if (event.target.value === 'period_select') {
      props.props.onPeriodFrom(moment(new Date()).format('YYYY-MM-DD'))
      props.props.onPeriodTo(moment(new Date()).format('YYYY-MM-DD'))
    }
    if (props.props.album.album.title && props.props.album.album.cover_photo && props.props.album.album.period_all) {
      setPreview(true);
    }
  };

  const handleSelectFile = event => {
    event.preventDefault();
    setVoice(true);
    props.props.onSetVoice(event.target.files[0]);
  };

  const handleSubmit = () => {
    props.props.onSaveVoice(props.props.album.album.voice);
    if (props.props.album.album.voice.voice_name) {
      setSaveVoice(true);
    }
  };

  return (
    // <div className={classes.root}>
    <div>
      <Card className={classes.card}>
        {/* <CardActions> */}
        <Button variant="contained" color="primary" onClick={handleShowCover} className={classes.button} startIcon={<PhotoIcon />} >
          Cover Photo
        </Button>
        {/* </CardActions> */}
        {cover &&
          <GridList cellHeight={74} spacing={1} className={props.props.classes.gridList} cols={4}>
            {props.props.image.image.map((item) => (
              <GridListTile
                onClick={handleSelectCover(item.img_name)}
              >
                <img src={`${imgurl}/${item.img_name}`} alt='' />
              </GridListTile>
            ))}
          </GridList>
        }
        {state &&
          <Image src={`${imgurl}/${coverId}`} alt='' width={180} height={180} />
        }
        <div>
          <input
            accept="audio/*"
            className={classes.input}
            id="contained-button-file"
            type="file"
            name="voice_name"
            onChange={handleSelectFile}
            capture="microphone"
          />
          <label htmlFor="contained-button-file">
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              startIcon={<RecordVoiceOverIcon />}
              component="span"
            >
              Voice
                </Button>
          </label>
          {(voice && !savevoice) &&
            <Container>
              <Typography style={{ width: '20vh', display: 'inline-block' }} noWrap={true} >{props.props.album.album.voice.name}</Typography>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                component="span"
                onClick={handleSubmit}
              >
                Save
            </Button>
            </Container>
          }
          {(voice && savevoice) &&
            <Container>
              <Typography style={{ width: '20vh', display: 'inline-block' }} noWrap={true} >{props.props.album.album.voice.name}</Typography>
              <Button
                variant="contained"
                className={classes.button}
                component="span"
                disabled
              >
                Save
            </Button>
            </Container>
          }
        </div>
        <div>
          <TextField
            required={true}
            id="standard-basic"
            label="Title"
            name="title"
            onChange={handleChangeTitle}
            margin="normal"
            fullwidth

          />
        </div>
        <FormControl component="fieldset">
          <FormLabel component="legend">Period</FormLabel>
          <RadioGroup aria-label="position" name="position" value={value} onChange={handleChangePeriod} row>
            <FormControlLabel
              value="period_all"
              control={<Radio color="primary" />}
              label="All"
              labelPlacement="end"
            />
            <FormControlLabel
              value="period_select"
              control={<Radio color="primary" />}
              label="Select"
              labelPlacement="end"
            />
            {props.props.album.album.period_all === 'period_select' && <Typography style={{ width: '17vh', display: 'inline-block' }} noWrap={true} ><MaterialUIPickersFrom props={props.props} /> <MaterialUIPickersTo props={props.props} /></Typography>}
          </RadioGroup>
        </FormControl>
      </Card>
      {
        preview &&
        <Button
          variant="contained"
          color="primary"
          to={'/albumcopy'}
          component={Link}
          className={classes.button}
        >
          Preview
        </Button>
      }
    </div >
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
    this.handleNewAlbum = this.handleNewAlbum.bind(this);
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
          <div className={classes.root}>
            <Paper className={classes.paper} elevation={0}>
              <Button variant="contained" color="primary" onClick={this.handleNewAlbum} className={classes.button} endIcon={<AddIcon />}>
                New Album
              </Button>
              {this.state.showFlag ? <SelectPhoto props={this.props} /> : ''}
            </Paper>
          </div>
          <Footer />
        </React.Fragment >
      );
    } else {
      return (
        <React.Fragment >
          <Header />
          <div className={classes.root}>
            <Paper className={classes.paper} elevation={0}>
            </Paper>
          </div>
          <Footer />
        </React.Fragment >
      )
    }
  }
}

export default withStyles(styles)(Album);
