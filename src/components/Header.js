import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchGeoCoordinates } from '../actions';
import CircularProgress from '@material-ui/core/CircularProgress';
import { StyledHead } from '../styled/StyledHead';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

class Header extends Component {
  componentDidMount() {
    this.props.fetchGeoCoordinates();
  }

  renderConditional() {
    const { latt, long } = this.props.coords;
    const { err } = this.props.errors;
    if (latt && long) {
      return <Typography varient="h1" color="primary">Coordinates has loaded sucessfully</Typography>;
    } else if (err) {
      return (
        <Typography varient="h1" color="secondary">
          {err}
        </Typography>
      );
    } else {
      return <CircularProgress />;
    }
  }

  render() {
    return <StyledHead>{this.renderConditional()}</StyledHead>;
  }
}

const mapStateToProps = (state) => {
  return { coords: state.geo, errors: state.err };
};

export default connect(
  mapStateToProps,
  { fetchGeoCoordinates }
)(Header);
