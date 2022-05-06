import { render, screen } from '@testing-library/react';
import App from './App.jsx';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';

describe('App', () => {
  it('Happy-path functionality of the app', async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    const loading = screen.getByText(/loading/i);
    const rick = await screen.findByText(/rick sanchez/i);
    userEvent.click(rick);
    await screen.findByAltText('Image of Rick Sanchez');
    await screen.findByText(/human/i);
    const returnButton = screen.getByRole('button', {
      name: /return to character list/i,
    });
    userEvent.click(returnButton);
    await screen.findByText(/rick and morty characters/i);
  });
});
