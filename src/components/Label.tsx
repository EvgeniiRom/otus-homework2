import React from "react"

interface LabelProps {
    text: string
}

const labelStyle = {
    color: '#ddd',
    fontSize: '16px',
    margin: 'auto'
}

const Label = (props: LabelProps) => {
    return <div style={{ display: 'flex' }}><div style={labelStyle}>{props.text}</div></div>
}

export default Label;