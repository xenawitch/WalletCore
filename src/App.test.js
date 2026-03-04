// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders WalletCore title', () => {
    render(<App />);
    const titleElement = screen.getByText(/WalletCore/i);
    expect(titleElement).toBeInTheDocument();
});
