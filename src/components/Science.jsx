import React from 'react';

// SVG Icons defined as React components
const EyeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
  </svg>
);

// Your chosen icon for the satellite
const SatelliteIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-10 w-10">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
    </svg>
);

// The icon for the formula
const FormulaIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
    </svg>
);

const ScienceCard = ({ icon, title, children }) => (
  <div className="bg-gray-800 p-8 rounded-xl shadow-lg text-center flex flex-col items-center transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl h-full">
    <div className="text-indigo-400 mb-4">{icon}</div>
    <h3 className="text-2xl font-bold text-gray-100 mb-3">{title}</h3>
    <p className="text-gray-400">{children}</p>
  </div>
);

const Science = () => {
  return (
    <section id="science" className="py-20 px-4 bg-gray-900">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-indigo-400">Seeing the Invisible</h2>
        <p className="text-lg text-gray-300 mb-16 max-w-2xl mx-auto">
          How can we scientifically measure a bloom from space? The secret lies in a type of light our eyes can't see.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ScienceCard icon={<EyeIcon />} title="Our Vision">
            Our eyes see the world in Red, Green, and Blue light. It's a beautiful but limited view of reality.
          </ScienceCard>
          <ScienceCard icon={<SatelliteIcon />} title="Satellite Vision">
            Satellites see in many bands, including Near-Infrared (NIR) light. Healthy plants reflect NIR very strongly, making them shine brightly at this invisible wavelength.
          </ScienceCard>
          <ScienceCard icon={<FormulaIcon />} title="The Magic Formula">
            By comparing the Red and NIR light in a formula called NDVI, we can create a simple but powerful "greenness score" for every pixel of the planet.
          </ScienceCard>
        </div>
      </div>
    </section>
  );
};

export default Science;