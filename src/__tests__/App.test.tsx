import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App tests', () => {
  it('renders test message', () => {
    render(<App />);
    expect(screen.getByText('Test Project')).toBeInTheDocument();
  });
});