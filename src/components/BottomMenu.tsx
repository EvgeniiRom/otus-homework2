import React from "react";
import Button from "./Button"
import Label from "./Label";

export type SpeedButtonType = 'slow' | 'medium' | 'fast';
export type SizeButtonType = '50x30' | '70x50' | '100x80';

export interface BottomMenuProps {
    activeSpeed?: SpeedButtonType
    activeSize?: SizeButtonType
    onSpeedClick?: (type: SpeedButtonType) => void
    onSizeClick?: (type: SizeButtonType) => void
}

const style = {
    background: '#333',
    margin: '0 auto',
    boxShadow: '0px 16px 30px 0px #200',
    display: 'grid',
    gridTemplateColumns: 'auto auto auto auto',
    rowGap: '5px',
    width: 'calc(580px - 20px)',
    padding: '10px',
    borderRadius: '0 0 15px 15px'
}

const BottomMenu = (props: BottomMenuProps) => {
    const { activeSpeed, activeSize,
        onSpeedClick = (type: SpeedButtonType) => { },
        onSizeClick = (type: SizeButtonType) => { } } = props;

    return <div style={style}>
        <Label text="Board Size:" />
        <Button text="Size: 50x30" onClick={() => { onSizeClick('50x30') }} state={activeSize === '50x30' ? 'active' : 'none'} />
        <Button text="Size: 70x50" onClick={() => { onSizeClick('70x50') }} state={activeSize === '70x50' ? 'active' : 'none'} />
        <Button text="Size: 100x80" onClick={() => { onSizeClick('100x80') }} state={activeSize === '100x80' ? 'active' : 'none'} />
        <Label text="Sim Speed:" />
        <Button text="Slow" onClick={() => { onSpeedClick('slow') }} state={activeSpeed === 'slow' ? 'active' : 'none'} />
        <Button text="Medium" onClick={() => { onSpeedClick('medium') }} state={activeSpeed === 'medium' ? 'active' : 'none'} />
        <Button text="Fast" onClick={() => { onSpeedClick('fast') }} state={activeSpeed === 'fast' ? 'active' : 'none'} />
    </div>
}

export default BottomMenu;