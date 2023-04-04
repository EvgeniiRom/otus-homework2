import React from 'react'
import { useDispatch, useSelector, useStore } from 'react-redux';
import { PLAYER_NAME_KEY } from '../AppConstants';
import { login, logout, statNameSelector } from '../store/userStatReduser';

const Test = () => {
    const name = useSelector(statNameSelector);
    const dispatch = useDispatch();

    return <div>
        {name}
        {localStorage.getItem(PLAYER_NAME_KEY)}
        <button onClick={() => { dispatch(login("Zhenya")) }}>login</button>
        <button onClick={() => { dispatch(logout()) }}>logout</button>
    </div>
}

export default Test;