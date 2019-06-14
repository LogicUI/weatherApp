import React, { Component } from 'react';
import HeaderContent from './HeaderContent.jsx';

export class Header extends Component {
  /**
   * Loads the status of the header with a loading bar or the header details
   */
  loadStatus() {
    if (this.props.time) {
      return <HeaderContent time={this.props.time} search={this.props.search}/>;
    } 
  }

  render() {
    return (
      <React.Fragment >{this.loadStatus()}</React.Fragment>
    );
  }
}

export default Header;
