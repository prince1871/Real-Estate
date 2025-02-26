import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import LearnMore from './components/LearnMore';
import Projects from './components/Projects';
import Testimonails from './components/Testimonails';
import Contact from './components/Contact';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className='w-full overflow-hidden'>
      <ToastContainer />
      <Header />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/learn-more" element={<LearnMore />} />
      </Routes>
      <Projects />
      <Testimonails />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
