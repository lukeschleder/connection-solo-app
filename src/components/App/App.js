import React, {Component} from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import {connect} from 'react-redux';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'

import AboutPage from '../AboutPage/AboutPage';
import UserPage from '../UserPage/UserPage';
import InfoPage from '../InfoPage/InfoPage';
import FormOne from '../FormOne/FormOne';
import FormTwo from '../FormTwo/FormTwo';
import FormThree from '../FormThree/FormThree';
import FormFour from '../FormFour/FormFour';
import FormReview from '../FormReview/FormReview';
import TrackerPage from '../TrackerPage/TrackerPage';
import Dashboard from '../Dashboard/Dashboard';
import Meditations from '../Meditations/Meditations';

import './App.css';

class App extends Component {
  componentDidMount () {
    this.props.dispatch({type: 'FETCH_USER'})
  }

  render() {
    return (
      <Router>
        <div class="bigDiv">
          <Nav />
          <Switch>
            {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
            <Redirect exact from="/" to="/home" />
            {/* Visiting localhost:3000/about will show the about page.
            This is a route anyone can see, no login necessary */}
            <Route
              exact
              path="/about"
              component={AboutPage}
            />
            {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/home will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the 'Login' or 'Register' page.
            Even though it seems like they are different pages, the user is always on localhost:3000/home */}
            <ProtectedRoute
              exact
              path="/home"
              component={UserPage}
            />
            {/* This works the same as the other protected route, except that if the user is logged in,
            they will see the info page instead. */}
            <ProtectedRoute
              exact
              path="/info"
              component={InfoPage}
            />
            <ProtectedRoute
              exact
              path="/formone"
              component={FormOne}
            />
            <ProtectedRoute
              exact
              path="/formtwo"
              component={FormTwo}
            />
            <ProtectedRoute
              exact
              path="/formthree"
              component={FormThree}
            />
            <ProtectedRoute
              exact
              path="/formfour"
              component={FormFour}
            />
            <ProtectedRoute
              exact
              path="/formreview"
              component={FormReview}
            />
            <ProtectedRoute
              exact
              path="/trackerpage"
              component={TrackerPage}
            />
            <ProtectedRoute
              exact
              path="/dashboard"
              component={Dashboard}
            />
            <ProtectedRoute
              exact
              path="/dailymeditations"
              component={Meditations}
            />
            {/* If none of the other routes matched, we will show a 404. */}
            <Route render={() => <h1>404</h1>} />
          </Switch>
          <Footer />
          
        </div>
      </Router>
  )}
}

export default connect()(App);
