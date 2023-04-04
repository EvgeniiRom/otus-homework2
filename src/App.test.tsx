import React from 'react';
import '@testing-library/jest-dom';
import { fireEvent, queryByAttribute, screen } from '@testing-library/react';
import App from './App';
import { PLAYER_NAME_KEY } from './AppConstants';
import { renderWithProviders } from './utils/testUtils';

test('Login test', () => {
    const dom = renderWithProviders(<App />);
    const textbox = screen.getByRole('textbox');
    const button = screen.getByRole('button', { name: 'OK' });
    fireEvent.change(textbox, { target: { value: 'some name' } });
    fireEvent.click(button);

    expect(localStorage.getItem(PLAYER_NAME_KEY)).toBe('some name');
    expect(location.pathname).toBe('/game');
    const label = screen.getByText('some name');
    expect(label).toBeInTheDocument();

    const getById = queryByAttribute.bind(null, 'id');
    const logoutButton = getById(dom.container, 'logout_button');
    expect(logoutButton).not.toBeNull();
    fireEvent.click(logoutButton as HTMLElement);

    expect(location.pathname).toBe('/');
    expect(localStorage.getItem(PLAYER_NAME_KEY)).toBeNull();
    const loginLabel = screen.getByText('Кто ты, воин?');
    expect(loginLabel).toBeInTheDocument();
});