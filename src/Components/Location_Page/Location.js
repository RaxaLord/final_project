import React, { Component } from 'react';
import axios from 'axios';
import Header from '../Header/Header';
import './Location_Page.css';

export default class Location extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: [],
      locations: [],
    };

    this.save = this.save.bind(this);
  }

  componentDidMount() {
    axios.get(`/api/locations/${this.props.match.params.id}`).then((res) => {
      this.setState({
        location: res.data,
      });
    });

    axios.get('/api/locations').then((res) => {
      this.setState({ locations: res.data });
    });
  }

  save(id) {
    axios.post(`/api/save/${id}`);
  }

  render() {
    console.log(this.state.location);

    const mappedLocation = this.state.location.map((location) => {
      return (
        <div className='location-page'>
          <div>
            <img src={location.image} alt={location.name} />
          </div>

          <div className='description'>
            <h1>
              {location.name}
              <br />
              {location.address} {location.state}
              <br />
            </h1>
            <p>{location.description}</p>
            <br />
            <br />

            <button onClick={() => this.save(location.location_id)}>
              Save For Later!
            </button>
          </div>
        </div>
      );
    });

    return (
      <div>
        <Header />
        {mappedLocation}
      </div>
    );
  }
}
