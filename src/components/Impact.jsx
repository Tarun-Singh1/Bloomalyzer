import React from 'react';

// Icon for Monitoring
const MonitoringIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
);

// Icon for Pollinators
const PollinatorIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="h-10 w-10" viewBox="0 0 16 16">
        <path d="M11.424 8c.437-.052.811-.136 1.04-.268a2 2 0 0 0-2-3.464c-.229.132-.489-.414-.752.767C9.886 4.63 10 4.264 10 4a2 2 0 1 0-4 0c0 .264.114.63.288 1.035-.263-.353-.523-.635-.752-.767a2 2 0 0 0-2 3.464c.229.132.603.216 1.04.268-.437.052-.811.136-1.04.268a2 2 0 1 0 2 3.464c.229-.132.489-.414.752-.767C6.114 11.37 6 11.736 6 12a2 2 0 1 0 4 0c0-.264-.114-.63-.288-1.035.263.353.523.635.752.767a2 2 0 1 0 2-3.464c-.229-.132-.603-.216-1.04-.268M9 4a2 2 0 0 1-.045.205q-.059.2-.183.484a13 13 0 0 1-.637 1.223L8 6.142l-.135-.23a13 13 0 0 1-.637-1.223 4 4 0 0 1-.183-.484A2 2 0 0 1 7 4a1 1 0 1 1 2 0M3.67 5.5a1 1 0 0 1 1.366-.366 2 2 0 0 1 .156.142q.142.15.326.4c.245.333.502.747.742 1.163l.13.232-.265.002a13 13 0 0 1-1.379-.06 4 4 0 0 1-.51-.083 2 2 0 0 1-.2-.064A1 1 0 0 1 3.67 5.5m1.366 5.366a1 1 0 0 1-1-1.732l.047-.02q.055-.02.153-.044.202-.048.51-.083a13 13 0 0 1 1.379-.06q.135 0 .266.002l-.131.232c-.24.416-.497.83-.742 1.163a4 4 0 0 1-.327.4 2 2 0 0 1-.155.142M9 12a1 1 0 0 1-2 0 2 2 0 0 1 .045-.206q.058-.198.183-.483c.166-.378.396-.808.637-1.223L8 9.858l.135.23c.241.415.47.845.637 1.223q.124.285.183.484A1.3 1.3 0 0 1 9 12m3.33-6.5a1 1 0 0 1-.366 1.366 2 2 0 0 1-.2.064q-.202.048-.51.083c-.412.045-.898.061-1.379.06q-.135 0-.266-.002l.131-.232c.24-.416.497-.83.742-1.163a4 4 0 0 1 .327-.4q.07-.074.114-.11l.041-.032a1 1 0 0 1 1.366.366m-1.366 5.366a2 2 0 0 1-.155-.141 4 4 0 0 1-.327-.4A13 13 0 0 1 9.74 9.16l-.13-.232.265-.002c.48-.001.967.015 1.379.06q.308.035.51.083.098.024.153.044l.048.02a1 1 0 1 1-1 1.732zM8 9a1 1 0 1 1 0-2 1 1 0 0 1 0 2"/>
    </svg>
);

// icon for Climate Indicator
const ClimateIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="h-10 w-10" viewBox="0 0 16 16">
        <path d="M4.158 12.025a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 1 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317m3 0a.5.5 0 0 1 .316.633l-1 3a.5.5 0 1 1-.948-.316l1-3a.5.5 0 0 1 .632-.317m3 0a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 1 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317m3 0a.5.5 0 0 1 .316.633l-1 3a.5.5 0 1 1-.948-.316l1-3a.5.5 0 0 1 .632-.317m.247-6.998a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 11H13a3 3 0 0 0 .405-5.973"/>
    </svg>
);


const ImpactCard = ({ icon, title, children }) => (
  <div className="bg-gray-800 p-8 rounded-xl shadow-lg text-center flex flex-col items-center h-full transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
    <div className="text-indigo-400 mb-4">{icon}</div>
    <h3 className="text-2xl font-bold text-teal-300 mb-3">{title}</h3>
    <p className="text-gray-400">{children}</p>
  </div>
);

const Impact = () => {
  return (
    <section id="impact" className="py-20 px-4 bg-gray-900">
        <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-indigo-400">Why This Matters</h2>
            <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
                "Bloomalyzer" is more than a visualization; it's a prototype for tools that help us understand and protect our planet. By translating raw satellite data into clear insights, we unlock real-world applications.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <ImpactCard icon={<MonitoringIcon />} title="Ecological Monitoring">Tools like this allow park rangers to monitor the health of fragile ecosystems. A weaker bloom could be an early warning of environmental stress.</ImpactCard>
                <ImpactCard icon={<PollinatorIcon />} title="Supporting Pollinators">Superblooms are a critical food source for pollinators. Tracking these events helps conservationists understand and protect the species our food systems depend on.</ImpactCard>
                <ImpactCard icon={<ClimateIcon />} title="Climate Indicator">The timing and intensity of these blooms are sensitive indicators of climate patterns, helping scientists track the long-term effects of climate change.</ImpactCard>
            </div>
        </div>
    </section>
  );
};

export default Impact;