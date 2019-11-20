import React from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import { Grid, Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import { HashRouter as Router, Route, Link, withRouter } from 'react-router-dom';

let goToFormOne = () => {
  console.log('in UserPage');
  // this.props.history.push("/formone")
}

// this could also be written with destructuring parameters as:
// const UserPage = ({ user }) => (
// and then instead of `props.user.username` you could use `user.username`
const UserPage = (props) => (



  <div>
    <h1 id="welcome">
      Welcome, {props.user.username}!
    </h1>
    <p>Congrats on making a change in your life!  To get the most value out of this app it is recommended to create connection goals by clicking the button below. </p>

    <Link to= "/formone"><Button onClick={() => (goToFormOne())} variant="contained" size="small" color="primary">
      Create Connection Goals
    </Button></Link>

    <p>Your ID is: {props.user.id}</p>
    <LogOutButton className="log-in" />
  </div>
);

// Instead of taking everything from state, we just want the user info.
// if you wanted you could write this code like this:
// const mapStateToProps = ({user}) => ({ user });
const mapStateToProps = state => ({
  user: state.user,
});

// this allows us to use <App /> in index.js
// const mapReduxStateToProps = reduxState => ({
//   reduxState
// });

// export default connect(mapReduxStateToProps)(withRouter(UserPage));
export default connect(mapStateToProps)(withRouter(UserPage));
