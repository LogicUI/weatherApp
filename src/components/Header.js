import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchWeather } from '../actions';
import CircularProgress from '@material-ui/core/CircularProgress';
import { StyledHead } from '../styled/StyledHead';
import Typography from '@material-ui/core/Typography';
import LocalAirport from '@material-ui/icons/LocalAirport';
import CalenderViewDay from '@material-ui/icons/CalendarViewDay';

// calendar_view_day;
// import shortid from 'shortid';

class Header extends Component {
  componentDidMount() {
    this.props.fetchWeather();
  }

  /**
   * renders the header data when its loaded
   * @param {*} country  the country name that the weather app has picked up
   * @param {*} localtime the time that the data has been fetched
   */
  _renderHeaderData(country, localtime) {
    const [countryName, date, time] = [country, ...localtime.split(' ')];
    return (
      <React.Fragment>
        <h1>
          <LocalAirport />
          {countryName}
        </h1>
        <h2>
          <CalenderViewDay />
          {date}{' '}
        </h2>
        <h3> {time} </h3>
        {/* <Typography variant="h4">{countryName}</Typography> */}
      </React.Fragment>
    );
  }

  loadStatus() {
    const { err } = this.props.errors; // for any errors returned while fetching
    if (this.props.weatherData) {
      // check if the weatherdata is loaded sucessfully
      const { country, localtime } = this.props.weatherData;
      return this._renderHeaderData(country, localtime);
    } else if (err) {
      return (
        <Typography variant="h2" color="secondary">
          {err}
        </Typography>
      );
    } else {
      return <CircularProgress />;
    }
  }

  render() {
    return <StyledHead>{this.loadStatus()}</StyledHead>;
  }
}

const mapStateToProps = (state) => {
  return { weatherData: state.weather.location, errors: state.err };
};

export default connect(
  mapStateToProps,
  { fetchWeather }
)(Header);
