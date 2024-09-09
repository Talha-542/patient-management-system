import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import About from './pages/AboutUs/AboutUs';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';
import Footer from './components/Footer/Footer';
import Dashboard from './pages/Dashboard/dashboard';
import PatientDetails from './pages/Dashboard/PatientDetails';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import ContactUs from './pages/Contact/Contact';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
        <Route path="/patient/:id" element={<PatientDetails />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
