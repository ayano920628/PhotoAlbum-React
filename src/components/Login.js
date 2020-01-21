import React, { Component } from 'react';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import Header from './Header';
// import Link from '@material-ui/core/Link';
import { Link } from 'react-router-dom';
// import { withRouter } from 'react-router';
const styles = theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
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
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing(2)}px ${theme.spacing(3)}px ${theme.spacing(3)}px`,
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    marginTop: theme.spacing(3),
  },
  alert: {
    color: 'red',
    fontSize: 14
  }
});

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const data = { email: '', password: '' };
    switch (e.target.name) {
      case 'email':
        data.email = e.target.value;
        this.props.onEmailChange(data);
        break;
      case 'password':
        data.password = e.target.value;
        this.props.onPasswordChange(data);
        break;
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const { email, password } = this.props.me.user;
    if (email && password) {
      this.props.login(email, password);
    }
  }
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Header />
        <CssBaseline />
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockIcon />
            </Avatar>
            <Typography variant="headline">ログインしてはじめよう！</Typography>
            {this.props.error ?
              <p className={classes.alert}>ユーザ名またはパスワードが正しくありません。</p>
              : ''
            }
            <form className={classes.form}>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="email">メールアドレス</InputLabel>
                <Input id="email" name="email" autoFocus onChange={this.handleChange} />
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="password">パスワード</InputLabel>
                <Input
                  name="password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={this.handleChange}
                />
              </FormControl>
              <Button
                type="submit"
                fullWidth
                variant="raised"
                color="primary"
                className={classes.submit}
                onClick={this.handleSubmit}
              >
                ログイン
              </Button>
            </form>
            <Button variant="contained" color='#9e9e9e' to='/register' component={Link}>
              登録がまだの方はこちら
            </Button>
          </Paper>
        </main>
      </React.Fragment>
    );
  }
}
export default withStyles(styles)(Login);