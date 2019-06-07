import React from 'react';
import { connect } from 'react-redux';
import { fetchGeoCoordinates } from '../actions';

class Weather extends React.Component {
  componentDidMount() {
    this.props.fetchGeoCoordinates();
  }

  render() {
    const { latitude, longitude } = this.props.coords;
    return (
      <section>
        <h1>{latitude}</h1>
        <h1>{longitude}</h1>
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
