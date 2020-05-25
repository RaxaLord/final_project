import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import './Main.css';

export default class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      locations: [],
    };
  }

  componentDidMount() {
    axios.get('/api/locations').then((res) => {
      this.setState({
        locations: res.data,
      });
    });
  }

  render() {
    // console.log(this.state.locations);

    const mappedLocations = this.state.locations.map((location) => {
      return (
        <div className='locations'>
          <Link to={`/locations/${location.location_id}`}>
            <img src={location.image} alt={location.name} />
          </Link>
          <div>
            <h1>{location.name}</h1>
            <p>{location.address}</p>
          </div>
        </div>
      );
    });
    return (
      <div>
        <Header />
        <div className='main-container'>
          <div className='location-container'>{mappedLocations}</div>
          <div className='map'>
            <img src='https://via.placeholder.com/500x750' alt='placeholder' />
          </div>
        </div>
      </div>
    );
  }
}
