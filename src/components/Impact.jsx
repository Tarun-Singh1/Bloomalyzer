import React from 'react';

// Card component for the "Why This Matters" section.
const ImpactCard = ({ title, children }) => (
  <div className="bg-gray-800 p-8 rounded-lg text-left">
    <h3 className="text-2xl font-bold text-teal-400 mb-3">{title}</h3>
    <p className="text-gray-400">{children}</p>
  </div>
);

// Card component for the Vision section.
const VisionCard = ({ title, children }) => (
    <div className="bg-gray-900 p-8 rounded-lg border border-indigo-500/30">
        <h3 className="text-2xl font-bold text-indigo-400 mb-3">{title}</h3>
        <p className="text-gray-400">{children}</p>
    </div>
);

// New component for the info blocks in the "Behind the Project" section.
const InfoBlock = ({ title, children }) => (
    <div>
        <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
        <p className="text-gray-400">{children}</p>
    </div>
);

// New component for the team member cards.
const TeamMemberCard = ({ name, role }) => (
    <div className="bg-gray-800 p-4 rounded-lg text-center w-60 transform hover:scale-105 transition-transform">
        <p className="font-bold text-lg text-white">{name}</p>
        <p className="text-sm text-indigo-400">{role}</p>
    </div>
);

// The Impact component remains unchanged.
export const Impact = () => (
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

// The Vision component remains unchanged.
export const Vision = () => (
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

// The updated About component with the new design.
export const About = () => {
    const teamMembers = [
        { name: 'Tarun', role: 'Team Lead & Lead Python Developer' },
        { name: 'Vinay', role: 'Web Developer' },
        { name: 'Abinash', role: 'Web Developer' },
        { name: 'Aisha', role: 'Creative Director & Storyteller' },
        { name: 'Priyanka', role: 'Project Manager & QA Engineer' },
        { name: 'Sen', role: 'Research & Domain Expert' },
    ];

    return (
        <section id="about" className="py-20 px-4 bg-gray-900">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-indigo-400">Behind the Project</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 text-center">
                    <InfoBlock title="What is NDVI?">
                        A scientific standard for measuring plant health using light invisible to our eyes to quantify the density of green vegetation.
                    </InfoBlock>
                    <InfoBlock title="Our Data">
                        This project uses free, public data from the ESA's Sentinel-2 satellite, accessed via the Copernicus Browser. The analysis is real.
                    </InfoBlock>
                    <InfoBlock title="Our Code">
                        Built with React, TailwindCSS, and Vite, with data processing done in Python. All open source.
                    </InfoBlock>
                </div>
                <h3 className="text-3xl font-bold text-center mb-8 text-indigo-400">Meet the Team</h3>
                <div className="flex flex-wrap justify-center gap-6">
                    {teamMembers.map((member) => (
                        <TeamMemberCard key={member.name} name={member.name} role={member.role} />
                    ))}
                </div>
            </div>
        </section>
    );
};

// The Footer component remains unchanged.
export const Footer = () => (
    <footer className="bg-black py-6 text-center text-gray-400">
        <p>&copy; 2025 Bloomalyzer Team. Created for the NASA Space Apps Challenge.</p>
    </footer>
);