import React, { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

interface ButtonProps {
    text?: string
    state?: 'none' | 'active'
    onClick?: () => void
}

const mainStyle = {
    background: '#222',
    color: '#ddd',
    display: 'inline-block',
    width: '140px',
    height: '27px',
    fontSize: '16px',
    borderRadius: '5px',
}

const activeStyle = {
    background: '#faa',
    color: '#222'
}

const Button = (props: ButtonProps) => {
    const { text = '', state = 'none', onClick = () => { } } = props;
    let buttonStyle = { ...mainStyle };
    if (state === 'active') {
        buttonStyle = { ...buttonStyle, ...activeStyle }
    }
    return <button onClick={onClick} style={buttonStyle}>{text}</button>
}

export default Button;