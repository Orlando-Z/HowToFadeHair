import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import Appointment from './pages/Appointment';
import BarberClassInfo from './pages/BarberClassInfo';
import FAQ from './pages/FAQ';
import HairCut from './pages/HairCutInfo';
 
function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='contact' element={<ContactPage />} />
        <Route path='appointment' element={<Appointment />} />
        <Route path='classes' element={<BarberClassInfo />} />
        <Route path='FAQ' element={<FAQ />} />
        <Route path='haircuts' element={<HairCut />} />
      </Routes>
      <Footer />
   </div>
  );
}

export default App;
