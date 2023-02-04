import React from "react";
import { useState } from "react";

interface CellProps {
    size: number
}

const Cell = (props: CellProps) => {
    const [state, setState] = useState(0);

    const onClick = () => {
        setState((state + 1) % 3);
    }

    const cellSize = props.size;

    return <div style={{ width: cellSize, height: cellSize, backgroundColor: '#f00' }} onClick={onClick}>
        {state}
    </div>
}

export default Cell;