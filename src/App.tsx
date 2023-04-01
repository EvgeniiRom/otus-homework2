import React from 'react'
import { BrowserRouter, HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import GlobalStyle from './components/styled/GlobalStyle';
import Game from "./pages/Game"
import Login from './pages/Login';

const App = () => {
    return <>
        <GlobalStyle />
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/game" element={<Game />} />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </BrowserRouter>
    </>
}

export default App;