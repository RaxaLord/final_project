import React, { Component } from 'react';
import Axios from 'axios';
import { getUserSession } from '../../redux/reducer';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './Header.css';

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
    return (
      <header>
        <div>
          <Link to='/main'>
            <img src={process.env.PUBLIC_URL + 'logo.png'} alt='logo' />
          </Link>
        </div>

        <div className='header-right'>
          {this.props.user ? (
            <div>
              <Link to='/saved'>
                <img
                  className='display-photo'
                  src={this.props.user.photo}
                  alt='display'
                  width='50px'
                  height='50px'
                />
              </Link>
              <br />

              <span onClick={() => this.logout()}>logout</span>
            </div>
          ) : (
            <Link to='/login'>Login</Link>
          )}
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, { getUserSession })(Header);
