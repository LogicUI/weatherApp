import CircularProgress from '@material-ui/core/CircularProgress';
import LocalAirport from '@material-ui/icons/LocalAirport';
import { StyledHead } from '../styled/StyledHead';
import Clock from './Clock.jsx';
import Calender from './Calender.jsx';
import React, { Component } from 'react';

export class Header extends Component {
  /**
   * Renders the header data component to the screen
   * @param country the country of the state that the weather app finds
   */
  _renderHeaderData(Country) {
    return (
      <React.Fragment>
        {Country}
        <Calender />
        <Clock />
      </React.Fragment>
    );
  }

  /**
   * Loads the status of the header with a loading bar or the header details 
   */
  loadStatus() {
    if (this.props.country) {
      const Country = (
        <h1>
          <LocalAirport />
          {this.props.country}
        </h1>
      );
      return this._renderHeaderData(Country);
    } else {
      return <CircularProgress />;
    }
  }

  render() {
    return <StyledHead>{this.loadStatus()}</StyledHead>;
  }
}

export default Header;
