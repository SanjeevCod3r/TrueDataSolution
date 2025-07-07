import React from 'react';
import { Database, Mail, Phone, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <img src="/src/assets/logo/logo.png" alt="True Data Solution" className="h-8 w-8 filter invert" />
              <span className="text-xl font-bold ml-2">True Data Solution</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-lg">
              Your trusted partner for precision data mining and business intelligence. 
              We help businesses connect with their ideal customers through accurate, 
              actionable data solutions.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">info@truedatasolution.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">+91 7607320240</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3 text-gray-300">
              <li>Data Mining</li>
              <li>Audience Segmentation</li>
              <li>Business Intelligence</li>
              <li>Market Research</li>
              <li>Lead Generation</li>
              <li>Data Analytics</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Info</h3>
            <div className="space-y-4 text-gray-300">
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-blue-400 mt-0.5" />
                <div>
                  <p className="font-medium">Response Time</p>
                  <p className="text-sm">Within 24 hours</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-400 mt-0.5" />
                <div>
                  <p className="font-medium">Coverage</p>
                  <p className="text-sm">Global Data Solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 True Data Solution. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Data Protection
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;