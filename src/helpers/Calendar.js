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
    this._date = new Date(value);
  }

  _getNewDate() {
    return this._date.getDate();
  }

  getDayName() {
    return this._DAYS[this._date.getDay()];
  }

  _getMonthName() {
    return this._MONTHS[this._date.getMonth()];
  }

  _getYear() {
    return this._date.getFullYear();
  }

  /**
   * generate date in a format such as Monday , 11 June 2019
   */
  generateDate(){
    return `${this.getDayName()} , ${this._getNewDate()} ${this._getMonthName()} ${this._getYear()}`;
  }

}


export default Calendar;