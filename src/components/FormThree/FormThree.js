import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Link, withRouter } from 'react-router-dom';
import { Button, TextField, Card } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import 'date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import moment from 'moment';


class FormThree extends Component {
    state = {
        date: this.date,
    }

    compileFeedback = () => {
        if (this.state.date === 0) {
            alert('Invalid input, please enter a date');
        } else {
            this.props.dispatch({ type: "SOBRIETY_START_DATE", payload: this.state.date });
            this.props.history.push('/formfour');
        }
    }

    goBackToFormTwo = () => {
        this.props.history.push('/formtwo');
    }


    // sets selected date to state
    handleDateChange = (date) => {
        console.log(date);
        this.setState({

            date: date,
        })
        console.log(date);
    }

    render() {
        return (
            <div className="App">
                <header className="Home-header">
                    <p className="formOne">Which date are you changing your relationship with a substance or addiction?</p>

                    <form onSubmit={this.compileFeedback} noValidate autoComplete="off">
                        <div>
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <Grid container justify="space-around">
                                    {/* <KeyboardDatePicker
                                        disableToolbar
                                        variant="inline"
                                        format="MM/dd/yyyy"
                                        margin="normal"
                                        id="date-picker-inline"
                                        label="Date picker inline"
                                        value={this.state.date}
                                        onChange={this.handleDateChange}
                                        KeyboardButtonProps={{
                                            'aria-label': 'change date',
                                        }}
                                    /> */}
                                    <KeyboardDatePicker
                                        margin="normal"
                                        id="date-picker-dialog"
                                        label="Pick a Date"
                                        format="MM/dd/yyyy"
                                        value={this.state.date}
                                        onChange={this.handleDateChange}
                                        defaultValue={this.props.formReducer.sobrietystartdate}
                                        KeyboardButtonProps={{
                                            'aria-label': 'change date',
                                        }}
                                    />
                                </Grid>
                            </MuiPickersUtilsProvider>

                        </div>
                        <Button color="secondary" onClick={this.goBackToFormTwo} variant="contained" type="submit">Back</Button>
                        <Button variant="contained" type="submit">Next</Button>
                    </form>
                </header>
                <br />
                {/* <pre>{JSON.stringify(this.state, null, 2)}</pre> */}
            </div>

        );
    }
}

const mapReduxStateToProps = state => state;

export default connect(mapReduxStateToProps)(withRouter(FormThree));