import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Link, withRouter } from 'react-router-dom';
import { Button, TextField, Card } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


class FormTwo extends Component {

    state = {
        name: '',
        phonenumber: '',
    }


    inputNameHandler = (event) => {
        this.setState({
            ...this.state,
            name: event.target.value
        });
    }

    inputPhoneNumberHandler = (event) => {
        this.setState({
            ...this.state,
            phonenumber: event.target.value
        });
    }

    compileFeedback = () => {
        if (this.state.name === '' || this.state.phonenumber === '') {
            alert('Invalid input, please enter a name and their phone number');
        } else {
            this.props.dispatch({ type: "CONNECTION_NAME", payload: this.state.name });
            this.props.dispatch({ type: "CONNECTION_PHONE_NUMBER", payload: this.state.phonenumber });
            this.props.history.push('/formthree');
        }
    }

    goBackToFormOne = () => {
        this.props.history.push('/formone');
    }

    render() {
        return (
            <div className="App">
                <header className="Home-header">
                    <p className="formOne">Is there anyone you would like to contact more often?</p>
                    
                        <form onSubmit={this.compileFeedback} noValidate autoComplete="off">   
                            <div>
                                <TextField
                                    id="outlined-name"
                                    label="Name"
                                    className="formTwo"
                                    onChange={this.inputNameHandler}
                                    defaultValue={this.props.formReducer.connectionname}
                                    margin="normal"
                                    variant="outlined"
                                />
                                <TextField
                                    id="outlined-uncontrolled"
                                    label="Phone Number"
                                    placeholder="123-456-7890"
                                    className="formTwo"
                                    onChange={this.inputPhoneNumberHandler}
                                    defaultValue={this.props.formReducer.connectionphonenumber}
                                    margin="normal"
                                    variant="outlined"
                                />
                            </div>
                            <Button color="secondary"onClick={this.goBackToFormOne}variant="contained" type="submit">Back</Button>
                        <Button variant="contained" type="submit">Next</Button>
                    </form>
                </header>
                <br />
                <pre>{JSON.stringify(this.state, null, 2)}</pre>
            </div>

        );

    }
}

const mapReduxStateToProps = state => state;

export default connect(mapReduxStateToProps)(withRouter(FormTwo));