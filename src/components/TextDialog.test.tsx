import React from 'react';
import '@testing-library/jest-dom';
import { fireEvent, screen } from '@testing-library/react';
import TextDialog from './TextDialog';
import { renderWithProviders } from '../utils/testUtils';

test('render TextDialog', () => {
    renderWithProviders(<TextDialog message="Some message" />);
    const message = screen.getByText(/Some message/);
    expect(message).toBeInTheDocument();
});

test('render TextDialog', () => {
    renderWithProviders(<TextDialog message="Another message" />);
    const message = screen.getByText(/Another message/);
    expect(message).toBeInTheDocument();
});

test('ok click test TextDialog', () => {
    let message: string = '';
    const onOk = (value: string) => {
        message = value;
    }

    renderWithProviders(<TextDialog message="Say HELLO" onOk={onOk} />);
    const textbox = screen.getByRole('textbox');
    const button = screen.getByRole('button', { name: 'OK' });
    
    fireEvent.change(textbox, { target: { value: 'hello' } });
    expect(textbox).toHaveValue('hello');
    fireEvent.click(button);
    expect(message).toBe('hello');
    
    fireEvent.change(textbox, { target: { value: 'hi' } });
    expect(textbox).toHaveValue('hi');
    expect(message).toBe('hello');
    fireEvent.click(button);
    expect(message).toBe('hi');
});