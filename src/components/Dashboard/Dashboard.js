import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import { HashRouter as Router, Route, Link, withRouter, Switch } from 'react-router-dom';
import './Dashboard.css';
import moment from 'moment';

class Dashboard extends Component {


    gotoTrackerPage =() => {
        this.props.history.push('/trackerpage');
    }

    gotoMeditations = () => {
        this.props.history.push('/dailymeditations')
    }

    gotoSelfConnection = () => {
        this.props.history.push('/connectionself')
    }

    gotoOthersConnection = () => {
        this.props.history.push('/connectionothers')
    }
    render() {
        return (
            <>
            {/* <h2>{this.props.user.username}'s Dashboard!</h2> */}
            
            <div class="container">
                        <div class="box" id="trackerBox" onClick={this.gotoTrackerPage}><p>Tracker Page</p><i class="fas fa-clock fa-2x"></i></div>
                        <div class="box" id="meditationsBox" onClick={this.gotoMeditations}><p>Daily Meditations</p><i class="fas fa-book-reader fa-2x"></i></div>
                        <div class="box" id="selfBox" onClick={this.gotoSelfConnection}><p>Connection with Self</p><i class="fas fa-tree fa-2x"></i></div>
                        <div class="box" id="othersBox" onClick={this.gotoOthersConnection}><p>Connection with Others </p><i class="fas fa-tree fa-2x"></i><i class="fas fa-tree fa-2x"></i></div>
                    </div>
                    <div id="date">Today's Date: {moment().toISOString().toString().split("T")[0]}</div>
            </>
        )
    }
}

const mapReduxStateToProps = reduxState => ({
    reduxState
});

export default connect(mapReduxStateToProps)(withRouter(Dashboard));