import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import Header from './Header';
import Footer from '../containers/Footer';


const styles = theme => ({
  layout: {
    width: 'auto',
    height: 580,
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
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing(2)}px ${theme.spacing(3)}px ${theme.spacing(3)}px`,
  },
});

class Ordered extends Component {
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Header />
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <Typography variant="headline">アルバムを発注しました！</Typography>
          </Paper>
        </main>
        <Footer />
      </React.Fragment>
    );
  }
}
export default withStyles(styles)(Ordered);