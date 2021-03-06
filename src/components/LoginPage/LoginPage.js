import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TextField } from '@material-ui/core';

class LoginPage extends Component {
  state = {
    username: '',
    password: '',
  };

  login = (event) => {
    event.preventDefault();

    if (this.state.username && this.state.password) {
      this.props.dispatch({
        type: 'LOGIN',
        payload: {
          username: this.state.username,
          password: this.state.password,
        },
      });
    } else {
      this.props.dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }
  } // end login

  handleInputChangeFor = propertyName => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  }
  loginShortcut = () => {
    this.setState({
      username: 'Mary',
      password: '12345678',
    })
  }

  render() {
    return (
      <div>
        {this.props.errors.loginMessage && (
          <h2
            className="alert"
            role="alert"
          >
            {this.props.errors.loginMessage}
          </h2>
        )}

        <form onSubmit={this.login}> 
          <i className="fas fa-link fa-4x" onClick={this.loginShortcut}></i>
          <br/>
          <br/>
          <h1>Login</h1>
          <div>
            <label htmlFor="username">
              {/* Username: */}
              <TextField
                type="text"
                name="username"
                value={this.state.username}
                onChange={this.handleInputChangeFor('username')}
                margin="normal"
                variant="outlined"
                label="Username"
              />
            </label>
          </div>
          <div>
            <label htmlFor="password">
              {/* Password: */}
              <TextField
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleInputChangeFor('password')}
                variant="outlined"
                id="filled-password-input"
                label="Password"
                autoComplete="current-password"
                margin="normal"
                variant="outlined"
              />
            </label>
          </div>
          <div>
            <input
              className="log-in"
              type="submit"
              name="submit"
              value="Log In"
            />
          </div>
        </form>
        <center>
          <button
            type="button"
            className="link-button"
            onClick={() => { this.props.dispatch({ type: 'SET_TO_REGISTER_MODE' }) }}
          >
            Need an account?  Register
          </button>
        </center>
      </div>
    );
  }
}

// Instead of taking everything from state, we just want the error messages.
// if you wanted you could write this code like this:
// const mapStateToProps = ({errors}) => ({ errors });
const mapStateToProps = state => ({
  errors: state.errors,
});

export default connect(mapStateToProps)(LoginPage);
