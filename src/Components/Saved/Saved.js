import React, { Component } from 'react';
import axios from 'axios';
import Header from '../Header/Header';
// import { Link } from 'react-router-dom';
import './Saved.css';

export default class Saved extends Component {
  constructor(props) {
    super(props);

    this.state = {
      savedLocations: [],
    };

    this.getSaved = this.getSaved.bind(this);
    this.remove = this.remove.bind(this);
  }

  componentDidMount() {
    this.getSaved();
  }

  getSaved() {
    axios.get('/api/saved').then((res) => {
      this.setState({
        savedLocations: res.data,
      });
    });
  }

  remove(id) {
    axios.delete(`/api/remove/${id}`).then(() => {
      this.getSaved();
    });
  }

  render() {
    console.log(this.state.savedLocations[0]);

    const savedLocations = this.state.savedLocations.map((location) => {
      return (
        <div className='saved-location'>
          {/* <h1>{location.name}</h1>
          <p>rating: {location.rating}/5</p> */}
          <img src={location.image} alt={location.name} />
          <button
            className='deleteBtn'
            onClick={() => this.remove(location.saved_id)}
          >
            remove
          </button>
        </div>
      );
    });
    return (
      <div>
        <Header />
        <div className='main-saved'>
          <div className='saved-box'>{savedLocations}</div>
          <div className='saved-map'>
            <img
              src='https://miro.medium.com/max/4064/1*qYUvh-EtES8dtgKiBRiLsA.png'
              alt='placeholder'
            />
          </div>
        </div>
      </div>
    );
  }
}
