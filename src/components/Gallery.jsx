import React from 'react';

// Import your local gallery images
import galleryImg1 from '../assets/gallery_1.jpg';
import galleryImg2 from '../assets/gallery_2.jpg';
import galleryImg3 from '../assets/gallery_3.jpg';

// A redesigned card component to match the new screenshot
const GalleryCard = ({ imageSrc, title, children }) => (
  <div 
    className="relative rounded-xl overflow-hidden h-96 flex flex-col justify-end p-6 text-white shadow-lg transform transition-transform duration-300 hover:scale-105"
    style={{ backgroundImage: `url(${imageSrc})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
  >
    {/* Gradient overlay for text readability */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
    
    {/* Text content */}
    <div className="relative z-10">
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="text-gray-300">{children}</p>
    </div>
  </div>
);

const Gallery = () => {
  return (
    <section id="gallery" className="py-20 px-4 bg-gray-900">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-indigo-400">A Desert Reborn: The Visual Journey</h2>
        <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">
          Our data tells a story of transformation. Here is the stunning reality on the ground, connecting our satellite view to the world below.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <GalleryCard imageSrc={galleryImg1} title="The Sleeping Desert">
            After years of historic drought, the Carrizo Plain lay dormant, its seed bank waiting for the right conditions to emerge.
          </GalleryCard>
          <GalleryCard imageSrc={galleryImg2} title="The Catalyst">
            In the winter of 2022-23, a series of powerful "atmospheric rivers" drenched California, delivering over 200% of the average annual rainfall.
          </GalleryCard>
          <GalleryCard imageSrc={galleryImg3} title="The Awakening">
            The result was a historic "superbloom," a massive explosion of life featuring millions of wildflowers like Poppies and Fiddlenecks.
          </GalleryCard>
        </div>
      </div>
    </section>
  );
};

export default Gallery;