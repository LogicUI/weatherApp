import Calendar from './Calendar';

/**
 * gets the day name based on the date valued parsed
 */
const getDateName = (element) => {
  const newDay = new Calendar();
  newDay.setNewDate(element.date);
  return newDay.getDayName();
};

/**
 * takes the api data and create a new array of objects of data the app requires
 */
const mapForeCastToDays = (array) => {
  return array.map((elements) => {
    const dayName = getDateName(elements);
    return {
      date: elements.date,
      condition: elements.day.condition,
      avgtemp: {
        temp_c: elements.day.avgtemp_c,
        temp_f: elements.day.avgtemp_f
      },
      day: dayName
    };
  });
};

export default mapForeCastToDays;
