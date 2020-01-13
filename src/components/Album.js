import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Header from './Header';
import Footer from '../containers/Footer';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
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
const imgurl = 'http://www.photoalbum.com.s3-website-ap-northeast-1.amazonaws.com/upload';

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
    marginBottom: theme.spacing(1),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing(2)}px ${theme.spacing(3)}px ${theme.spacing(3)}px`,
  },
  card: {
    height: 530,
    width: '80%',
    minWidth: 275,
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  gridList: {
    width: 300,
    height: 200,
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
  const [value, setValue] = useState('');
  const [cover, setCover] = useState(false);
  const [state, setState] = useState(false);
  const [coverId, setCoverId] = useState('');
  const { classes } = props.props;
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
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardActions>
          <Button variant="contained" color="primary" onClick={handleShowCover}>
            表紙の選択
        </Button>
        </CardActions>
        {cover &&
          <GridList cellHeight={75} spacing={1} className={props.props.classes.gridList} cols={4}>
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
          <Image src={`${imgurl}/${coverId}`} alt='' width={200} height={200} />
        }
        <div>
          <TextField
            id="standard-basic"
            label="Title"
            name="title"
            onChange={handleChangeTitle}
            margin="normal"
          />
        </div>
        <FormControl component="fieldset">
          <FormLabel component="legend">期間</FormLabel>
          <RadioGroup aria-label="position" name="position" value={value} onChange={handleChangePeriod} row>
            <FormControlLabel
              value="period_all"
              control={<Radio color="primary" />}
              label="全期間"
              labelPlacement="bottom"
            />
            <FormControlLabel
              value="period_select"
              control={<Radio color="primary" />}
              label="期間を指定する"
              labelPlacement="bottom"
            />
            {props.props.album.album.period_all === 'period_select' && <div><MaterialUIPickersFrom props={props.props} /> <MaterialUIPickersTo props={props.props} /></div>}
          </RadioGroup>
        </FormControl>
      </Card>
      <Button variant="contained" color="primary" to={'/albumcopy'} component={Link}>
        プレビュー
        </Button>
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
          <div className={classes.root}>
            <Paper className={classes.paper} elevation={1}>
              <Button variant="contained" color="primary" onClick={this.handleNewAlbum} >
                新しいアルバムを作る
              </Button>
              <div>{this.state.showFlag ? <SelectPhoto props={this.props} /> : ''}</div>
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
            <Paper className={classes.paper} elevation={1}>
            </Paper>
          </div>
          <Footer />
        </React.Fragment >
      )
    }
  }
}

export default withStyles(styles)(Album);
