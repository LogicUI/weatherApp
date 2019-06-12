import apixu from '../apis/apixu';

/**
 * fetches the weather data from the weather api
 * @param latt lattitude 
 * @param long longitude 
 */
const getWeatherData = async (latt, long) => {
  const response = await apixu.get('forecast.json', {
    params: {
      key: 'cccb75dd9c9942cf958131844190806',
      q: `${latt},${long}`,
      days: 5
    }
  });
  return response;
};

export default getWeatherData;
