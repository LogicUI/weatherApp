import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';
import 'jest-dom/extend-expect';
import MainContents from '../../src/components/mainComponents/MainContents';

describe('testing of main component', () => {
  afterEach(cleanup);

  let current;
  beforeEach(() => {
    current = {
      avgtemp: {
        temp_c: 32,
        temp_f: 78
      },
      condition: {
        icon: '//cdn.apixu.com/weather/64x64/day/116.png',
        text: 'Partly cloudy'
      },
      day: 'Today'
    };
  });

  it('should first render celsius when the component first rendered', () => {
    const { getByTestId } = render(<MainContents current={current} />);
    const temperature = getByTestId('temperature').textContent;
    expect(temperature).toBe(`32 °C`);
  });

  it('should render todays weather as the forecasted day', () => {
    const { getByTestId } = render(<MainContents current={current} />);
    const today = getByTestId('weather-day').textContent;
    expect(today).toBe("Today's Weather");
  });

  it('should render the weather correctly', () => {
    const { getByTestId } = render(<MainContents current={current} />);
    const weather = getByTestId('weather-forecast').textContent;
    expect(weather).toBe('Partly cloudy');
  });

  it('should change the temperature to Farenheit when Farenheit button is pressed', () => {
    const { getByTestId, getByText } = render(
      <MainContents current={current} />
    );
    const button = getByText(/Farenheit/i);
    fireEvent.click(button);
    const temperature = getByTestId('temperature').textContent;
    expect(temperature).toBe(`78 °F`);
  });

  it('should change the temperature to Celsius when Celsius button is pressed', () => {
    const { getByTestId, getByText } = render(
      <MainContents current={current} />
    );
    const buttonF = getByText(/Farenheit/i);
    fireEvent.click(buttonF);
    const buttonC = getByText(/Celsius/i);
    fireEvent.click(buttonC);
    const temperature = getByTestId('temperature').textContent;
    expect(temperature).toBe('32 °C');
  });
});
