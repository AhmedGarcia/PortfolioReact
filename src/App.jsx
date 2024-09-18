// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Header from './components/Header.jsx';
// import Footer from './components/Footer.jsx';
// import About from './pages/About.jsx';
// import Portfolio from './pages/Portfolio.jsx';
// import Contact from './pages/Contact.jsx';
// import Resume from './pages/Resume.jsx';
// import './App.css'; // Import App-specific styles

// // Main App component that renders different pages using React Router
// function App() {
//     return (
//     <Router>
//       <Header /> {/* Render the header with navigation */}
//       <main>
//         <Routes>
//           <Route path="/" element={<About />} /> {/* About Me section as default */}
//           <Route path="/portfolio" element={<Portfolio />} /> {/* Portfolio page */}
//           <Route path="/contact" element={<Contact />} /> {/* Contact page */}
//           <Route path="/resume" element={<Resume />} /> {/* Resume page */}
//         </Routes>
//       </main>
//       <Footer /> {/* Footer with social media links */}
//     </Router>
//     );
// }

// export default App;

// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import About from './pages/About';
// import Portfolio from './pages/Portfolio';
// import Contact from './pages/Contact';
// import Resume from './pages/Resume';
// import './App.css';

// function App() {
//   return (
//     <Router>
//       <Header /> {/* Header with navigation */}
//       <main>
//         <Routes>
//           <Route path="/" element={<About />} /> {/* About page as the default */}
//           <Route path="/portfolio" element={<Portfolio />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/resume" element={<Resume />} />
//         </Routes>
//       </main>
//       <Footer /> {/* Footer with social links */}
//     </Router>
//   );
// }

// export default App;

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
        </Routes>
      </main>
      <Footer /> {/* Footer with social links */}
    </Router>
  );
}

export default App;



