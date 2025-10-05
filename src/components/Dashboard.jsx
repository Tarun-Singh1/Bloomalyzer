import React, { useState, useRef } from 'react';
import CountUp from 'react-countup';

// Import your local images
import trueBefore from '../assets/true_color_before_2022.png';
import trueAfter from '../assets/true_color_after_2023.png';
import ndviBefore from '../assets/ndvi_map_before_2022.png';
import ndviAfter from '../assets/ndvi_map_after_2023.png';

// The Custom Slider Component with the fixed SVG Icon
const CustomImageSlider = ({ leftImage, rightImage }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const imageContainerRef = useRef(null);

  const handleMove = (event) => {
    if (!imageContainerRef.current) return;
    const rect = imageContainerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(100, ((event.clientX - rect.left) / rect.width) * 100));
    setSliderPosition(x);
  };

  const handleMouseDown = () => {
    window.addEventListener('mousemove', handleMove);
    window.addEventListener('mouseup', () => {
      window.removeEventListener('mousemove', handleMove);
    });
  };

  return (
    <div ref={imageContainerRef} className="relative w-full aspect-[4/3] overflow-hidden select-none cursor-ew-resize">
      {/* Right (bottom) image */}
      <img
        src={rightImage}
        alt="After"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      {/* Left (top) image, clipped */}
      <div
        className="absolute top-0 left-0 w-full h-full object-cover overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img src={leftImage} alt="Before" className="absolute top-0 left-0 w-full h-full object-cover" />
      </div>
      {/* Slider Handle */}
      <div
        className="absolute top-0 h-full w-1 bg-white/50 cursor-ew-resize"
        style={{ left: `${sliderPosition}%` }}
        onMouseDown={handleMouseDown}
      >
        <div className="absolute top-1/2 -translate-y-1/2 -ml-5 bg-white rounded-full h-10 w-10 flex items-center justify-center shadow-2xl">
          {/* == UPDATED SLIDER ICON == */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25" />
          </svg>
        </div>
      </div>
    </div>
  );
};


const Dashboard = () => {
  const [view, setView] = useState('natural');
  
  const images = {
    natural: { before: trueBefore, after: trueAfter },
    scientific: { before: ndviBefore, after: ndviAfter }
  };
  
  const beforeNdviScore = 0.1810;
  const afterNdviScore = 0.3213;
  const percentageIncrease = ((afterNdviScore - beforeNdviScore) / beforeNdviScore) * 100;

  return (
    <section id="dashboard" className="py-20 px-4 md:px-10 bg-gray-900">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Column: Visuals */}
        <div>
          <div className="flex justify-center space-x-2 mb-4">
            <button onClick={() => setView('natural')} className={`px-4 py-2 rounded-lg font-semibold transition-all ${view === 'natural' ? 'bg-indigo-600 text-white' : 'bg-gray-700 hover:bg-gray-600 text-gray-300'}`}>Natural View</button>
            <button onClick={() => setView('scientific')} className={`px-4 py-2 rounded-lg font-semibold transition-all ${view === 'scientific' ? 'bg-teal-500 text-white' : 'bg-gray-700 hover:bg-gray-600 text-gray-300'}`}>Scientific View</button>
          </div>
          <div className="shadow-2xl border-4 border-gray-700 rounded-lg overflow-hidden">
            <CustomImageSlider leftImage={images[view].before} rightImage={images[view].after} />
          </div>
        </div>
        {/* Right Column: Story */}
        <div className="text-center lg:text-left">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-indigo-400">From Dormant to Vibrant.</h2>
          <p className="text-lg text-gray-300 mb-6">Following record rainfall, the arid Carrizo Plain desert was transformed. Our analysis reveals not just a visual spectacle, but a measurable explosion of life.</p>
          <div className="bg-gray-800 p-6 rounded-xl shadow-inner border border-teal-500/20">
            <h3 className="text-xl font-semibold text-teal-300 mb-2">The Scientific Proof</h3>
            <p className="text-gray-400 mb-4">Average Vegetation Index (NDVI)</p>
            <div className="grid grid-cols-3 items-center gap-x-2 mb-4">
              <div className="text-center lg:text-right">
                <p className="text-sm text-gray-400">2022 (Normal Year)</p>
                <span className="text-3xl font-mono text-red-400"><CountUp end={beforeNdviScore} decimals={4} duration={2.5} /></span>
              </div>
              <div className="flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-sm text-gray-400">2023 (Superbloom)</p>
                <span className="text-3xl font-mono text-green-400"><CountUp end={afterNdviScore} decimals={4} duration={2.5} /></span>
              </div>
            </div>
            <p className="text-2xl font-bold text-white text-center lg:text-left">A <span className="text-green-400"><CountUp end={percentageIncrease} decimals={0} duration={2.5} />% increase</span> in vegetation density.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;