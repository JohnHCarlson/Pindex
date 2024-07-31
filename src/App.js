import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Search from './pages/Search';
import About from './pages/About';
import NavBar from './components/MainNav';

import './App.css';
import PinCard from './components/PinCard';

const dummyPin = {
  image: 'https://via.placeholder.com/150',
  title: 'Election Pin 2023',
  description: 'A pin from the 2023 election campaign.',
  candidateNames: ['John Doe', 'Jane Smith'],
  candidateOffices: ['President', 'Vice President'],
  locations: ['New York', 'California'],
  year: 2023,
  district: 'District 9',
  issues: ['Healthcare', 'Education', 'Economy'],
  candidateWon: true,
  isFake: false,
  againstCandidate: false,
  notes: 'This pin was widely distributed during the campaign.'
};

function App() {
  return (
    <Router>
      <div>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/about" element={<About />} />
          <Route path="/pin" element={<PinCard pin={dummyPin} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
