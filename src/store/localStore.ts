import { PLAYER_NAME_KEY } from "../AppConstants"
import { Action, login, logout } from "./userStatReduser"

export const startThunkFactory = () => (dispatch: (action: Action) => void) => {
    const name = localStorage.getItem(PLAYER_NAME_KEY);
    if (name) {
        dispatch(login(name));
    }
}

export const loginThunkFactory = (name: string) => (dispatch: (action: Action) => void) => {
    localStorage.setItem(PLAYER_NAME_KEY, name);
    dispatch(login(name));
}

export const logoutThunkFactory = () => (dispatch: (action: Action) => void) => {
    localStorage.removeItem(PLAYER_NAME_KEY);
    dispatch(logout());
}