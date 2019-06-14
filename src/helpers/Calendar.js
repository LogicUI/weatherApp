/**
 * A utility Calendar class used for generating the date name based on string format
 */
class Calendar {
  constructor(value) {
    this._date = new Date(value);
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



  getDayName() {
    return this._DAYS[this._date.getDay()];
  }

}


export default Calendar;