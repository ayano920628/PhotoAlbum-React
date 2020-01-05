import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Header from './Header';
import Footer from '../containers/Footer';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';

import { useState } from 'react';
// import Image from 'react-image-resizer';

import 'date-fns';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Image from 'react-image-resizer';

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

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  paper: {
    width: '80%',
    height: 600,
    margin: '0 auto',
    minWidth: 300,
    marginTop: theme.spacing(1),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing(2)}px ${theme.spacing(3)}px ${theme.spacing(3)}px`,
  },
  gridList: {
    width: 300,
    height: 300,
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

const SelectPhoto = (props) => {
  const [value, setValue] = React.useState('');
  const [cover, setCover] = useState(false);
  const [state, setState] = useState(false);
  const [coverId, setCoverId] = useState('');

  const handleShowCover = event => {
    event.preventDefault();
    setState(false);
    setCover(!cover);
  };

  const handleSelectCover = value => () => {
    setCoverId(value);
    // console.log(coverId);
    props.props.onSelectCover(value);
    setCover(!cover);
    setState(true);
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
                onClick={handleSelectCover(item.img_name)}
              >
                <img src={`${process.env.PUBLIC_URL}/${item.img_name}`} alt='' />
              </GridListTile>
            ))}
          </GridList>
        }</div>
        <div>{state &&
          <Image src={`${process.env.PUBLIC_URL}/${coverId}`} alt='' width={250} height={250} />
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

          <main className={classes.layout}>
            <Paper className={classes.paper} elevation={1}>
              <Button variant="contained" color="primary" onClick={this.handleNewAlbum} >
                New
              </Button>
              <div>{this.state.showFlag ? <SelectPhoto props={this.props} /> : ''}</div>
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
