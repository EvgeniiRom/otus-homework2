const LOGIN = 'src/store/userStat/LOGIN';
const LOGOUT = 'src/store/userStat/LOGOUT';
const CLICK = 'src/store/userStat/CLICK';

type ActionType = typeof LOGIN | typeof LOGOUT | typeof CLICK;

export interface Action {
    type: ActionType,
    value?: string
}

interface UserStatState {
    login: boolean
    name?: string
    buttonClicks: Record<string, number>
}

const initState: UserStatState = {
    login: false,
    buttonClicks: {}
}

export default function reducer(state: UserStatState = initState, action: Action): UserStatState {
    const value = action.value;
    switch (action.type) {
        case LOGIN:
            return { ...initState, name: value, login: true }
        case LOGOUT:
            return initState
        case CLICK:
            if (value) {
                const clickCount = (state.buttonClicks[value] || 0) + 1;
                return {...state, buttonClicks: {...state.buttonClicks, [value]: clickCount}}
            }
        default:
            return state
    }
}

export const login = (name: string): Action => {
    return {type: LOGIN, value: name}
}

export const logout = (): Action => {
    return {type: LOGOUT}
}

export const buttonClick = (button: string): Action => {
    return {type: CLICK, value: button}
}
