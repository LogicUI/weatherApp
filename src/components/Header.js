import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchWeather } from '../actions';
import CircularProgress from '@material-ui/core/CircularProgress';
import { StyledHead } from '../styled/StyledHead';
import Typography from '@material-ui/core/Typography';

class Header extends Component {
  componentDidMount = async() =>{
      this.props.fetchWeather();
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
    return <StyledHead>test</StyledHead>;
  }
}

const mapStateToProps = (state) => {
  return { coords: state.weather, errors: state.err };
};

export default connect(
  mapStateToProps,
  { fetchWeather }
)(Header);
