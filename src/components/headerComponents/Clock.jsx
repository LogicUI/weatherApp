import React from 'react';
import "../../scss/generalized.scss";


/**
 * Shows the date and a clock that ticks every second
 */
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleTimeString()
    };
  }
  /**
   * let the clock tick every 1 second 
   * created intervalID for clearing later
   */
  componentDidMount() {
    this.intervalID = setInterval(() => this.tick(), 1000);
  }
  /**
   * clears the interval clock once the component unmount
   */
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  /**
   * changes to a new time
   */
  tick() {
    this.setState({
      time: new Date().toLocaleTimeString()
    });
  }

  render() {
    return <h1 className="is-size-5 ">{this.state.time}</h1>;
  }
}

export default Clock
