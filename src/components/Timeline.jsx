// src/components/Timeline.jsx
import React from 'react';
import { ResponsiveContainer, ComposedChart, XAxis, YAxis, Tooltip, Legend, CartesianGrid, Bar, Line } from 'recharts';
import jsonData from '../data.json';

const Timeline = () => {
  return (
    <section id="timeline" className="py-20 px-4 md:px-10 bg-gray-800">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-indigo-400">The Recipe for a Superbloom</h2>
        <p className="text-lg text-gray-300 mb-12">
          Our timeline analysis shows how historic rainfall ({jsonData.year}) directly led to the explosion of life, measured by the NDVI "greenness" score.
        </p>
        <div className="h-96 w-full p-4 bg-gray-900 rounded-lg">
          <ResponsiveContainer>
            <ComposedChart data={jsonData.monthly_data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
              <CartesianGrid stroke="#4A5568" strokeDasharray="3 3" />
              <XAxis dataKey="month" stroke="#A0AEC0" />
              <YAxis yAxisId="left" stroke="#6366F1" />
              <YAxis yAxisId="right" orientation="right" stroke="#4FD1C5" />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'rgba(31, 41, 55, 0.8)', // bg-gray-800 with opacity
                  borderColor: '#4A5568'
                }}
              />
              <Legend />
              <Bar dataKey="rainfall_mm" yAxisId="left" barSize={20} fill="#6366F1" name="Rainfall (mm)" />
              <Line type="monotone" yAxisId="right" dataKey="ndvi" stroke="#4FD1C5" strokeWidth={3} name="NDVI Score" />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
};

export default Timeline;