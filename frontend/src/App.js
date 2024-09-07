
import React from 'react'
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import About from './pages/AboutUs/AboutUs'
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';
import Footer from './components/Footer/Footer';
import Dashboard from './pages/Dashboard/dashboard'
import PatientForm from './pages/Dashboard/PatientForm';
import PatientDetails from './pages/Dashboard/PatientDetails';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';

export default function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about-us' element={<About />} />
      <Route path='/sign-in' element={<SignIn />} />
      <Route path='/sign-up' element={<SignUp />} />
      <Route path='/dashboard' element={<Dashboard/>} />
      <Route path="/add-patient" component={<PatientForm/>} />
      <Route path="/patient/:id" component={<PatientDetails/>} />'
    </Routes>
     <Footer />
    </BrowserRouter>
  )
}