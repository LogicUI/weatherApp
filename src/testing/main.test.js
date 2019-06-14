import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';
import 'jest-dom/extend-expect';
import MainContents from '../../src/components/mainComponents/MainContents';

// describe('testing of main component', () => {
//   afterEach(cleanup);

//   it('should first render celsius when the component first rendered', () => {
//     const temperature = getByTestId('temperature');
//     expect(temperature).toMatch(/^\d{2/);
//   });
// });
// this.props.current.avgtemp.temp_c;
