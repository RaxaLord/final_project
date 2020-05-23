import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';

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
        <section>
          <Link to={`/location/${location.location_id}`}>
            <img src={location.image} alt={location.name} />
          </Link>
          <h1>{location.name}</h1>
          <h1>{location.description}</h1>
        </section>
      );
    });
    return (
      <div>
        <Header />
        <div>google maps section</div>
        {mappedLocations}
      </div>
    );
  }
}
