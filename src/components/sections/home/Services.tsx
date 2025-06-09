import React from 'react';
import { BookOpen, DollarSign, FileText, LineChart, BarChart4, Laptop } from 'lucide-react';
import SectionHeading from '../../ui/SectionHeading';
import ServiceCard from '../../ui/ServiceCard';

const Services: React.FC = () => {
  const services = [
    {
      icon: <BookOpen size={24} />,
      title: 'Bookkeeping',
      description: 'Accurate, hassle-free bookkeeping to keep your finances organized and up-to-date.',
      href: '/services#bookkeeping',
    },
    {
      icon: <DollarSign size={24} />,
      title: 'Payroll',
      description: 'Streamlined payroll solutions to ensure your team is paid accurately and on time.',
      href: '/services#payroll',
    },
    {
      icon: <FileText size={24} />,
      title: 'Tax Preparation',
      description: 'Maximize deductions and ensure compliance with our expert income tax services.',
      href: '/services#tax',
    },
    {
      icon: <LineChart size={24} />,
      title: 'Business Consulting',
      description: 'Strategic advice to optimize your operations and drive sustainable growth.',
      href: '/services#consulting',
    },
    {
      icon: <BarChart4 size={24} />,
      title: 'CFO Services',
      description: 'Expert financial leadership without the cost of a full-time executive.',
      href: '/services#cfo',
    },
    {
      icon: <Laptop size={24} />,
      title: 'QuickBooks Support',
      description: 'Professional QuickBooks file repair, cleanup, and optimization services.',
      href: '/services#quickbooks',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-neutral-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Our Financial Services"
          subtitle="Comprehensive solutions tailored to meet your business needs"
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              href={service.href}
              className={`transform transition-transform hover:-translate-y-1 ${index % 2 === 0 ? 'animate-fade-in delay-100' : 'animate-fade-in delay-200'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;