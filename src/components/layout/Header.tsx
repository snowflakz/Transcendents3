import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import Button from '../ui/Button';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services', hasDropdown: true },
    { name: 'About', path: '/about' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  const serviceLinks = [
    { name: 'Bookkeeping', path: '/services#bookkeeping' },
    { name: 'Payroll', path: '/services#payroll' },
    { name: 'Tax Preparation', path: '/services#tax' },
    { name: 'Business Consulting', path: '/services#consulting' },
    { name: 'CFO Services', path: '/services#cfo' },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="/logo Transcent 2_png.png" 
              alt="Transcedent S3" 
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                {link.hasDropdown ? (
                  <button 
                    className="flex items-center font-medium text-neutral-800 hover:text-primary-600 transition-colors"
                    onClick={() => setServicesDropdown(!servicesDropdown)}
                    onMouseEnter={() => setServicesDropdown(true)}
                    onMouseLeave={() => setServicesDropdown(false)}
                  >
                    {link.name}
                    <ChevronDown size={16} className="ml-1" />
                  </button>
                ) : (
                  <Link 
                    to={link.path} 
                    className={`font-medium transition-colors ${
                      location.pathname === link.path 
                        ? 'text-primary-600' 
                        : 'text-neutral-800 hover:text-primary-600'
                    }`}
                  >
                    {link.name}
                  </Link>
                )}

                {/* Services Dropdown */}
                {link.hasDropdown && (
                  <div 
                    className={`absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-md p-2 transition-all transform origin-top-left ${
                      servicesDropdown ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'
                    }`}
                    onMouseEnter={() => setServicesDropdown(true)}
                    onMouseLeave={() => setServicesDropdown(false)}
                  >
                    {serviceLinks.map((service) => (
                      <Link
                        key={service.name}
                        to={service.path}
                        className="block px-4 py-2 text-sm text-neutral-700 hover:bg-primary-50 hover:text-primary-600 rounded-md transition-colors"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button variant="primary" size="md" href="/contact">
              Free Consultation
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-md text-neutral-800"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isOpen ? 'max-h-screen opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-2 space-y-1 bg-white rounded-md shadow-lg">
            {navLinks.map((link) => (
              <React.Fragment key={link.name}>
                {link.hasDropdown ? (
                  <>
                    <button
                      className="w-full flex justify-between items-center px-4 py-2 text-neutral-800 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                      onClick={() => setServicesDropdown(!servicesDropdown)}
                    >
                      {link.name}
                      <ChevronDown size={16} className={`transition-transform ${servicesDropdown ? 'rotate-180' : ''}`} />
                    </button>
                    
                    <div className={`transition-all duration-300 ${servicesDropdown ? 'max-h-96' : 'max-h-0 overflow-hidden'}`}>
                      {serviceLinks.map((service) => (
                        <Link
                          key={service.name}
                          to={service.path}
                          className="block pl-8 pr-4 py-2 text-sm text-neutral-700 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    to={link.path}
                    className={`block px-4 py-2 ${
                      location.pathname === link.path 
                        ? 'text-primary-600 bg-primary-50' 
                        : 'text-neutral-800 hover:bg-primary-50 hover:text-primary-600'
                    } transition-colors`}
                  >
                    {link.name}
                  </Link>
                )}
              </React.Fragment>
            ))}
            <div className="px-4 py-3 border-t border-neutral-100">
              <Button variant="primary" size="sm" fullWidth href="/contact">
                Free Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;