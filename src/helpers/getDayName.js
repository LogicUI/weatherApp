/**
 * gets the day name based on the date passed in
 * used a closure so that the days array dont get reinstationate in each function call 
 * @param {*} value date value to pass
 */
const daysName = () => {
  const Days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ];
  return (value) => {
    const date = new Date(value);
    return Days[date.getDay()];
  }
};

const getDayName = daysName();

export default getDayName;
