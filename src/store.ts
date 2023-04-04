import { combineReducers, configureStore, PreloadedState, Store } from '@reduxjs/toolkit'
import userStatReduser, { loginSaga } from './store/userStatReduser';
import loadingReduser from './store/loadingReduser';
import createSagaMiddleware from 'redux-saga'
import { all } from 'redux-saga/effects'
import { enhancer } from 'addon-redux'

const rootReducer = combineReducers({
    stat: userStatReduser,
    loading: loadingReduser
});

function* rootSaga() {
    yield all([
        loginSaga()
    ])
}

export function setupStore(preloadedState?: PreloadedState<RootState>): Store<RootState> {
    const sagaMiddleware = createSagaMiddleware();
    const store = configureStore({
        preloadedState,
        reducer: combineReducers({ stat: userStatReduser, loading: loadingReduser }),
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
        enhancers: [enhancer]
    })
    sagaMiddleware.run(rootSaga);
    return store;
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']