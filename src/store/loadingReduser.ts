interface LoadingState {
    isLoading: boolean,
    data?: string,
    error?: string
}

type ActionType = 'LOADING' | 'SUCCESS' | 'ERROR'

interface Action {
    type: ActionType,
    value?: string
}

const initState: LoadingState = {
    isLoading: false
}

export const loadingReduser = (state: LoadingState = initState, action: Action): LoadingState => {
    switch (action.type) {
        case 'LOADING':
            return { isLoading: true }
        case 'SUCCESS':
            return { isLoading: false, data: action.value }
        case 'ERROR':
            return { isLoading: false, error: action.value }
        default:
            return state
    }
}