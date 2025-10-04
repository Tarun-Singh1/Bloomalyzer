// src/components/Gallery.jsx
import React from 'react';

// 1. Import your local gallery images
import galleryImg1 from '../assets/gallery_1.jpg';
import galleryImg2 from '../assets/gallery_2.jpg';
import galleryImg3 from '../assets/gallery_3.jpg';

const GalleryCard = ({ imageSrc, title, children }) => (
  <div className="bg-gray-800 p-4 rounded-lg">
    <img src={imageSrc} alt={title} className="rounded-md mb-4 object-cover h-64 w-full" />
    <h3 className="text-xl font-bold text-teal-400">{title}</h3>
    <p className="text-gray-400 mt-2">{children}</p>
  </div>
);

const Gallery = () => {
  return (
    <section id="gallery" className="py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-indigo-400">A Desert Reborn: A Visual Journey</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* 2. Use the imported images here */}
          <GalleryCard imageSrc={galleryImg1} title="2022: The Sleeping Desert">
            After years of drought, the Carrizo Plain was a landscape in waiting, its soil rich with dormant seeds.
          </GalleryCard>
          <GalleryCard imageSrc={galleryImg2} title="The Cause: Atmospheric Rivers">
            In late 2022 and early 2023, a series of powerful "atmospheric rivers" brought historic levels of rainfall to California.
          </GalleryCard>
          <GalleryCard imageSrc={galleryImg3} title="2023: The Superbloom">
            The result was a "superbloom" so vast it could be seen from space, with millions of wildflowers covering the plain.
          </GalleryCard>
        </div>
      </div>
    </section>
  );
};

export default Gallery;