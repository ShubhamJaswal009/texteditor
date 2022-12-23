import './App.css';
import { useState } from 'react'
import TextForm from './components/TextForm.js'
import Navbar from './components/Navbar.js';
import AboutUs from './components/About.js';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    } else {
      setMode('dark');
      document.body.style.backgroundColor = '#404258';
    }
  }

  return (
    <Router>
      <Navbar title={'Bhujia'} aboutText={'About Us'} mode={mode} toggleMode={toggleMode} />
      <Routes>
        <Route path='/' element={<TextForm heading='Enter text here' mode={mode} />} />
        <Route path='/home' element={<TextForm heading='Enter text here' mode={mode} />} />
        <Route path='/about' element={<AboutUs mode={mode} />} />
      </Routes>
    </Router>
  );
}

export default App;
