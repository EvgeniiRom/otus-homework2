interface UserStatState {
    login: boolean
    name?: string
    buttonClicks: Record<string, number>
}

type ActionType = 'LOGIN' | 'LOGOUT' | 'CLICK'

interface Action {
    type: ActionType,
    value?: string
}

const initState: UserStatState = {
    login: false,
    buttonClicks: {}
}

export const userStatReduser = (state: UserStatState = initState, action: Action): UserStatState => {
    const value = action.value;
    switch (action.type) {
        case 'LOGIN':
            return { ...initState, name: value, login: true }
        case 'LOGOUT':
            return initState
        case 'CLICK':
            if (value) {
                const clickCount = (state.buttonClicks[value] || 0) + 1;
                return {...state, buttonClicks: {...state.buttonClicks, [value]: clickCount}}
            }
        default:
            return state
    }
}