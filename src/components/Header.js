import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchGeoCoordinates } from '../actions';
import CircularProgress from '@material-ui/core/CircularProgress';

class Header extends Component {
  componentDidMount() {
    this.props.fetchGeoCoordinates();
  }

  renderConditional() {
    const { latt, long } = this.props.coords;

    if (latt && long) { // check if lattitude and longitude coordinates has a valid value
      return (
        <React.Fragment>
            <h1>Coordinates has loaded sucessfully</h1>
        </React.Fragment>
      );
    }else{
        return <CircularProgress />
    }
  }

  render() {
    return <header>{this.renderConditional()}</header>;
  }
}

const mapStateToProps = (state) => {
  return { coords: state.geo };
};

export default connect(
  mapStateToProps,
  { fetchGeoCoordinates }
)(Header);
