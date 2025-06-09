import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
  className?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  href,
  className = '',
}) => {
  return (
    <div 
      className={`bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg group ${className}`}
    >
      <div className="mb-4 text-secondary-500 bg-secondary-50 p-3 rounded-full inline-block">
        {icon}
      </div>
      <h3 className="text-xl font-semibold font-heading text-primary-800 mb-3">
        {title}
      </h3>
      <p className="text-neutral-600 mb-4">
        {description}
      </p>
      <Link 
        to={href} 
        className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors"
      >
        Learn More 
        <ArrowRight size={16} className="ml-1 transform group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  );
};

export default ServiceCard;