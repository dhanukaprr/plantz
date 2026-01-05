
import React from 'react';
import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import PlantGrid from './components/PlantGrid.tsx';
import AIBotanist from './components/AIBotanist.tsx';
import Footer from './components/Footer.tsx';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
        <Hero />
        
        {/* Features Section */}
        <section className="py-20 bg-emerald-50/50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
              <div className="p-8">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-emerald-600 shadow-lg mx-auto mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-emerald-900 mb-3">White Glove Delivery</h3>
                <p className="text-emerald-700/70 text-sm">We handle every plant with extreme care from our greenhouse to your door.</p>
              </div>
              <div className="p-8">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-emerald-600 shadow-lg mx-auto mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-emerald-900 mb-3">Happy Plant Guarantee</h3>
                <p className="text-emerald-700/70 text-sm">Not satisfied? We offer a 30-day health guarantee on every botanical purchase.</p>
              </div>
              <div className="p-8">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-emerald-600 shadow-lg mx-auto mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-emerald-900 mb-3">Expert Advice</h3>
                <p className="text-emerald-700/70 text-sm">Access to our AI Botanist and live plant specialists 24/7 for care tips.</p>
              </div>
            </div>
          </div>
        </section>

        <PlantGrid />

        {/* Promo Section */}
        <section className="py-24 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="bg-emerald-900 rounded-[3rem] p-12 lg:p-20 relative text-center lg:text-left flex flex-col lg:flex-row items-center gap-12">
              <div className="flex-1">
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">Start Your Own <br /> Indoor Urban Jungle</h2>
                <p className="text-emerald-200/80 text-lg mb-8 max-w-xl">Join our community of over 50,000 plant lovers and get 15% off your first rare plant order.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <input type="email" placeholder="Your best email" className="bg-white/10 border border-white/20 rounded-xl px-6 py-4 text-white focus:ring-2 focus:ring-emerald-400 outline-none w-full sm:w-80" />
                  <button className="bg-white text-emerald-900 font-bold px-8 py-4 rounded-xl hover:bg-emerald-50 transition-all">Sign Up Free</button>
                </div>
              </div>
              <div className="flex-1 relative">
                <img src="https://picsum.photos/seed/promo/800/600" className="rounded-2xl shadow-2xl rotate-2" alt="Green interior" />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <AIBotanist />
    </div>
  );
};

export default App;
