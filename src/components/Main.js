import React, { Component } from 'react';
import { connect } from 'react-redux';
class Main extends Component {

  fetch

  render() {
    return <div />;
  }
}

const mapStateToProps = (state) => {
  return { cords: state.geo };
};

export default connect(
  mapStateToProps,

)(Main);

// import React from 'react';
// import { connect } from 'react-redux';

// class Weather extends React.Component {
//   componentDidMount() {
//   }

//   render() {

//   }
// }

// const mapStateToProps = (state) => {
//     return {forecast:state.forecast}
// };

// export default connect(
//   mapStateToProps,{fetchWeather}
// )(Weather);
