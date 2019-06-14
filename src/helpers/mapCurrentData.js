/**
 * 
 * @param {*} current the current obj from the api
 * takes the current obj and map the values to extracted data 
 */
const mapCurrentData = (current) => {
  return {
    condition: { ...current.condition },
    avgtemp: { temp_c: current.temp_c, temp_f: current.temp_f },
    day: 'Today'
  };
};

export default mapCurrentData;
