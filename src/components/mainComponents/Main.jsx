import React, { Component } from 'react';
import MainContents from './MainContents.jsx';
import '@fortawesome/fontawesome-free/css/all.css';


class Main extends Component {
  loadStatus() {
    const isLoaded = !!this.props.current; // ensures data is loaded
    if (isLoaded) {
      return <MainContents current={this.props.current} country={this.props.country} />;
    } 
  }

  render() {
    return <React.Fragment>{this.loadStatus()}</React.Fragment>;
  }
}

export default Main;
