import { useState } from 'react';
import { Database, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Database className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">True Data Solution</span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('pricing')}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              Pricing
            </button>
            <button 
              onClick={() => scrollToSection('why-us')}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              Why Choose Us
            </button>
            <a 
              href="https://wa.me/message/3GE5JHLTIOBRI1"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200"
            >
              Contact Us
            </a>
          </nav>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <button 
                onClick={() => scrollToSection('home')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('pricing')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600"
              >
                Pricing
              </button>
              <button 
                onClick={() => scrollToSection('why-us')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600"
              >
                Why Choose Us
              </button>
              <a 
                href="https://wa.me/message/3GE5JHLTIOBRI1"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-left px-3 py-2 text-blue-600 font-medium"
              >
                Contact Us
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;