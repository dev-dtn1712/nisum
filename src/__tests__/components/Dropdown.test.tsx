import React from 'react';
import { render, screen } from '@testing-library/react';
import Dropdown from '../../components/Dropdown';

describe('Test Dropdown component', () => {
  const onChange = jest.fn();
  const mockItems = ['00:00', '00:30', '01:00'];

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Check Label', () => {
    render(<Dropdown label="test" items={mockItems} onChange={onChange} />);
    expect(screen.getByText('test')).toBeInTheDocument();
  });

  it('Check Item', () => {
    render(<Dropdown label="test" items={mockItems} onChange={onChange} />);
    expect(screen.getByText('01:00')).toBeInTheDocument();
  });
});