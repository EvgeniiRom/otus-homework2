import React from "react"
import { useSelector } from "react-redux";
import styled from "styled-components";
import { clickSelector } from "../store/userStatReduser";

const DivColumn = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 5px;
    left: 5px;
    color: black;
    border-radius: 5px;
    border: solid 1px black;
    padding: 5px;
    background-color: #eee5;
`

const LogInfo = () => {
    const clicks = useSelector(clickSelector);
    const buttons = Object.getOwnPropertyNames(clicks);
    return <DivColumn>
        <div>Кол-во нажатий:</div>
        {buttons.map(button => <div key = {button}>
            {`${button} ${clicks[button]}`}
        </div>)}
    </DivColumn>
}

export default LogInfo;