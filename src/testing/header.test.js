import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';
import 'jest-dom/extend-expect';
import HeaderContent from '../components/headerComponents/HeaderContent.jsx';

afterEach(cleanup);

// Asia / Singapore;

describe('Testing of header component', () => {
  it('should change the text value', () => {
    const { getByTestId } = render(<HeaderContent time={'Asia/Singapore'} />);
    const input = getByTestId('input-test');
    fireEvent.change(input, { target: {value: "a"} });
    expect(input).toHaveAttribute("value","a");
  });
});
