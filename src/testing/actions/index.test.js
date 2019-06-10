import { fetchWeather } from '../../actions';
import * as types from '../../types/types';
import * as geolocation from '../../apis/getCurrentPosition';
import * as weather from '../../actions/actionHelper';

geolocation.getCurrentPosition = jest.fn();
weather.getWeatherData = jest.fn();


