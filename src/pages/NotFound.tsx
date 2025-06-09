import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import { Home, Search, Phone } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-50 px-4">
      <div className="text-center max-w-lg">
        <h1 className="text-9xl font-bold text-primary-800 mb-6">404</h1>
        <h2 className="text-3xl font-semibold text-primary-700 mb-4">Page Not Found</h2>
        <p className="text-neutral-600 mb-8">
          The page you are looking for doesn't exist or has been moved.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
          <Button variant="primary" href="/" className="flex items-center justify-center">
            <Home size={18} className="mr-2" />
            Go Home
          </Button>
          <Button variant="outline" href="/contact" className="flex items-center justify-center">
            <Phone size={18} className="mr-2" />
            Contact Us
          </Button>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-primary-800 mb-3">
            Looking for something specific?
          </h3>
          <div className="relative">
            <input
              type="text"
              placeholder="Search our website..."
              className="w-full pl-10 pr-4 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
            />
            <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;