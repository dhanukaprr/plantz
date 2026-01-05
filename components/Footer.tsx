
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-emerald-950 text-emerald-50 pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </div>
              <span className="text-xl font-bold tracking-tight serif">Verdant Haven</span>
            </div>
            <p className="text-emerald-300/70 text-sm leading-relaxed mb-6">
              Specializing in rare and architectural plants for the modern collector. We believe every home deserves a sanctuary.
            </p>
            <div className="flex gap-4">
              {['instagram', 'twitter', 'facebook'].map(social => (
                <a key={social} href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors">
                  <span className="capitalize text-xs">{social[0]}</span>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-lg">Shop</h4>
            <ul className="space-y-4 text-sm text-emerald-300/70">
              <li><a href="#" className="hover:text-emerald-200 transition-colors">Indoor Plants</a></li>
              <li><a href="#" className="hover:text-emerald-200 transition-colors">Rare Finds</a></li>
              <li><a href="#" className="hover:text-emerald-200 transition-colors">Tools & Accessories</a></li>
              <li><a href="#" className="hover:text-emerald-200 transition-colors">E-Gift Cards</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-lg">Support</h4>
            <ul className="space-y-4 text-sm text-emerald-300/70">
              <li><a href="#" className="hover:text-emerald-200 transition-colors">Care Guides</a></li>
              <li><a href="#" className="hover:text-emerald-200 transition-colors">Shipping Policy</a></li>
              <li><a href="#" className="hover:text-emerald-200 transition-colors">Refunds & Returns</a></li>
              <li><a href="#" className="hover:text-emerald-200 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-lg">Newsletter</h4>
            <p className="text-sm text-emerald-300/70 mb-4">Join our garden club for weekly tips and early access to rare drops.</p>
            <form className="space-y-3">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full bg-white/5 border border-white/10 rounded-lg py-3 px-4 text-sm focus:outline-none focus:ring-1 focus:ring-emerald-500"
              />
              <button className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 rounded-lg text-sm transition-all">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-emerald-300/40">
          <p>© 2024 Verdant Haven Nursery. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
