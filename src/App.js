import React from 'react';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import ListSection from './components/ListSection';
import AllCountries from './components/AllCountries';
import DownloadAndFeatures from './components/DownloadAndFeatures';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <DownloadAndFeatures />
      <ListSection />
      <AllCountries></AllCountries>
      <Footer />
    </div>
  );
}

export default App;
