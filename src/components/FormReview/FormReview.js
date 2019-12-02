import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Link, withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import SaveIcon from '@material-ui/icons/Save';

class FormReview extends Component {

    handleSubmit = () => {
        if (this.props.formReducer.selfgoal === undefined || this.props.formReducer.connectionname === undefined || this.props.formReducer.connectionphonenumber === undefined) {
            alert("Please fill out form completely")
            console.log('Adding feedback', this.props.formReducer);
        } else
            this.props.dispatch({ type: 'UPDATE_PROFILE', payload: this.props.formReducer })
        this.props.dispatch({ type: "CLEAR_FORM" });
        this.props.history.push('/dashboard');
    }

    goBackToFormFour = () => {
        this.props.history.push('/formfour');
    }

    render() {
        return (
            <div className="Review">
                <header className="Home-header">
                    <h1 className="Review-Title">Review</h1>
                    <ul id="reviewList">
                        <li>Self Connection Goal: {this.props.formReducer.selfgoal}</li>
                        <br />
                        <li>Connection Person: {this.props.formReducer.connectionname}</li>
                        <br />
                        <li>Connection Phone Number: {this.props.formReducer.connectionphonenumber}</li>
                        <br />
                        <li>Sobriety Start Date: {this.props.formReducer.sobrietystartdate.toString().split("GMT")[0]}</li>
                        <br />
                        <li>Money saved per day(on average): ${this.props.formReducer.moneysaved}.00</li>
                        <br />
                        <li>Time saved per day(on average): {this.props.formReducer.timesaved} hour/s</li>
                    </ul>
                    <Button variant="contained" color="secondary" onClick={this.goBackToFormFour} >Edit</Button>
                    <Button variant="contained" color="primary" startIcon={<SaveIcon />} onClick={this.handleSubmit} >Save Profile</Button>
                </header>
                {/* <pre>{JSON.stringify(this.state, null, 2)}</pre> */}
                {/* <pre>{JSON.stringify( this.props.formReducer, null, 2)}</pre> */}
            </div>
        );
    }
}

const mapReduxStateToProps = state => state;

export default connect(mapReduxStateToProps)(withRouter(FormReview));