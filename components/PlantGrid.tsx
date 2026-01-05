
import React, { useState } from 'react';
import { PLANTS } from '../constants.ts';
import { Plant } from '../types.ts';

const PlantGrid: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');
  
  const categories = ['All', 'Indoor', 'Succulent', 'Rare'];
  
  const filteredPlants = filter === 'All' 
    ? PLANTS 
    : PLANTS.filter(p => p.category === filter);

  return (
    <section id="catalog" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-4xl font-bold text-emerald-900 mb-4">Our Green Collection</h2>
            <p className="text-emerald-700/70 max-w-xl">Hand-picked, nursery-raised, and ready to thrive in their new home. Free shipping on all orders over $75.</p>
          </div>
          
          <div className="flex gap-2 p-1 bg-emerald-50 rounded-lg self-start">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-md text-sm font-semibold transition-all ${
                  filter === cat 
                  ? 'bg-white text-emerald-700 shadow-sm' 
                  : 'text-emerald-600 hover:text-emerald-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPlants.map(plant => (
            <div key={plant.id} className="group bg-emerald-50/50 rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-emerald-100 transition-all duration-500">
              <div className="aspect-[4/5] overflow-hidden relative">
                <img 
                  src={plant.imageUrl} 
                  alt={plant.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-emerald-700">
                  {plant.difficulty} Care
                </div>
                <button className="absolute bottom-4 right-4 w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </button>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-xl font-bold text-emerald-900">{plant.name}</h3>
                    <p className="text-xs italic text-emerald-600/70 font-medium">{plant.scientificName}</p>
                  </div>
                  <span className="text-lg font-bold text-emerald-700">${plant.price}</span>
                </div>
                <p className="text-sm text-emerald-800/70 mb-4 line-clamp-2">{plant.description}</p>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-[10px] font-bold uppercase tracking-wider">
                    {plant.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlantGrid;
