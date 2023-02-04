import React from "react";
import Button from "./Button"
import Label from "./Label";

export type ModeButtonType = 'run' | 'pause' | 'clear';

export interface TopMenuProps {
    active?: ModeButtonType
    onClick?: (type: ModeButtonType) => void
    text?: string
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
    borderRadius: '15px 15px 0 0',
    marginTop: '50px'
}

const TopMenu = (props: TopMenuProps) => {
    const { active, onClick = (type: ModeButtonType) => { }, text = '' } = props;
    return <div style={style}>
        <Button text="Run" onClick={() => { onClick('run') }} state={active === 'run' ? 'active' : 'none'} />
        <Button text="Pause" onClick={() => { onClick('pause') }} state={active === 'pause' ? 'active' : 'none'} />
        <Button text="Clear" onClick={() => { onClick('clear') }} state={active === 'clear' ? 'active' : 'none'} />
        <Label text={text} />
    </div>
}

export default TopMenu;