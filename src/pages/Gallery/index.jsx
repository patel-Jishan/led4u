import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

import project1 from '@assets/project-1.jpg';
import project2 from '@assets/project-2.jpg';
import project3 from '@assets/project-3.jpg';

import showroom1 from '@assets/showroom1.png';
import showroom2 from '@assets/showroom2.png';
import showroom3 from '@assets/showroom3.png';
import showroom4 from '@assets/showroom4.jpeg';
import showroom5 from '@assets/showroom5.jpeg';
import showroom6 from '@assets/showroom6.jpeg';
import showroom7 from '@assets/showroom7.jpeg';
import showroom8 from '@assets/showroom8.jpeg';
import showroom9 from '@assets/showroom9.jpeg';
import showroom10 from '@assets/showroom10.jpeg';
import showroom11 from '@assets/showroom11.jpeg';
import showroom12 from '@assets/showroom12.jpeg';

//comercial
import commercial1 from '@assets/commercial1.jpeg'
import commercial2 from '@assets/commercial2.jpg'
import commercial3 from '@assets/commercial3.jpg'
import commercial4 from '@assets/commercial4.jpeg'
import commercial5 from '@assets/commercial5.jpeg'

{/* Government */}
import government1 from '@assets/Goverment1.jpeg';
import government2 from '@assets/Goverment2.jpeg';
import government3 from '@assets/Goverment3.jpeg';
import government4 from '@assets/Goverment4.jpeg';
import government5 from '@assets/Goverment5.jpeg';
import government6 from '@assets/Goverment6.jpeg';
import government7 from '@assets/Goverment7.jpeg';
import government8 from '@assets/Goverment8.jpeg';

// industry 
{/* Industry */}
import industry1 from '@assets/Industry1.jpg';
import industry2 from '@assets/Industry2.jpg';
import industry3 from '@assets/Industry3.jpg';

import { X } from 'lucide-react';

const galleryImages = [
  // Project Images
  {
    id: 1,
    src: project1,
    category: 'Government',
    alt: 'City street lighting',
  },
  {
    id: 2,
    src: project2,
    category: 'Industrial',
    alt: 'High mast tower',
  },
  {
    id: 3,
    src: project3,
    category: 'Commercial',
    alt: 'Decorative lighting',
  },

  // Showroom Images
  {
    id: 4,
    src: showroom1,
    category: 'Showroom',
    alt: 'LED Showroom 1',
  },
  {
    id: 5,
    src: showroom2,
    category: 'Showroom',
    alt: 'LED Showroom 2',
  },
  {
    id: 6,
    src: showroom3,
    category: 'Showroom',
    alt: 'LED Showroom 3',
  },
  {
    id: 7,
    src: showroom4,
    category: 'Showroom',
    alt: 'LED Showroom 4',
  },
  {
    id: 8,
    src: showroom5,
    category: 'Showroom',
    alt: 'LED Showroom 5',
  },
  {
    id: 9,
    src: showroom6,
    category: 'Showroom',
    alt: 'LED Showroom 6',
  },
  {
    id: 10,
    src: showroom7,
    category: 'Showroom',
    alt: 'LED Showroom 7',
  },
  {
    id: 11,
    src: showroom8,
    category: 'Showroom',
    alt: 'LED Showroom 8',
  },
  {
    id: 12,
    src: showroom9,
    category: 'Showroom',
    alt: 'LED Showroom 9',
  },
  {
    id: 13,
    src: showroom10,
    category: 'Showroom',
    alt: 'LED Showroom 10',
  },
  {
    id: 14,
    src: showroom11,
    category: 'Showroom',
    alt: 'LED Showroom 11',
  },
  {
    id: 15,
    src: showroom12,
    category: 'Showroom',
    alt: 'LED Showroom 12',
  },

  // Government Images
{
  id: 16,
  src: government1,
  category: 'Government',
  alt: 'Government Project 1',
},
{
  id: 17,
  src: government2,
  category: 'Government',
  alt: 'Government Project 2',
},
{
  id: 18,
  src: government3,
  category: 'Government',
  alt: 'Government Project 3',
},
{
  id: 19,
  src: government4,
  category: 'Government',
  alt: 'Government Project 4',
},
{
  id: 20,
  src: government5,
  category: 'Government',
  alt: 'Government Project 5',
},
{
  id: 21,
  src: government6,
  category: 'Government',
  alt: 'Government Project 6',
},
{
  id: 22,
  src: government7,
  category: 'Government',
  alt: 'Government Project 7',
},
{
  id: 23,
  src: government8,
  category: 'Government',
  alt: 'Government Project 8',
},

  //commercial
    {
    id: 24,
    src: commercial1,
    category: 'Commercial',
    alt: 'LED Commercial',
  },
   {
    id: 25,
    src: commercial2,
    category: 'Commercial',
    alt: 'LED Commercial',
  },
   {
    id: 26,
    src: commercial3,
    category: 'Commercial',
    alt: 'LED Commercial',
  },
   {
    id: 27,
    src: commercial4,
    category: 'Commercial',
    alt: 'LED Commercial',
  },
   {
    id: 28,
    src: commercial5,
    category: 'Commercial',
    alt: 'LED Commercial',
  },

// Industry
// Industry Images
{
  id: 29,
  src: industry1,
  category: 'Industrial',
  alt: 'Industrial Project 1',
},
{
  id: 30,
  src: industry2,
  category: 'Industrial',
  alt: 'Industrial Project 2',
},
{
  id: 31,
  src: industry3,
  category: 'Industrial',
  alt: 'Industrial Project 3',
},

];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxImg, setLightboxImg] = useState(null);

  const categories = [
    'All',
    'Government',
    'Industrial',
    'Commercial',
    'Showroom',
  ];

  const filteredImages =
    activeCategory === 'All'
      ? galleryImages
      : galleryImages.filter(
          (img) => img.category === activeCategory
        );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Gallery | LED4U – Trinayan Corporation</title>
      </Helmet>

      <main className="pt-32 pb-24 min-h-screen bg-black">
        <div className="container mx-auto px-6 md:px-12">

          {/* Page Header */}
          <div className="mb-16 text-center">
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 tracking-tight">
              Visual <span className="text-primary">Impact</span>
            </h1>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-sm font-semibold tracking-wide uppercase transition-all ${
                  activeCategory === cat
                    ? 'bg-white text-black'
                    : 'bg-transparent text-gray-400 border border-white/20 hover:border-white hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Masonry-style Grid */}
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {filteredImages.map((img) => (
              <div
                key={img.id}
                className="break-inside-avoid group relative cursor-pointer overflow-hidden rounded-sm bg-surface"
                onClick={() => setLightboxImg(img.src)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-auto object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                  loading="lazy"
                />

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6 pointer-events-none">
                  <div>
                    <span className="text-primary text-xs font-bold uppercase tracking-wider mb-1 block">
                      {img.category}
                    </span>

                    <span className="text-white font-medium">
                      {img.alt}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lightbox */}
        {lightboxImg && (
          <div
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={() => setLightboxImg(null)}
          >
            {/* Close Button */}
            <button
              className="absolute top-6 right-6 text-white hover:text-primary transition-colors p-2"
              onClick={() => setLightboxImg(null)}
            >
              <X size={32} />
            </button>

            {/* Large Image */}
            <img
              src={lightboxImg}
              alt="Lightbox view"
              className="max-w-full max-h-[90vh] object-contain rounded-sm shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}
      </main>
    </>
  );
}