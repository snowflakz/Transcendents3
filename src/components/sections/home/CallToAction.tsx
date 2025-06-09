import React from 'react';
import Button from '../../ui/Button';
import { CheckCircle } from 'lucide-react';

const CallToAction: React.FC = () => {
  const benefits = [
    'Save time and focus on growing your business',
    'Reduce costly financial errors and risks',
    'Gain clear insights into your financial health',
    'Ensure tax compliance and maximize deductions',
    'Access expert financial guidance when you need it',
  ];

  return (
    <section className="py-16 md:py-24 bg-neutral-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Image Column */}
            <div className="relative h-64 lg:h-auto overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/3760069/pexels-photo-3760069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Business professionals in meeting" 
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary-800/80 to-primary-900/60"></div>
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className="text-center lg:text-left">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    Ready to Transform Your Financial Management?
                  </h3>
                  <p className="text-neutral-200 max-w-md mx-auto lg:mx-0">
                    Join hundreds of businesses that have streamlined their financial operations with Transcendents3.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Content Column */}
            <div className="p-8 md:p-12">
              <h3 className="text-2xl font-semibold font-heading text-primary-800 mb-6">
                Schedule Your Free Consultation
              </h3>
              
              <ul className="space-y-3 mb-8">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle size={20} className="text-secondary-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-neutral-700">{benefit}</span>
                  </li>
                ))}
              </ul>
              
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="cta-name" className="block text-sm font-medium text-neutral-700 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="cta-name"
                      className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label htmlFor="cta-email" className="block text-sm font-medium text-neutral-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="cta-email"
                      className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="cta-phone" className="block text-sm font-medium text-neutral-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="cta-phone"
                    className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="(123) 456-7890"
                  />
                </div>
                <div>
                  <label htmlFor="cta-message" className="block text-sm font-medium text-neutral-700 mb-1">
                    How can we help?
                  </label>
                  <textarea
                    id="cta-message"
                    rows={3}
                    className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="Tell us about your business and financial needs"
                  ></textarea>
                </div>
                <div className="!mt-6">
                  <Button
                    variant="primary"
                    size="lg"
                    type="submit"
                    fullWidth
                  >
                    Request Your Free Consultation
                  </Button>
                </div>
                <p className="text-xs text-neutral-500 text-center">
                  By submitting this form, you agree to our privacy policy. We'll never share your information.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;