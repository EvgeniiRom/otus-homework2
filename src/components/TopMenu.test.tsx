import React from 'react';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import TopMenu, { ModeButtonType } from './TopMenu';

const mockedUserNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom') as any,
    useNavigate: () => mockedUserNavigate,
}));

test('TopMenu - Mode click', () => {
    let lastMode: ModeButtonType | undefined;

    function onModeClick(mode: ModeButtonType) {
        lastMode = mode;
    }

    render(<TopMenu onClick={onModeClick} />);
    const runButton = screen.getByRole('button', { name: 'Run' });
    const pauseButton = screen.getByRole('button', { name: 'Pause' });
    const clearButton = screen.getByRole('button', { name: 'Clear' });
    fireEvent.click(runButton)
    expect(lastMode).toBe('run')
    fireEvent.click(pauseButton)
    expect(lastMode).toBe('pause')
    fireEvent.click(clearButton)
    expect(lastMode).toBe('clear')
});

test('TopMenu - Generate click', () => {
    let lastRand: number = 0;

    function onRandClick(value: number) {
        lastRand = value;
    }

    render(<TopMenu onRandomClick={onRandClick} />);
    const textbox = screen.getByRole('textbox');
    const genButton = screen.getByRole('button', { name: 'Generate' });
    fireEvent.click(genButton)
    expect(lastRand).toBe(50);
    fireEvent.change(textbox, { target: { value: '20' } });
    fireEvent.click(genButton)
    expect(lastRand).toBe(20);
    fireEvent.change(textbox, { target: { value: '77%' } });
    fireEvent.click(genButton)
    expect(lastRand).toBe(77);
});

test('TopMenu - Render labels', () => {
    render(<TopMenu text='some text' />);
    const label1 = screen.getByText('some text');
    expect(label1).toBeInTheDocument();
});