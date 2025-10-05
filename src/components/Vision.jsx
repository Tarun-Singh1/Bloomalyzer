// src/components/Vision.jsx
import React from 'react';

// SVG Icons defined as React components for clarity
const GoGlobalIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2h10a2 2 0 002-2v-1a2 2 0 012-2h1.945M7.707 4.293l1.414-1.414a1 1 0 011.414 0l1.414 1.414M12 21v-2m-3.293-2.293l-1.414 1.414a1 1 0 01-1.414 0l-1.414-1.414M12 3c-3.866 0-7 3.134-7 7a7 7 0 005 6.72V21h4v-4.28A7 7 0 0019 10c0-3.866-3.134-7-7-7z" />
  </svg>
);
const LookAheadIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);
const ConnectIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

// Data for the timeline, now with the icon components
const visionPhases = [
  {
    icon: <GoGlobalIcon />,
    title: 'Phase 1: Go Global',
    text: "Expand Bloomalyzer to a world map with dozens of significant bloom events, allowing users to explore the planet's seasonal rhythms from the deserts of Chile to the flower fields of Holland."
  },
  {
    icon: <LookAheadIcon />,
    title: 'Phase 2: Look Ahead',
    text: 'Integrate historical data to build a machine learning model that can forecast the probability and potential intensity of a superbloom in the upcoming season based on winter rainfall.'
  },
  {
    icon: <ConnectIcon />,
    title: 'Phase 3: Connect to the Ground',
    text: 'Allow users to submit their own ground-level photos via platforms like GLOBE Observer, linking their real-world observations directly to our satellite data.'
  }
];

// The component for a single item on the timeline
const TimelineItem = ({ phase, isRight }) => {
  const Card = () => (
    <div className={`w-1/2 flex ${isRight ? 'justify-start' : 'justify-end'}`}>
      <div className={`bg-gray-800 p-8 rounded-xl shadow-lg max-w-sm ${isRight ? 'text-left' : 'text-right'}`}>
        <h3 className="text-2xl font-bold mb-2 text-teal-300">{phase.title}</h3>
        <p className="text-gray-400">{phase.text}</p>
      </div>
    </div>
  );

  const Spacer = () => <div className="w-1/2"></div>;

  const Icon = () => (
    <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center text-white z-10 absolute left-1/2 -translate-x-1/2">
      {phase.icon}
    </div>
  );

  return (
    <div className="flex items-center w-full mb-16">
      {isRight ? <Spacer /> : <Card />}
      <Icon />
      {isRight ? <Card /> : <Spacer />}
    </div>
  );
};

// The main Vision component, updated with the new structure
const Vision = () => (
  <section id="vision" className="py-20 px-6 bg-gray-900">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center text-indigo-400">Our Vision: The Future of Bloomalyzer</h2>
      <p className="text-lg text-gray-400 text-center max-w-3xl mx-auto mb-20">
        Our mission is to make Earth's vital signs visible to everyone. This project is just the beginning.
      </p>

      <div className="relative">
        {/* The Timeline Path */}
        <div className="absolute h-full border-l-2 border-dashed border-indigo-400 left-1/2 -translate-x-1/2"></div>
        
        {visionPhases.map((phase, index) => (
          <TimelineItem key={phase.title} phase={phase} isRight={index % 2 !== 0} />
        ))}
      </div>
    </div>
  </section>
);

export default Vision;