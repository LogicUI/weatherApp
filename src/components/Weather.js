import React from 'react';
import { connect } from 'react-redux';
import {fetchWeather} from "../actions";

class Weather extends React.Component {
  componentDidMount() {
    this.props.fetchWeather();
  }


  render() {
      console.log(this.props);
    return (
      <section>
        test
      </section>
    );
  }
}

const mapStateToProps = (state) => {
    return {forecast:state.forecast}
};

export default connect(
  mapStateToProps,{fetchWeather}
)(Weather);
