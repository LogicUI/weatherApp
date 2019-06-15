import React, { Component } from 'react';
import '../../scss/main.scss';

/**
 * shows the main weather data content to the user based on which weather has been selected from the navbar
 */
class MainContents extends Component {
  constructor(props) {
    super(props);

    this.state = {
      temperature: `${this.props.current.avgtemp.temp_c} °C`,
      changed: true
    };
  }

  /**
   * changes the temperature to celcius when celcius button is clicked
   */
  handleOnClickCelcius = () => {
    const { temp_c } = this.props.current.avgtemp;
    if (temp_c !== this.state.temperature) {
      // check if the user is clicking on the same button to prevent rerendering
      this.setState({
        temperature: `${this.props.current.avgtemp.temp_c} °C`,
        changed: true
      });
    }
  };

  /**
   * changes the temperature to farenheit when the faren button is clicked
   */
  handleOnClickFarenheit = () => {
    const { temp_f } = this.props.current.avgtemp;
    if (temp_f !== this.state.temperature) {
      // check if the user is clicking on the same button to prevent rerendering
      this.setState({
        temperature: `${this.props.current.avgtemp.temp_f} °F`,
        changed: false
      });
    }
  };

  /**
   * renders the temperature buttons that lets the user switch temperature by celsius or farenheit
   * checks which buttons should be active
   */
  renderTempButtons() {
    return (
      <section className="buttons has-addons">
        <span
          className={`button ${
            this.state.changed ? 'is-success is-selected' : ''
          }`}
          onClick={this.handleOnClickCelcius}
        >
          Celsius
        </span>
        <span
          className={`button ${
            this.state.changed ? '' : 'is-success is-selected'
          }`}
          onClick={this.handleOnClickFarenheit}
        >
          Farenheit
        </span>
      </section>
    );
  }

  /**
   * renders the weather data based on the props
   */
  renderWeatherContent() {
    const { icon, text } = this.props.current.condition;
    return (
      <React.Fragment>
        <h1 className="is-size-3">{this.props.current.day}'s Weather</h1>
        <img src={icon} alt="this is a weather icon" />
        <h1>{this.props.country}</h1>
        <h1>{text}</h1>
        <h1 data-testid="temperature">{this.state.temperature}</h1>
      </React.Fragment>
    );
  }

  render() {
    return (
      <section className="main">
        {this.renderWeatherContent()}
        {this.renderTempButtons()}
      </section>
    );
  }
}




export default MainContents;
