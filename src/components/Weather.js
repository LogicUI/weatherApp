import React from 'react';
import { connect } from 'react-redux';
import { fetchGeoCoordinates } from '../actions';

class Weather extends React.Component {
  componentDidMount() {
    this.props.fetchGeoCoordinates();
  }

  getWeather() {
    const { latitude, longitude } = this.props.coords;
    // getWeatherCords.get(`/?lattlong=${latitude},${longitude}`).then(result => console.log(result))
    // .catch(err=>console.log(err.message));
  }

  render() {
    return (
      <section>
          {this.getWeather()}
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return { coords: state.coordinates };
};

export default connect(
  mapStateToProps,
  { fetchGeoCoordinates }
)(Weather);
