import apixu from '../apis/apixu';

/**
 * fetches the  forecasted api data using the country name as the query
 * @param {*} country the name of the country to fetch the api from
 */
const searchWeatherData = async (country) => {
  const response = await apixu.get('forecast.json', {
    params: {
      key: 'cccb75dd9c9942cf958131844190806',
      q: country,
      days: 5
    }
  });

  return response.data;
};

export default searchWeatherData;
