// src/components/Science.jsx
import React from 'react';

const ScienceCard = ({ title, children }) => (
  <div className="bg-gray-800 p-8 rounded-lg">
    <h3 className="text-2xl font-bold text-teal-400 mb-3">{title}</h3>
    <p className="text-gray-400">{children}</p>
  </div>
);

const Science = () => {
  return (
    <section id="science" className="py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-indigo-400">Seeing the Invisible</h2>
        <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
          Our project is possible because satellites see the world differently than we do. They capture light invisible to the human eye, allowing us to measure the hidden signs of life on Earth.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ScienceCard title="The Human Eye">
            Our eyes perceive the world in Red, Green, and Blue. This "visible spectrum" is only a tiny fraction of the information streaming from our planet.
          </ScienceCard>
          <ScienceCard title="The Satellite's Eye">
            Satellites like Sentinel-2 have multispectral cameras that see beyond our limits, capturing data in bands like Near-Infrared (NIR). Healthy plants reflect NIR light very strongly.
          </ScienceCard>
          <ScienceCard title="Revealing the Truth">
            By combining the Red and NIR bands in a formula called NDVI, we can create a "greenness score." This score turns the invisible NIR signal into a clear, scientific measure of vegetation health.
          </ScienceCard>
        </div>
      </div>
    </section>
  );
};

export default Science;