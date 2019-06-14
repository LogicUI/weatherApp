/**
 * gets the day name based on the date passed in
 * @param {*} value date value to pass
 */
const getDayName = (value) => {
  const date = new Date(value);
  const Days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ];
  return Days[date.getDay()];
};

export default getDayName;
