import apixu from '../apis/apixu';

const searchWeatherData = async(country) => {
    const response = await apixu.get("forecast.json",{
        params: {
            key: 'cccb75dd9c9942cf958131844190806',
            q:country,
            days:5
        }
    })
    return response.data;
}

export default searchWeatherData;

