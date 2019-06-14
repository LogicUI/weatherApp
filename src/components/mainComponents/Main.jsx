import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import MainContents from './MainContents.jsx';

class main extends Component {
  loadStatus = () => {
    const isLoaded = !!this.props.current; // ensures data is loaded
    if (isLoaded) {
    } else {
      return <CircularProgress />;
    }
  };
  render() {
    return <div />;
  }
}

export default main;
