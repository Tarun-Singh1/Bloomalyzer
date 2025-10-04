// src/components/Dashboard.jsx
import React, { useState } from 'react';
import ReactCompareImage from 'react-compare-image';
import CountUp from 'react-countup';

// 1. Import your local images
import trueBefore from '../assets/true_color_before_2022.png';
import trueAfter from '../assets/true_color_after_2023.png';
import ndviBefore from '../assets/ndvi_map_before_2022.png';
import ndviAfter from '../assets/ndvi_map_after_2023.png';

const Dashboard = () => {
  const [view, setView] = useState('natural');
  
  // 2. This logic now uses your imported images
  const images = {
    natural: { before: trueBefore, after: trueAfter },
    scientific: { before: ndviBefore, after: ndviAfter }
  };
  
  const beforeNdviScore = 0.1810;
  const afterNdviScore = 0.3213;
  const percentageIncrease = ((afterNdviScore - beforeNdviScore) / beforeNdviScore) * 100;

  return (
    <section id="dashboard" className="py-20 px-4 md:px-10 bg-gray-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Column: Visuals */}
        <div>
          <div className="flex justify-center space-x-2 mb-4">
            <button onClick={() => setView('natural')} className={`px-4 py-2 rounded-lg font-semibold transition-all ${view === 'natural' ? 'bg-indigo-600 text-white' : 'bg-gray-700 hover:bg-gray-600 text-gray-300'}`}>Natural View</button>
            <button onClick={() => setView('scientific')} className={`px-4 py-2 rounded-lg font-semibold transition-all ${view === 'scientific' ? 'bg-teal-500 text-white' : 'bg-gray-700 hover:bg-gray-600 text-gray-300'}`}>Scientific View</button>
          </div>
          <div className="shadow-2xl border-4 border-gray-700 rounded-lg overflow-hidden">
            <ReactCompareImage leftImage={images[view].before} rightImage={images[view].after} />
          </div>
        </div>
        {/* Right Column: Story */}
        <div className="text-center lg:text-left">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-indigo-400">From Dormant to Vibrant.</h2>
          <p className="text-lg text-gray-300 mb-6">Following record rainfall, the arid Carrizo Plain desert was transformed. Our analysis reveals not just a visual spectacle, but a measurable explosion of life.</p>
          <div className="bg-gray-900 p-6 rounded-lg shadow-inner">
            <h3 className="text-xl font-semibold text-teal-400 mb-2">The Scientific Proof</h3>
            <p className="text-gray-400 mb-4">Average Vegetation Index (NDVI)</p>
            <div className="flex justify-center lg:justify-start items-baseline space-x-4 mb-2">
              <span className="text-3xl font-mono text-red-400"><CountUp end={beforeNdviScore} decimals={4} duration={2.5} /></span>
              <span className="text-3xl text-gray-500">→</span>
              <span className="text-3xl font-mono text-teal-300"><CountUp end={afterNdviScore} decimals={4} duration={2.5} /></span>
            </div>
            <p className="text-2xl font-bold text-white">A <span className="text-teal-300"><CountUp end={percentageIncrease} decimals={0} duration={2.5} />% increase</span> in vegetation density.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;