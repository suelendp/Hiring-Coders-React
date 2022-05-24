import React from "react";
import {BrowserRouter, Routes, Route, } from 'react-router-dom';
import Repositories from './pages/Repositories';
import Home from './pages/Home';


export default function Rota(){
    return (
    <BrowserRouter>
        <Routes>
            <Route index element={<Home/>} />
            <Route path="/repositories" element={<Repositories/>} />
        </Routes>
    </BrowserRouter>
)
}