import React, { useEffect, useState } from "react";
import GameField from "./components/GameField";
import { equalMatrix, Field, generateField, generateNextGeneration } from "./common/Tools";
import "./styles/App.css";
import TopMenu, { ModeButtonType } from "./components/TopMenu";
import BottomMenu, { SizeButtonType, SpeedButtonType } from "./components/BottomMenu";

const App = () => {
    const [field, setField] = useState<Field>(generateField(50, 30));
    const [mode, setMode] = useState<ModeButtonType>('pause');
    const [speed, setSpeed] = useState<SpeedButtonType>('medium');
    const [size, setSize] = useState<SizeButtonType>('50x30');

    const sizeWH = size.split('x').map(item => parseInt(item));
    const width = sizeWH[0];
    const height = sizeWH[1];

    useEffect(() => {
        setField(generateField(width, height));
    }, [width, height]);

    useEffect(() => {
        if (mode === 'run') {
            let intervalValue = 400;
            if (speed === 'slow') intervalValue = 600;
            if (speed === 'fast') intervalValue = 150;
            const interval = setInterval(() => {
                const nextGen = generateNextGeneration(field);
                setField(nextGen);
                if (equalMatrix(field.data, nextGen.data)) {
                    setMode('pause');
                }
            }, intervalValue);
            return () => { clearTimeout(interval) }
        }
    }, [mode, speed, field, width, height]);

    const onCellClick = mode === 'pause' ? (x: number, y: number) => {
        const fieldData = field.data.map((row, i) => row.map((cell, j) => ((i === x && j === y) ? (cell > 0 ? 0 : 1) : cell)));
        setField({ ...field, data: fieldData })
    } : undefined

    const onTopMenuClick = (type: ModeButtonType) => {
        if (type === 'clear') {
            setMode('pause');
            setField(generateField(width, height));
        } else {
            setMode(type);
        }
    }

    return <div>
        <TopMenu active={mode} onClick={onTopMenuClick} text={`Generation: ${field.generation}`} />
        <div className="fieldbg">
            <div className="field">
                <GameField field={field.data} onCellClick={onCellClick} />
            </div>
        </div>
        <BottomMenu activeSize={size} activeSpeed={speed} onSizeClick={setSize} onSpeedClick={setSpeed} />
    </div>
}

export default App;