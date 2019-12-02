import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Link, withRouter } from 'react-router-dom';
import { Button, TextField, Card } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import moment from 'moment';
import './TrackerPage.css';



class TrackerPage extends Component {

    // componentDidMount () => {

    // }

    goBackToFormOne = () => {
        alert("You are not you're mistakes!")
        this.props.history.push('/formone');
    }

    render() {
        return (
            <div className="App">
                <header className="Home-header">
                    <h2>My Trackers</h2>
                    <div class="container">
                        <div class="box" id="othersBox"><i class="fas fa-clock fa-2x"></i><p>{moment(this.props.user.timestamp_sobriety_start).fromNow()}</p></div>
                        <div class="box" id="selfBox"><i class="fas fa-hourglass-half fa-2x"></i><p>{moment().diff(this.props.user.timestamp_sobriety_start, 'hours')} hours ago</p></div>
                        <div class="box" id="meditationsBox"><i class="fas fa-money-bill-alt fa-2x"></i><p>${this.props.user.timestamp_sobriety_start && moment().diff(this.props.user.timestamp_sobriety_start, 'days') * (this.props.user.money_savedperday)} dollars saved</p></div>
                        <div class="box" id="trackerBox"><i class="fas fa-history fa-2x"></i><p>{moment().diff(this.props.user.timestamp_sobriety_start, 'days') * (this.props.user.time_savedperday)} hours saved</p></div>
                    </div>
                    <p>Sobriety Start Date: {this.props.user.timestamp_sobriety_start && this.props.user.timestamp_sobriety_start.toString().split("T")[0]}</p>
                    <br/>
                    <Button variant="outlined" color="secondary" onClick={this.goBackToFormOne} >Reset Trackers</Button>
                    {/* <p>{moment(this.props.user.timestamp_sobriety_start).fromNow()}</p>
                    <p>{moment().diff(this.props.user.timestamp_sobriety_start, 'days')} days ago</p>
                    <p>{moment().diff(this.props.user.timestamp_sobriety_start, 'hours')} hours ago</p>
                    <p>${moment().diff(this.props.user.timestamp_sobriety_start, 'days') * (this.props.user.money_savedperday)} dollars saved</p>
                    <p>{moment().diff(this.props.user.timestamp_sobriety_start, 'days') * (this.props.user.time_savedperday)} hours saved</p> */}
                </header>
                <br />
            </div>
        );
    }
}

const mapReduxStateToProps = state => state;

export default connect(mapReduxStateToProps)(withRouter(TrackerPage));