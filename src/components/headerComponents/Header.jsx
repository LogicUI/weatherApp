import CircularProgress from '@material-ui/core/CircularProgress';
import React, { Component } from 'react';
import HeaderContent from './HeaderContent.jsx';
import "../../scss/header.scss";

export class Header extends Component {
  /**
   * Loads the status of the header with a loading bar or the header details
   */
  loadStatus() {
      return <HeaderContent />;
  }

  render() {
    return <section className="header navbar is-dark">{this.loadStatus()}</section>;
  }
}

export default Header;
