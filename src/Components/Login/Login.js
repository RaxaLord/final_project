import React, { Component } from 'react';
import axios from 'axios';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      email: '',
      location: '',
      password: '',
      photo: '',
      registerMode: true,
    };

    this.login = this.login.bind(this);
    this.register = this.register.bind(this);
  }

  toggleLoginMode() {
    this.setState({
      registerMode: !this.state.registerMode,
    });
  }

  changeHandler(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  async login() {
    const { username, password } = this.state;
    const user = await axios
      .post('/auth/login', { username, password })
      .catch((err) => console.log('something went wrong'));
    console.log('from login:', user);

    window.location.replace('#/main');
    window.location.reload();
  }

  async register() {
    const { username, email, location, password, photo } = this.state;
    const user = await axios
      .post('/auth/register', { username, email, location, password, photo })
      .catch((err) => console.log(err));
    console.log('from register:', user);
  }

  render() {
    // console.log(this.state);
    return (
      <div>
        {this.state.registerMode ? (
          <div>
            <input
              type='text'
              name='username'
              value={this.state.username}
              placeholder='username'
              onChange={(e) => this.changeHandler(e)}
            />
            <input
              type='email'
              name='email'
              value={this.state.email}
              placeholder='email'
              onChange={(e) => this.changeHandler(e)}
            />
            <input
              type='text'
              name='location'
              value={this.state.location}
              placeholder='state'
              maxLength='2'
              onChange={(e) => this.changeHandler(e)}
            />
            <input
              type='password'
              name='password'
              value={this.state.password}
              placeholder='password'
              onChange={(e) => this.changeHandler(e)}
            />
            <input
              type='text'
              name='photo'
              value={this.state.photo}
              placeholder='display photo'
              onChange={(e) => this.changeHandler(e)}
            />
            <button onClick={this.register}>Submit</button>
            <p>
              Already have an account?{' '}
              <span onClick={() => this.toggleLoginMode()}>Login</span>
            </p>
          </div>
        ) : (
          <div>
            <input
              type='text'
              name='username'
              value={this.state.username}
              placeholder='username'
              onChange={(e) => this.changeHandler(e)}
            />
            <input
              type='password'
              name='password'
              value={this.state.password}
              placeholder='password'
              onChange={(e) => this.changeHandler(e)}
            />
            <button onClick={this.login}>Login</button>
            <p>
              Need an account?{' '}
              <span onClick={() => this.toggleLoginMode()}>Register here</span>
            </p>
          </div>
        )}
      </div>
    );
  }
}
