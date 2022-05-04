const { render, screen } = require('@testing-library/react');
import App from './App.jsx';

describe('App', () => {
  it('Happy-path functionality of the app', async () => {
    render(<App />);
    const loading = screen.getByText(/loading/i);
    const rick = await screen.findByText(/rick sanchez/i);
  });
});
