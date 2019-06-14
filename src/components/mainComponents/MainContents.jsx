import React, { Component } from 'react';
import '../../scss/main.scss';

class MainConents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: `${this.props.current.avgtemp.temp_c} °C`,
      changed: true
    };
  }

  handleOnClickCelcius = () => {
    if (this.props.current.avgtemp.temp_c !== this.state.temperature) {
      this.setState({
        temperature: `${this.props.current.avgtemp.temp_c} °C`,
        changed: true
      });
    }
  };

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
        <h1>{this.state.temperature}</h1>
        <div className="buttons has-addons">
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
        </div>
      </section>
    );
  }
}

export default MainConents;