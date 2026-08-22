import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { products } from '@/utils/data';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Products() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = [
    'All',
    ...Array.from(new Set(products.map((p) => p.category))),
  ];

  const filteredProducts =
    activeCategory === 'All'
      ? products
      : products.filter((p) => p.category === activeCategory);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Products | LED4U – Trinayan Corporation</title>

        <meta
          name="description"
          content="Explore our premium range of LED street lights, high mast towers, industrial high bays, and decorative lighting."
        />
      </Helmet>

      <main className="pt-32 pb-24 min-h-screen bg-black">
        <div className="container mx-auto px-6 md:px-12">

          {/* Header */}
          <div className="mb-16">
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 tracking-tight">
              Premium <span className="text-primary">Fixtures</span>
            </h1>

            <p className="text-gray-400 text-lg max-w-2xl">
              Engineered for longevity and peak photometric performance.
              Built to withstand extreme Indian weather conditions.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-sm text-sm font-semibold tracking-wide uppercase transition-all ${
                  activeCategory === cat
                    ? 'bg-primary text-black'
                    : 'bg-white/5 text-gray-400 border border-white/10 hover:border-primary/50 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group bg-surface border border-white/5 rounded-sm overflow-hidden hover:border-primary/50 transition-all duration-300"
              >

                {/* Product Image */}
                <div className="aspect-[4/3] bg-black relative overflow-hidden">

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none mix-blend-overlay" />

                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />

                </div>

                {/* Product Details */}
                <div className="p-6">

                  {/* Category */}
                  <div className="text-xs text-primary font-semibold tracking-wider uppercase mb-2">
                    {product.category}
                  </div>

                  {/* Product Name */}
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>

                  {/* Request Quote */}
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 text-sm text-white font-semibold uppercase tracking-wider group-hover:text-primary transition-colors"
                  >
                    Request Quote

                    <ArrowRight
                      size={16}
                      className="transform group-hover:translate-x-1 transition-transform"
                    />
                  </Link>

                </div>
              </div>
            ))}
          </div>

        </div>
      </main>
    </>
  );
}