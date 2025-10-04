// Card component for the "Why This Matters" section.
const ImpactCard = ({ title, children }) => (
  <div className="bg-gray-800 p-8 rounded-lg text-left">
    <h3 className="text-2xl font-bold text-teal-400 mb-3">{title}</h3>
    <p className="text-gray-400">{children}</p>
  </div>
);

// The Impact component remains unchanged.
const Impact = () => (
    <section id="impact" className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-indigo-400">Why This Matters</h2>
            <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
                "Bloomalyzer" is more than a visualization; it's a prototype for tools that help us understand and protect our planet. By translating raw satellite data into clear insights, we unlock real-world applications.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <ImpactCard title="Ecological Monitoring">Tools like this allow park rangers to monitor the health of fragile ecosystems. A weaker bloom could be an early warning of environmental stress.</ImpactCard>
                <ImpactCard title="Supporting Pollinators">Superblooms are a critical food source for pollinators. Tracking these events helps conservationists understand and protect the species our food systems depend on.</ImpactCard>
                <ImpactCard title="Climate Indicator">The timing and intensity of these blooms are sensitive indicators of climate patterns, helping scientists track the long-term effects of climate change.</ImpactCard>
            </div>
        </div>
    </section>
);

export default Impact;