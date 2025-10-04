// Card component for the Vision section.
const VisionCard = ({ title, children }) => (
    <div className="bg-gray-900 p-8 rounded-lg border border-indigo-500/30">
        <h3 className="text-2xl font-bold text-indigo-400 mb-3">{title}</h3>
        <p className="text-gray-400">{children}</p>
    </div>
);

// The Vision component remains unchanged.
const Vision = () => (
    <section id="vision" className="py-20 px-4 md:px-10 bg-gray-800">
        <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-indigo-400">Our Vision: The Future of Bloomalyzer</h2>
            <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
                Our mission is to make Earth's vital signs visible to everyone. This project is just the beginning. We envision a platform that connects people everywhere to the pulse of our planet.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <VisionCard title="A Global Bloom Watch">Expand Bloomalyzer to a world map with dozens of significant bloom events, allowing users to explore the planet's seasonal rhythms.</VisionCard>
                <VisionCard title="Predictive Forecasting">Integrate historical data to build a machine learning model that can forecast the probability of a superbloom in the upcoming season.</VisionCard>
                <VisionCard title="Citizen Science Link">Allow users to submit their own ground-level photos via platforms like GLOBE Observer, linking them directly to our satellite data.</VisionCard>
            </div>
        </div>
    </section>
);

export default Vision;