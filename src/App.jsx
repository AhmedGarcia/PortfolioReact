

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import ProjectDetails from './pages/ProjectDetails';  // Import the ProjectDetails component
import './App.css';

function App() {
  return (
    <Router>
      <Header /> {/* Header with navigation */}
      <main>
        <Routes>
          <Route path="/" element={<About />} />  {/* Default route */}
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/:projectId" element={<ProjectDetails />} />  {/* Dynamic route for project details */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<div>404 - Page Not Found</div>} /> {/* Fallback for undefined routes */}
        </Routes>
      </main>
      <Footer /> {/* Footer with social links */}
    </Router>
  );
}

export default App;











