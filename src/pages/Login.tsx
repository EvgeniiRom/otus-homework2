import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import TextDialog from '../components/TextDialog';
import { login, loginSelector } from '../store/userStatReduser';

const Login = () => {
    const isLogin = useSelector(loginSelector);
    const dispatch = useDispatch();

    const onOk = (value: string) => {
        if (value.trim().length > 0) {
            dispatch(login(value));
        }
    }

    return <>
        <TextDialog message="Кто ты, воин?" onOk={onOk} />
    </>
}

export default Login;