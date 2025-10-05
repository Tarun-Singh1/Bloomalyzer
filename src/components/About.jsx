import React from 'react';

// Component for the info blocks
const InfoBlock = ({ title, children }) => (
    <div className="text-center">
        <h3 className="text-2xl font-bold mb-2 text-teal-300">{title}</h3>
        <p className="text-gray-400">{children}</p>
    </div>
);

// Component for the team member cards
const TeamMemberCard = ({ name, role }) => (
    <div className="bg-gray-800 p-4 rounded-xl text-center w-60 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
        <p className="font-bold text-lg text-white">{name}</p>
        <p className="text-sm text-indigo-400">{role}</p>
    </div>
);

const About = () => {
    const teamMembers = [
        { name: 'Tarun', role: 'Team Lead & Lead Python Developer' },
        { name: 'Vinay', role: 'Web Developer' },
        { name: 'Abinash', role: 'Web Developer' },
        { name: 'Ayesha', role: 'Creative Director & Storyteller' },
        { name: 'Priyanka', role: 'Project Manager & QA Engineer' },
        { name: 'Sen', role: 'Research & Domain Expert' },
    ];

    return (
        <section id="about" className="py-20 px-4 bg-gray-900">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-indigo-400">Behind the Project</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
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

export default About;