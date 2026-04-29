import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="app">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
