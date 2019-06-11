import CircularProgress from '@material-ui/core/CircularProgress';
import { StyledHead } from '../../styled/StyledHead';
import React, { Component } from 'react';
import HeaderContent from "./HeaderContent.jsx";


export class Header extends Component {
  /**
   * Loads the status of the header with a loading bar or the header details
   */
  loadStatus() {
    if (this.props.country) {
      return  <HeaderContent country={this.props.country}/>
    } else {
      return <CircularProgress />;
    }
  }

  render() {
    return <StyledHead>{this.loadStatus()}</StyledHead>;
  }
}

export default Header;
