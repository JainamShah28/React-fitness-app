import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './index.css';

import Home from './pages/Home.js';
import Navbar from './components/Navbar.js';
import ExerciseDetail from './pages/ExerciseDetail.js';
import Footer from './components/Footer.js';

function App() {
    return (
        <div className="App bg-[#FFFAFB] box-border pt-4 sm:pt-6 md:pt-8 md:justify-start">
            <div className="main-container box-border w-full max-w-[1280px] xl:mx-auto">
                <Navbar />

                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/exercise/:id' element={<ExerciseDetail />} />
                </Routes>
            </div>

            <Footer />
        </div>
    );
}

export default App;