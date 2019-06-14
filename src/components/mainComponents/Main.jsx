import React, { Component } from 'react';
import MainContents from './MainContents.jsx';
import '@fortawesome/fontawesome-free/css/all.css';

/**
 * main component which shows details about the weather
 */
class Main extends Component {

  /**
   * check if props are passed correctly by short circuit , returns the maincontent component if props
   * are passed correctly
   */
  loadStatus() {
      return this.props.current && <MainContents current={this.props.current} country={this.props.country} />;
  }

  render() {
    return <React.Fragment>{this.loadStatus()}</React.Fragment>;
  }
}

export default Main;

