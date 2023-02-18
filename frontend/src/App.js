import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from "./Pages/Home/Home";
import Error from "./Pages/Error/Error";

// import React, { useRef, useState, useEffect } from 'react';
// import { AnimatePresence } from "framer-motion"; // cover Routes with the tag

function App() {
    return (
	    <Routes>
		<Route exact path="/" element={<Home></Home>}></Route>
		<Route exact path="/home" element={<Home></Home>}></Route>
		<Route exact path="/error" element={<Error></Error>}></Route>
		<Route path="*" element={<Error/>}/>
	    </Routes>
    );
}

export default App;
