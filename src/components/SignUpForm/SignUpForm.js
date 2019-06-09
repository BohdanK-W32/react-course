/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';

export default class SignUpForm extends Component {
  state = {
    login: '',
    email: '',
    password: '',
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    // eslint-disable-next-line no-alert
    alert('Submit!');
  };

  render() {
    const { email, login, password } = this.state;

    return (
      <form className="signUpForm" onSubmit={this.handleSubmit}>
        <label>
          Login
          <input
            name="login"
            type="text"
            onChange={this.handleChange}
            value={login}
          />
        </label>
        <label>
          Email
          <input
            name="email"
            type="text"
            onChange={this.handleChange}
            value={email}
          />
        </label>
        <label>
          Email
          <input
            name="password"
            type="password"
            onChange={this.handleChange}
            value={password}
          />
        </label>
        <button type="submit">sign up</button>
      </form>
    );
  }
}
