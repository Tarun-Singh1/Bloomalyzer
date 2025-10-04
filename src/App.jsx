// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Science from './components/Science';
import Dashboard from './components/dashboard';
import Gallery from './components/gallery';
import Timeline from './components/Timeline';
import { Impact, Vision, About, Footer } from './components/Impact';

function App() {
  return (
    <div className="bg-gray-900 text-gray-200 font-sans overflow-x-hidden">
      <Navbar />
      {/* Add w-full to the main element below */}
      <main className="w-full">
        <Hero />
        <Science />
        <Dashboard />
        <Gallery />
        <Timeline />
        <Impact />
        <Vision />
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;