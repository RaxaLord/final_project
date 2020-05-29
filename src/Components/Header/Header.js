import React, { Component } from 'react';
import Axios from 'axios';
import { getUserSession } from '../../redux/reducer';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './Header.css';
import './Tooltip.css';

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
            <div className='avatar'>
              <nav id='colorNav'>
                <ul>
                  <li class='navi'>
                    <div>
                      <img
                        className='display-photo'
                        src={this.props.user.photo}
                        alt='display'
                        width='50px'
                        height='50px'
                      />
                    </div>
                    <ul>
                      <li>
                        <p>
                          Signed in as, <b>{this.props.user.username}</b>
                        </p>
                      </li>
                      <li>
                        <Link to='/saved'>
                          <p>Saved Locations</p>
                        </Link>
                      </li>
                      <li>
                        <Link to='/update'>
                          <p>Update Profile</p>
                        </Link>
                      </li>
                      <li>
                        <p>Add New Location</p>
                      </li>
                      <li>
                        <p onClick={() => this.logout()}>Sign Out</p>
                      </li>
                    </ul>
                  </li>
                </ul>
              </nav>

              {/* <Link to='/saved'>
                <img
                  className='display-photo fa fa-windows'
                  src={this.props.user.photo}
                  alt='display'
                  width='50px'
                  height='50px'
                />
              </Link> */}

              {/* <Tooltip /> */}
              <br />

              {/* <span onClick={() => this.logout()}>Sign Out</span> */}
            </div>
          ) : (
            <Link to='/login'>
              <p>Sign In</p>
            </Link>
          )}
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, { getUserSession })(Header);
