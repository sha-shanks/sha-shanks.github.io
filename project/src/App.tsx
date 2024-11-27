import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Hero from './components/home/Hero';
import PricingSection from './components/home/PricingSection';
import WorkflowSection from './components/home/WorkflowSection';
import AboutSection from './components/home/AboutSection';
import AuthModal from './components/auth/AuthModal';
import Detect from './pages/Detect';

function App() {
  return (
    <Router basename="/project/">
      <div className="min-h-screen bg-black">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <PricingSection />
              <WorkflowSection />
              <AboutSection />
            </>
          } />
          <Route path="/detect" element={<Detect />} />
        </Routes>
        <AuthModal />
      </div>
    </Router>
  );
}

export default App;