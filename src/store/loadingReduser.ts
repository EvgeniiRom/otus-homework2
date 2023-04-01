const LOADING = 'src/store/loading/LOADING';
const SUCCESS = 'src/store/loading/SUCCESS';
const ERROR = 'src/store/loading/ERROR';

type ActionType = typeof LOADING | typeof SUCCESS | typeof ERROR;

interface Action {
    type: ActionType,
    value?: string
}

interface LoadingState {
    isLoading: boolean,
    data?: string,
    error?: string
}

const initState: LoadingState = {
    isLoading: false
}

export default function loadingReduser(state: LoadingState = initState, action: Action): LoadingState {
    switch (action.type) {
        case LOADING:
            return { isLoading: true }
        case SUCCESS:
            return { isLoading: false, data: action.value }
        case ERROR:
            return { isLoading: false, error: action.value }
        default:
            return state
    }
}

export const loading = (): Action => {
    return { type: LOADING }
}

export const successLoad = (data: string): Action => {
    return { type: SUCCESS, value: data }
}

export const errorLoad = (error: string): Action => {
    return { type: ERROR, value: error }
}