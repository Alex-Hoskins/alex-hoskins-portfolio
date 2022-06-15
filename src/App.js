import React from 'react';
// import { useEffect, useState } from 'react';
import './App.css';
import { Route, Routes, Switch } from "react-router-dom";
import Navigation from './components/Navigation';
import ProjectList from './components/ProjectsList';
import Home from './components/Home';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App=()=>{
  return (
    <div className="app">
      <Navigation/>
      <div>
        <Routes>
            <Route exact path="/projects" element={<ProjectList chicken={'chicken'}/>}/>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/contact" element={<Contact/>}/>
        </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
