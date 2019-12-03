import React from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import { Grid, Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography, Box } from '@material-ui/core';
import { HashRouter as Router, Route, Link, withRouter } from 'react-router-dom';



// this could also be written with destructuring parameters as:
// const UserPage = ({ user }) => (
// and then instead of `props.user.username` you could use `user.username`
function UserPage (props) {

   const goToFormOne = () => {
    console.log('in UserPage');
    props.history.push("/formone")
  }
  const goToDashboard = () => {
    console.log('in UserPage');
    props.history.push("/dashboard")
  }
  return(
  <div>
    <Card>

      <CardMedia
        // className={classes.media}
        style={{ height: 200 }}
        image="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
        title="Contemplative Reptile"
      />

    </Card>
    <h1 id="welcome">
      Welcome, {props.user.username}!
    </h1>
    <Box m={2} className="aboveButton">Congrats on making a change in your life!  To get the most value out of this app it is recommended to create connection goals.  Do so by clicking below! </Box>

    <Button className="homeButtons"onClick= {goToFormOne} variant="contained" size="small" color="secondary">
      Create Connection Goals
    </Button>
    <Box m={2}className="aboveButton">If your goals are up to date, please continue to the dashboard.</Box>
    <Button className="homeButtons" onClick={goToDashboard} variant="contained" size="small" color="primary">
      Dashboard
    </Button>

    {/* <p>Your ID is: {props.user.id}</p> */}
    {/* <LogOutButton className="log-in" /> */}
    <br />
    <br />
    <Button variant="text" size="small" color="secondary" onClick={() => props.dispatch({ type: 'LOGOUT' })}>Log Out</Button>
  </div>
)};

// Instead of taking everything from state, we just want the user info.
// if you wanted you could write this code like this:
// const mapStateToProps = ({user}) => ({user});
const mapStateToProps = state => ({
  user: state.user,
});

// this allows us to use <App /> in index.js
// const mapReduxStateToProps = reduxState => ({
//   reduxState
// });

// export default connect(mapReduxStateToProps)(withRouter(UserPage));
export default connect(mapStateToProps)(withRouter(UserPage));
