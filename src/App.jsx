import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import About from './pages/About.jsx';
import Portfolio from './pages/Portfolio.jsx';
import Contact from './pages/Contact.jsx';
import Resume from './pages/Resume.jsx';
import './App.css'; // Import App-specific styles

// Main App component that renders different pages using React Router
function App() {
    return (
        <Router>
      <Header /> {/* Render the header with navigation */}
      <main>
        <Routes>
          <Route path="/" element={<About />} /> {/* About Me section as default */}
          <Route path="/portfolio" element={<Portfolio />} /> {/* Portfolio page */}
          <Route path="/contact" element={<Contact />} /> {/* Contact page */}
          <Route path="/resume" element={<Resume />} /> {/* Resume page */}
        </Routes>
      </main>
      <Footer /> {/* Footer with social media links */}
    </Router>
    );
}

export default App;