import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';
import 'jest-dom/extend-expect';
import App from '../components/App.jsx';
import getCurrentPosition from '../apis/getCurrentPosition';
import getWeatherData from '../helpers/getWeatherData.js';

jest.mock('../apis/getCurrentPosition');
jest.mock('../helpers/getWeatherData');

describe('test app ', () => {
  afterEach(cleanup);

  let response;

  beforeEach(() => {
    jest.clearAllMocks();
    response = {
      current: {
        condition: {
          icon: '//cdn.apixu.com/weather/64x64/night/116.png',
          text: 'Partly cloudy'
        },
        temp_c: 30,
        temp_f: 86
      },
      location: {
        country: 'Singapore',
        tz_id: 'Asia/Singapore'
      },
      forecast: {
        forecastday: [
          {
            date: '2019-06-16',
            day: {
              condition: {
                code: 1063,
                icon: '//cdn.apixu.com/weather/64x64/day/176.png',
                text: 'Patchy rain possible'
              }
            },
            avgtemp_c: 28.1,
            avgtemp_f: 82.6
          },
          {
            date: '2019-06-17',
            day: {
              condition: {
                code: 1243,
                icon: '//cdn.apixu.com/weather/64x64/day/356.png',
                text: 'Moderate or heavy rain shower'
              }
            },
            avgtemp_c: 28.5,
            avgtemp_f: 83.4
          }
        ]
      }
    };
    getCurrentPosition.mockReturnValue({
      coords: { lattitude: 1.351, longitude: 103.8 } // singapore
    });
    getWeatherData.mockImplementation(()=> response);
  });

  it('should render the main content correctly', () => {
    const { getByTestId,getByText } = render(<App />);
    const temperature = getByTestId('temperature').toBeInTheDocument();
    expect(temperature).toBe(`30 °C`);
  });
});
