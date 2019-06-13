/**
 * takes the api data and create a new array of objects of data the app requires
 */
const mapForeCastToDays = (array) => {
  return array.map((elements) => {
    return {
      date: elements.date,
      condition: elements.day.condition,
      avgtemp: { avgtemp_c: elements.day.avgtemp_c, avgtemp_f: elements.day.avgtemp_f },
    };
  });
};

export default mapForeCastToDays;

