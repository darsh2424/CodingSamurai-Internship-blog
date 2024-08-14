import React ,{useState} from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css';
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';
import NavBar from './component/NavBar';
import Footer from './component/footer';
const Index = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [loading, setLoading] = useState(true);  // Loading state
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.style.background = !isDarkMode ? 'black' : 'white';
    document.body.style.color = !isDarkMode ? 'white' : 'black';
  };
  return(
  <React.StrictMode>
    <Router>
      <NavBar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode}/>
      <div  className={`content-container ${loading?'h-100 d-flex align-items-center justify-content-center':''}`}>
        <Routes>
          <Route path="/" element={<Home isDarkMode={isDarkMode} loading={loading}  setLoading={setLoading}/>} />
          <Route path="/about" element={<About isDarkMode={isDarkMode} />} />
          <Route path="/contact" element={<Contact isDarkMode={isDarkMode} />} />
        </Routes>
      </div>
      <Footer isDarkMode={isDarkMode} />
    </Router>
  </React.StrictMode>
)};


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Index />);

