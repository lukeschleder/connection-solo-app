import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Link, withRouter } from 'react-router-dom';
import { Button, TextField, Card } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import './FormOne.css';



class FormOne extends Component {
    // captures data and sends to redux state
    state = {
        selfgoal: '',
    }


    inputChangeHandler = (event) => {
        this.setState({
            ...this.state,
            selfgoal: event.target.value
        });
    }

    compileFeedback = () => {
        if (this.state.selfgoal == '') {
            alert('Invalid input, please enter a personal goal');
        } else {
            this.props.dispatch({ type: "SELF_GOAL", payload: this.state.selfgoal });
            this.props.history.push('/formtwo');
        }
    }

    goBackToHome = () => {
        this.props.history.push('/home');
    }

    render() {
        return (
            <div className="App">
                <header className="Home-header">
                    <p className="formOne">What is something you would like to do more often that will help you connect with self?</p>
                    <form onSubmit={this.compileFeedback}>
                        <TextField className="textField"

                            onChange={this.inputChangeHandler}
                            defaultValue={this.props.formReducer.selfgoal}
                            label="Comments"
                            multiline='true'
                            rows="5"
                            // margin="normal"
                            variant="outlined"
                            placeholder=""
                        // fullWidth="true"
                        />
                        <br />
                        <Button color="secondary" onClick={this.goBackToHome} variant="contained" type="submit">Back</Button>
                        <Button variant="contained" type="submit">Next</Button>
                    </form>
                </header>
                <br />
                {/* <pre>{JSON.stringify( this.state, null, 2)}</pre> */}
            </div>

        );

    }
}

const mapReduxStateToProps = state => state;

export default connect(mapReduxStateToProps)(withRouter(FormOne));