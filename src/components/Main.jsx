import CircularProgress from '@material-ui/core/CircularProgress';
import React, { Component } from 'react';
import '../scss/main.scss';

class Main extends Component {

  _renderData = () => {
    const { icon, text } = this.props.current.condition;
    const { temp_c, temp_f } = this.props.current.avgtemp;

    return (
      <section>
        <h1 className="is-size-3">{this.props.current.day}'s Weather</h1>
        <img src={icon} alt="this is a weather icon" />
        <h1>{this.props.country}</h1>
        <h1>{text}</h1>
        <h1>{temp_c} °C</h1>
        <h1> {temp_f} F</h1>
        <div className="buttons has-addons">
          <span className="button" >Celsius</span>
          <span className="button is-success is-selected">farenheit</span>
        </div>
      </section>
    );
  };

  /**
   * checks if props data is updated to api values returns the render data else return a loading spinner
   */
  loadStatus = () => {
    const isLoaded = !!this.props.current; // ensures data is loaded
    if (isLoaded) {
      return this._renderData();
    } else {
      return <CircularProgress />;
    }
  };

  render() {
    return <section className="main">{this.loadStatus()}</section>;
  }
}

export default Main;
