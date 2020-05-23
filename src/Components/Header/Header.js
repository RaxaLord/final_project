import React, { Component } from 'react';
import Axios from 'axios';

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayPhoto: '',
    };

    this.logout = this.logout.bind(this);
  }

  logout() {
    Axios.get('/auth/logout');
    window.location.replace('/');
  }

  render() {
    return (
      <header>
        <div>
          <img
            src='https://bankingthefuture.com/wp-content/uploads/2019/04/logo-placeholder.jpg'
            alt='logo'
            width='125px'
            height='50px'
          />
        </div>
        <div>
          <img
            src='https://tricityescaperooms.com/wp-content/uploads/2018/01/person-placeholder-male-5.jpg'
            alt='display'
            width='50px'
            height='50px'
          />
          <span onClick={() => this.logout()}>logout</span>
        </div>
      </header>
    );
  }
}
