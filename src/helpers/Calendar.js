/**
 * A utility Calendar used for generating the date in a string format
 */
class Calendar {
  constructor() {
    this._date = new Date();
    this._MONTHS = [
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
    this._DAYS = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday'
    ];
  }

  setNewDate(value) {
    this._date = value;
  }

  getNewDate() {
    return this._date.getDate();
  }

  getDayName() {
    return this._DAYS[this._date.getDay()];
  }

  getMonthName() {
    return this._MONTHS[this._date.getMonth()];
  }

  getYear() {
    return this._date.getFullYear;
  }
}


export default Calendar;