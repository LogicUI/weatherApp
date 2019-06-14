import React from 'react';
import { render, cleanup } from 'react-testing-library';
import '@testing-library/react/cleanup-after-each';
import 'jest-dom/extend-expect';
import Header from './components/headerComponents/HeaderContent.jsx';

afterEach(cleanup);

it('should change the value based on the state changed', () => {


});
