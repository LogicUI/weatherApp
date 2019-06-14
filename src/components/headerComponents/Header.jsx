import React, { Component } from 'react';
import HeaderContent from './HeaderContent.jsx';


/**
 * displays the header navbar component
 */
class Header extends Component {
  /**
   * short circuited evaluation to check if time props is rendered correctly and return the header content
   */
  loadStatus() {
      return this.props.time && <HeaderContent time={this.props.time} search={this.props.search}/>;
    
  }

  render() {
    return (
      <React.Fragment >{this.loadStatus()}</React.Fragment>
    );
  }
}

export default Header;
