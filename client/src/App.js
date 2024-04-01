import React from 'react';
import { Routes, Route } from 'react-router-dom';
import 'tailwindcss/tailwind.css';
import Login from './user_pages/login.js';
import Dashboard from './user_pages/dashboard.js';
import Error from './user_pages/error.js';
import Chat from './user_pages/chat.js';
import Prescription from './user_pages/prescription.js';
import ComingSoon from './user_pages/coming-soon.js';

import DocLogin from './doctor_pages/login.js';
import DocDashboard from './doctor_pages/dashboard.js';
import DocPrescription from './doctor_pages/prescription.js';

function App() {
    return (
	    <Routes>
            <Route exact path="/" element={<Login/>}></Route>
            <Route exact path="/login" element={<Login/>}></Route>
            <Route exact path="/dashboard" element={<Dashboard/>}></Route>
            <Route exact path="/prescriptions" element={<Prescription/>}></Route>
            <Route exact path="/chat" element={<Chat/>}></Route>
            <Route exact path="/doc-login" element={<DocLogin/>}></Route>
            <Route exact path="/doc-dashboard" element={<DocDashboard/>}></Route>
            <Route exact path="/doc-prescriptions" element={<DocPrescription/>}></Route>
            <Route exact path="/coming-soon" element={<ComingSoon/>}></Route>
            <Route exact path="/error" element={<Error/>}></Route>
            <Route path="*" element={<Error/>}/>
	    </Routes>
    );
}

export default App;