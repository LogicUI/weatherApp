import React from 'react';
import CalenderToday from '@material-ui/icons/CalendarToday';

class Calender extends React.Component {
  constructor(props) {
    super(props);
    this.date = new Date();
    this.MONTHS = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ];
    this.DAYS = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday'
    ];
  }

  renderDate() {
    return this.date.getDate();
  }

  renderDay() {
    return this.DAYS[this.date.getDay()];
  }

  renderMonth() {
    return this.MONTHS[this.date.getMonth()];
  }

  renderYear() {
    return this.date.getFullYear();
  }

  render() {
    return (
      <h1>
        <CalenderToday />{this.renderDay()}, {this.renderDate()}{' '}
        {this.renderMonth()} {this.renderYear()})
      </h1>
    );
  }
}

export default Calender;
