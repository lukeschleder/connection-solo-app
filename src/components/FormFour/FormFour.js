import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Link, withRouter } from 'react-router-dom';
import { Button, TextField, Card } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


class FormFour extends Component {

    state = {
        moneySpent: '',
        timeSpent: '',
    }


    inputMoneyHandler = (event) => {
        this.setState({
            ...this.state,
            moneySpent: event.target.value
        });
    }

    inputHoursHandler = (event) => {
        this.setState({
            ...this.state,
            timeSpent: event.target.value
        });
    }

    compileFeedback = () => {
        if (this.state.moneySpent === '' || this.state.timeSpent === '') {
            alert('Invalid input, please enter both money and time spent on average per day');
        } else {
            this.props.dispatch({ type: "MONEY_SAVED", payload: this.state.moneySpent });
            this.props.dispatch({ type: "TIME_SAVED", payload: this.state.timeSpent });
            this.props.history.push('/formreview');
        }
    }

    goBackToFormThree = () => {
        this.props.history.push('/formthree');
    }

    render() {
        return (
            <div className="App">
                <header className="Home-header">
                    <p className="formOne">How much money did you spend on your substance/ addiction issue on average per day?  How much time on average per day?</p>
                    
                        <form onSubmit={this.compileFeedback} noValidate autoComplete="off">   
                            <div>
                                <TextField
                                    id="outlined-name"
                                    label="Average money"
                                    className="formTwo"
                                    onChange={this.inputMoneyHandler}
                                    defaultValue={this.props.formReducer.moneysaved}
                                    placeholders="money"
                                    margin="normal"
                                    variant="outlined"
                                />
                                <TextField
                                    id="outlined-uncontrolled"
                                    label="Average hours"
                                    defaultValue={this.props.formReducer.timesaved}
                                    placeholder="time"
                                    className="formTwo"
                                    onChange={this.inputHoursHandler}
                                    margin="normal"
                                    variant="outlined"
                                />
                            </div>
                            <Button onClick={this.goBackToFormThree}variant="contained" color="secondary"type="submit">Back</Button>
                        <Button variant="contained" type="submit">Next</Button>
                    </form>
                </header>
                <br />
                <pre>{JSON.stringify(this.state, null, 2)}</pre>
                <pre>{JSON.stringify( this.props.formReducer, null, 2)}</pre>
            </div>

        );

    }
}

const mapReduxStateToProps = state => state;

export default connect(mapReduxStateToProps)(withRouter(FormFour));