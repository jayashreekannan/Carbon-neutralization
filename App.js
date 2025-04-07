import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import EmissionCalculator from './pages/EmissionCalculator';
import Report from './pages/Report';


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Simulate authentication

  const setAuth = (status) => {
    setIsAuthenticated(status);
  };

  return (
    <Router>
      <Navbar isAuthenticated={isAuthenticated} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp setAuth={setAuth}/>} />
         <Route path="/emission-calculator" element={<EmissionCalculator />} />
        <Route path="/report" element={<Report />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
