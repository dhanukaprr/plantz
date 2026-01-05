
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative py-20 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        <div className="z-10">
          <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-6">
            Boutique Plant Nursery
          </span>
          <h1 className="text-5xl lg:text-7xl font-bold text-emerald-900 leading-[1.1] mb-6">
            Bring Nature <br /> 
            <span className="text-emerald-600">Into Your Home</span>
          </h1>
          <p className="text-lg text-emerald-700/80 max-w-lg mb-10 leading-relaxed">
            Curated greenery for every corner. From architectural monsters to delicate succulents, we help you find the perfect companion for your space.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold transition-all transform hover:scale-105 shadow-xl shadow-emerald-200">
              Browse Collection
            </button>
            <button className="px-8 py-4 bg-white border-2 border-emerald-100 hover:border-emerald-200 text-emerald-800 rounded-xl font-bold transition-all">
              Our Story
            </button>
          </div>
        </div>
        
        <div className="relative">
          <div className="absolute -inset-4 bg-emerald-100 rounded-3xl -rotate-2 scale-105 opacity-50"></div>
          <img 
            src="https://picsum.photos/seed/nursery-hero/1200/1000" 
            alt="Beautiful Interior Plants" 
            className="relative rounded-2xl shadow-2xl object-cover w-full h-[500px] lg:h-[600px]"
          />
          <div className="absolute -bottom-10 -left-10 bg-white p-6 rounded-2xl shadow-xl hidden md:block">
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                {[1,2,3].map(i => (
                  <img key={i} src={`https://picsum.photos/seed/user-${i}/100/100`} className="w-10 h-10 rounded-full border-2 border-white" alt="User" />
                ))}
              </div>
              <div>
                <p className="text-sm font-bold text-emerald-900">1,200+ Happy Growers</p>
                <div className="flex text-yellow-400 text-xs">
                  {'★'.repeat(5)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
