
import React from 'react'
import Home from './pages/Home/Home';
import About from './pages/AboutUs/AboutUs'
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';

export default function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about-us' element={<About />} />
    </Routes>
     <Footer />
    </BrowserRouter>

  )
}
