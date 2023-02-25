import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import { PLAYER_NAME_KEY } from '../AppConstants';
import TextDialog from '../components/TextDialog';

const Login = () => {
    const navigate = useNavigate();

    const onOk = (value: string) => {
        if (value.trim().length > 0) {
            localStorage.setItem(PLAYER_NAME_KEY, value);
            navigate("/game");
        }
    }

    const playerName = localStorage.getItem(PLAYER_NAME_KEY);
    return <>
        {playerName && <Navigate to='/game' replace />}
        <TextDialog message="Кто ты, воин?" onOk={onOk} />
    </>
}

export default Login;