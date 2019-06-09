import React, { Component } from 'react';
import { connect } from 'react-redux';
class Main extends Component {
  render() {
    return <div />;
  }
}

const mapStateToProps = (state) => {
  return { cords: state.geo };
};

export default connect(mapStateToProps)(Main);

