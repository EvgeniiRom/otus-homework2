import React from "react";
import Cell, { CellProps } from "./Cell";

interface GameFieldProps {
    field: number[][]
    onCellClick?: (x: number, y: number) => void
}

const getCellStateByFieldCell = (cell: number): CellProps['state'] => {
    switch (cell) {
        case 1: return 'young';
        case 2: return 'old';
        default: return 'dead';
    }
}

const GameField = (props: GameFieldProps) => {
    const { field, onCellClick = () => { } } = props;

    return <div style={{ width: 'fit-content' }}>
        {field.map((row, i) => <div key={i} style={{ display: 'flex', flexDirection: 'row' }}>
            {row.map((cell, j) => <Cell key={j} state={getCellStateByFieldCell(cell)} onClick={() => { onCellClick(i, j) }} />)}
        </div>)}
    </div>
}

export default GameField;