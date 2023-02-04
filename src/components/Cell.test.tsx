import React from 'react';
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import Cell from './Cell';

test('cell test', async () => {
    render(<Cell size={10} />);
    expect(screen.getByText('0')).toBeInTheDocument();
    await userEvent.click(screen.getByText('0'));

    expect(screen.getByText('1')).toBeInTheDocument();
    await userEvent.click(screen.getByText('1'));

    expect(screen.getByText('2')).toBeInTheDocument();
    await userEvent.click(screen.getByText('2'));

    expect(screen.getByText('0')).toBeInTheDocument();
    await userEvent.click(screen.getByText('0'));
})