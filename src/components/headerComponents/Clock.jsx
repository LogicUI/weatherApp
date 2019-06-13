import React from 'react';
import '../../scss/generalized.scss';

/**
 * Shows the date and a clock that ticks every second
 */
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: this.props.time
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

  _updateTime(value) {
    let time = value.split(':');

    let [hours, mins, seconds] = time;

    if (seconds < 59) {
      seconds++;
    } else {
      seconds = 0;
      if (mins < 59) {
        mins++;
      } else {
        mins = 0;
        if (hours < 23) {
          hours++;
        } else {
          hours = 0;
        }
      }
    }

    if (!hours[0] && hours < 10) {
      hours = `0${hours}`;
    }

    if (!mins[0] && mins < 10) {
      mins = `0${mins}`;
    }

    if (!seconds[0] && seconds < 10) {
      seconds = `0${seconds}`;
    }

    return `${hours}:${mins}:${seconds}`;
  }

  /**
   * changes to a new time
   */
  tick() {
    this.setState((prevState) => ({
      time: this._updateTime(prevState.time)
    }));
  }

  render() {
    return <h1 className="is-size-5 ">{this.state.time}</h1>;
  }
}

export default Clock;
