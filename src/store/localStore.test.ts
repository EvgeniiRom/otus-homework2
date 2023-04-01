import { PLAYER_NAME_KEY } from "../AppConstants";
import { loginThunkFactory, logoutThunkFactory, startThunkFactory } from "./localStore";
import { login, logout } from "./userStatReduser";

test('local store thunk start', () => {
    const dispatch = jest.fn();
    startThunkFactory()(dispatch);
    expect(dispatch).not.toHaveBeenCalled();

    loginThunkFactory("player")(dispatch);
    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(dispatch).toHaveBeenLastCalledWith(login("player"));
    expect(localStorage.getItem(PLAYER_NAME_KEY)).toEqual("player");

    logoutThunkFactory()(dispatch);    
    expect(dispatch).toHaveBeenCalledTimes(2);
    expect(dispatch).toHaveBeenLastCalledWith(logout());
    expect(localStorage.getItem(PLAYER_NAME_KEY)).toBeNull();
    
    localStorage.setItem(PLAYER_NAME_KEY, "another player")
    startThunkFactory()(dispatch);
    expect(dispatch).toHaveBeenCalledTimes(3);
    expect(dispatch).toHaveBeenLastCalledWith(login("another player"));
})