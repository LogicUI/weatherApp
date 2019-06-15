import getDayName from './getDayName';

/**
 * takes the forecast  data from the api and extract data into a new array of objects
 * @param array array of objects containing forecast details 
 */
const mapForeCastToDays = (array) => {
  // slice the forecast data from the following day as the first item is the current forecasted weather
  const neededData = array.slice(1);
  return neededData.map((elements) => {
    const dayName = getDayName(elements.date);
    return {
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
