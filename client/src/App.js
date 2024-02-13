import React from 'react';
import { Routes, Route } from 'react-router-dom';
import 'tailwindcss/tailwind.css';
import Dashboard from './user_pages/dashboard.js';
import Error from './user_pages/error.js';
import Login from './user_pages/login.js';
import Chat from './user_pages/chat.js';
import PrescriptionDb from './user_pages/prescription_db.js';

function App() {
    return (
	    <Routes>
            <Route exact path="/" element={<Dashboard/>}></Route>
            <Route exact path="/dashboard" element={<Dashboard/>}></Route>
            <Route exact path="/prescriptions" element={<PrescriptionDb/>}></Route>
            <Route exact path="/login" element={<Login/>}></Route>
            <Route exact path="/chat" element={<Chat/>}></Route>
            <Route exact path="/error" element={<Error/>}></Route>
            <Route path="*" element={<Error/>}/>
	    </Routes>
    );
}

export default App;