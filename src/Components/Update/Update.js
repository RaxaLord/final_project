import React, { Component } from 'react';
import axios from 'axios';

export default class Update extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      state: '',
      photo: '',
    };

    this.update = this.update.bind(this);
  }

  update() {
    const { username, state, photo } = this.state;
    axios
      .put('/auth/update_profile', { username, state, photo })
      .then((res) => {
        this.setState({
          username: res.data.username,
          state: res.data.state,
          photo: res.data.photo,
        });
        window.location.reload();
      });
  }

  changeHandler(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  cancel() {
    window.location.replace('#/main');
  }

  render() {
    return (
      <div className='login-page'>
        <div className='form'>
          <div className='login-form'>
            <input
              type='text'
              name='username'
              value={this.state.username}
              placeholder='What username would you like to use?'
              onChange={(e) => this.changeHandler(e)}
            />
            <input
              type='text'
              name='state'
              value={this.state.state}
              placeholder='Which state do you live in?'
              onChange={(e) => this.changeHandler(e)}
            />
            <input
              type='text'
              name='photo'
              value={this.state.photo}
              placeholder='Display Photo Url'
              onChange={(e) => this.changeHandler(e)}
            />
            <button onClick={this.update}>Update Profile</button>
            <p className='message'>
              Changed your mind?{' '}
              <span onClick={() => this.cancel()}>CANCEL</span>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
