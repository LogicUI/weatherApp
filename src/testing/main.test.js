import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';
import 'jest-dom/extend-expect';
import MainContents from '../../src/components/mainComponents/MainContents';
import { JestEnvironment } from '@jest/environment';

describe('testing of main component', () => {


  afterEach(cleanup);



  let current;
  beforeEach(()=> {
      current = {
      avgtemp: {
        temp_c: 32,
        temp_f: 78
      },
      condition: {
        icon: '//cdn.apixu.com/weather/64x64/day/116.png',
        text: 'Partly cloudy'
      },
      day: "Today"
    };
  })

  it('should first render celsius when the component first rendered', () => {
    const { getByTestId } = render(<MainContents current={current} />);
    const temperature = getByTestId('temperature').textContent;
    expect(temperature).toMatch(/\d{2} °C/);
  });




});
