import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-800 text-white pt-16 pb-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link to="/" className="inline-block mb-4">
              <img 
                src="/logo Transcent 2_png.png" 
                alt="Transcedent S3" 
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-neutral-300 mb-4">
              Professional financial services tailored for small and medium-sized businesses.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-white hover:text-secondary-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-secondary-500 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-secondary-500 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-white hover:text-secondary-500 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {[
                { name: 'Bookkeeping', path: '/services#bookkeeping' },
                { name: 'Payroll', path: '/services#payroll' },
                { name: 'Tax Preparation', path: '/services#tax' },
                { name: 'Business Consulting', path: '/services#consulting' },
                { name: 'CFO Services', path: '/services#cfo' },
                { name: 'QuickBooks Support', path: '/services#quickbooks' },
              ].map((service) => (
                <li key={service.name}>
                  <Link 
                    to={service.path} 
                    className="text-neutral-300 hover:text-secondary-500 transition-colors flex items-center"
                  >
                    <ArrowRight size={14} className="mr-2" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: 'About Us', path: '/about' },
                { name: 'Blog', path: '/blog' },
                { name: 'Contact', path: '/contact' },
                { name: 'Privacy Policy', path: '/privacy-policy' },
                { name: 'Terms of Service', path: '/terms-of-service' },
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="text-neutral-300 hover:text-secondary-500 transition-colors flex items-center"
                  >
                    <ArrowRight size={14} className="mr-2" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="mr-3 text-secondary-500 mt-1 flex-shrink-0" />
                <span className="text-neutral-300">
                  123 Financial Street<br />
                  Suite 456<br />
                  New York, NY 10001
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-3 text-secondary-500 flex-shrink-0" />
                <a href="tel:+11234567890" className="text-neutral-300 hover:text-secondary-500 transition-colors">
                  (123) 456-7890
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-3 text-secondary-500 flex-shrink-0" />
                <a href="mailto:info@transcedents3.com" className="text-neutral-300 hover:text-secondary-500 transition-colors">
                  info@transcedents3.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-700 mt-12 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-neutral-400 text-sm">
              &copy; {currentYear} Transcedent S3. All rights reserved.
            </p>
            <p className="text-neutral-400 text-sm mt-2 md:mt-0">
              Designed with ❤️ for financial excellence
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;