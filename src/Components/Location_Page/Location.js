import React, { Component } from 'react';
import axios from 'axios';
import Header from '../Header/Header';
// import { Link } from 'react-router-dom';

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
        <div>
          <div>
            <img src={location.image} alt={location.name} />
          </div>

          <div>
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

    // const moreLocations = this.state.locations.map((locations) => {
    //   return (
    //     <div>
    //       <section>
    //         <Link to={`/locations/${locations.location_id}`}>
    //           <img src={locations.image} alt={locations.name} />
    //         </Link>
    //       </section>
    //     </div>
    //   );
    // });

    return (
      <div>
        <Header />
        {mappedLocation}
        {/* <section>
          <h1>explore more</h1>
          <br />
          {moreLocations}
        </section> */}
      </div>
    );
  }
}
