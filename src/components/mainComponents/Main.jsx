import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import MainContents from './MainContents.jsx';

class Main extends Component {
  loadStatus() {
    const isLoaded = !!this.props.current; // ensures data is loaded
    if (isLoaded) {
      return <MainContents current={this.props.current} country={this.props.country} />;
    } else {
      return <CircularProgress />;
    }
  }

  render() {
    return <React.Fragment>{this.loadStatus()}</React.Fragment>;
  }
}

export default Main;
