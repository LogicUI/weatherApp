import Calendar from './Calendar';

/**
 * takes the api data and create a new array of objects of data the app requires
 */
const mapForeCastToDays = (array) => {
  return array.map((elements) => {
    const getDay = new Calendar();
    getDay.setNewDate(elements.date);
    const dayName = getDay.getDayName();
    return {
      date: elements.date,
      condition: elements.day.condition,
      avgtemp: {
        avgtemp_c: elements.day.avgtemp_c,
        avgtemp_f: elements.day.avgtemp_f
      },
      day: dayName
    };
  });
};

export default mapForeCastToDays;
