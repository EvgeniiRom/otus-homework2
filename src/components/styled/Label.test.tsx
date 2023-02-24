import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Label from './Label';

test('render Label', () => {
    render(<Label>Hello, I`m label</Label>);
    const labelElement = screen.getByText(/Hello, I`m label/);
    expect(labelElement).toBeInTheDocument();
});

test('render Label', () => {
    render(<Label>Another text</Label>);
    const labelElement = screen.getByText(/Another text/);
    expect(labelElement).toBeInTheDocument();
});