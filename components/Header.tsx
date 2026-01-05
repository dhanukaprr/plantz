
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-emerald-100">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </div>
          <span className="text-2xl font-bold tracking-tight text-emerald-900 serif">Verdant Haven</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-emerald-800">
          <a href="#home" className="hover:text-emerald-600 transition-colors">Home</a>
          <a href="#catalog" className="hover:text-emerald-600 transition-colors">Catalog</a>
          <a href="#about" className="hover:text-emerald-600 transition-colors">About</a>
          <a href="#contact" className="hover:text-emerald-600 transition-colors">Contact</a>
        </nav>

        <div className="flex items-center gap-4">
          <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-full text-sm font-semibold transition-all shadow-lg shadow-emerald-200">
            Shop Now
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
