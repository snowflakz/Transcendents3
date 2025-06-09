import React from 'react';
import Button from '../../ui/Button';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-primary-800 overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700"></div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.pexels.com/photos/3943716/pexels-photo-3943716.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center"></div>
      </div>
      
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-white leading-tight mb-6">
              Take Control of Your <span className="text-secondary-500">Financial Future</span>
            </h1>
            <p className="text-xl text-neutral-200 mb-8 max-w-lg">
              Expert bookkeeping, payroll, and financial consulting tailored to help your business thrive.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="secondary" 
                size="lg" 
                href="/contact"
              >
                Schedule a Free Consultation
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                href="/services"
                className="border-white text-white hover:bg-white/10"
              >
                Explore Our Services
              </Button>
            </div>
            
            {/* Trust indicators */}
            <div className="mt-12 flex flex-wrap gap-6 items-center">
              <div className="flex items-center">
                <span className="text-white text-xl font-bold mr-2">500+</span>
                <span className="text-neutral-300 text-sm">Clients Served</span>
              </div>
              <div className="w-px h-8 bg-white/20"></div>
              <div className="flex items-center">
                <span className="text-white text-xl font-bold mr-2">15+</span>
                <span className="text-neutral-300 text-sm">Years Experience</span>
              </div>
              <div className="w-px h-8 bg-white/20"></div>
              <div className="flex items-center">
                <span className="text-white text-xl font-bold mr-2">4.9</span>
                <span className="text-neutral-300 text-sm">Customer Rating</span>
              </div>
            </div>
          </div>
          
          <div className="hidden lg:block relative animate-slide-in-right">
            <div className="bg-white p-8 rounded-lg shadow-xl">
              <h3 className="text-xl font-semibold font-heading text-primary-800 mb-4">
                Free Financial Health Check
              </h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="(123) 456-7890"
                  />
                </div>
                <div>
                  <label htmlFor="business" className="block text-sm font-medium text-neutral-700 mb-1">
                    Business Type
                  </label>
                  <select
                    id="business"
                    className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                  >
                    <option value="">Select your business type</option>
                    <option value="retail">Retail</option>
                    <option value="service">Service</option>
                    <option value="manufacturing">Manufacturing</option>
                    <option value="nonprofit">Nonprofit</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <Button
                  variant="secondary"
                  size="md"
                  type="submit"
                  fullWidth
                >
                  Get Your Free Assessment
                </Button>
              </form>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-6 -right-6 bg-secondary-500 text-white p-4 rounded-lg shadow-lg transform rotate-3">
              <span className="font-bold">100% Free</span>
              <span className="block text-sm">No Obligation</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;