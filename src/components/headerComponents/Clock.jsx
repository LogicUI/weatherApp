import React from 'react';
import '../../scss/generalized.scss';
import moment from 'moment';
import 'moment-timezone';


/**
 * Shows the date and a clock that ticks every second based on the country timezone
 */
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: moment().tz(this.props.time).format('LTS')
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
   * renders a new clock that ticks 1 second later 
   */
  tick() {
    this.setState({
      time: moment().tz(this.props.time).format('LTS')
    })
  }

  render() {
    return <h1 className="is-size-5 ">{this.state.time}</h1>;
  }
}

export default Clock;
