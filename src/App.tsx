import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import GlobalStyle from './components/styled/GlobalStyle';
import Game from "./pages/Game"
import Login from './pages/Login';
import { Provider } from 'react-redux';
import { setupStore } from './store';

const store = setupStore();

const App = () => {
    return <>
        <GlobalStyle />
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/game" element={<Game />} />
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </BrowserRouter>
        </Provider>
    </>
}

export default App;