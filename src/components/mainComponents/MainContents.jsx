import React, { Component } from 'react';
import '../../scss/main.scss';


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
    if (this.props.current.avgtemp.temp_c !== this.state.temperature) {
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
    if (this.props.current.avgtemp.temp_f !== this.state.temperature) {
      this.setState({
        temperature: `${this.props.current.avgtemp.temp_f} °F`,
        changed: false
      });
    }
  };

  render() {
    const { icon, text } = this.props.current.condition;

    return (
      <section className="main">
        <h1 className="is-size-3">{this.props.current.day}'s Weather</h1>
        <img src={icon} alt="this is a weather icon" />
        <h1>{this.props.country}</h1>
        <h1>{text}</h1>
        <h1 data-testid="temperature">{this.state.temperature}</h1>
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
      </section>
    );
  }
}

export default MainContents;
