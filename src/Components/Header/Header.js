import React, { Component } from 'react';
import Axios from 'axios';
import { getUserSession } from '../../redux/reducer';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {
  constructor(props) {
    super(props);

    this.logout = this.logout.bind(this);
  }

  componentDidMount() {
    this.props.getUserSession();
  }

  logout() {
    Axios.get('/auth/logout');
    window.location.replace('/');
  }

  render() {
    // console.log(this.props.user.photo);
    return (
      <header>
        <div>
          <Link to='/main'>
            <img
              src='https://bankingthefuture.com/wp-content/uploads/2019/04/logo-placeholder.jpg'
              alt='logo'
              width='125px'
              height='50px'
            />
          </Link>
        </div>
        <div>
          <img
            src={
              'https://tricityescaperooms.com/wp-content/uploads/2018/01/person-placeholder-male-5.jpg'
            }
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

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, { getUserSession })(Header);
