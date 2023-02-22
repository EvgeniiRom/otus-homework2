import React from "react";

export interface CellProps {
    state?: 'dead' | 'young' | 'old'
    onClick?: () => void
}

const Cell = (props: CellProps) => {
    const { state, onClick } = props;

    let backgroundColor = "#aaa";
    switch (state) {
        case 'young':
            backgroundColor = "#f22";
            break;
        case 'old':
            backgroundColor = "#a22";
            break;
    }

    return <div style={{ border: 'solid 1px #000', width: 10, height: 10, backgroundColor: backgroundColor }} onClick={onClick} />
}

export default Cell;