import getDayName from "./getDayName";


/**
 * takes the forecast  data from the api and extract data into a new array of objects
 */
const mapForeCastToDays = (array) => {
  return array.map((elements) => {
    const dayName = getDayName(elements);
    return {
      condition: elements.day.condition,
      avgtemp: {
        temp_c: elements.day.avgtemp_c,
        temp_f: elements.day.avgtemp_f
      },
      day: dayName
    };
  }).slice(1);
};

export default mapForeCastToDays;
