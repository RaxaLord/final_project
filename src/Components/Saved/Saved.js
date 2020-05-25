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
          <button onClick={() => this.remove(location.saved_id)}>X</button>
          <img src={location.image} alt={location.name} />
        </div>
      );
    });
    return (
      <div>
        <Header />
        <div className='main-saved'>{savedLocations}</div>
        <div className='saved-map'>
          <img src='https://via.placeholder.com/350x150' alt='placeholder' />
        </div>
      </div>
    );
  }
}
