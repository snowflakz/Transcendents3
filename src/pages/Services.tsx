import React from 'react';
import SectionHeading from '../components/ui/SectionHeading';
import { BookOpen, DollarSign, FileText, LineChart, BarChart4, Laptop, CheckCircle } from 'lucide-react';
import Button from '../components/ui/Button';

const Services: React.FC = () => {
  const services = [
    {
      id: "bookkeeping",
      icon: <BookOpen size={32} className="text-secondary-500" />,
      title: "Bookkeeping",
      description: "Keep your financial records accurate, up-to-date, and organized with our comprehensive bookkeeping services.",
      features: [
        "Monthly financial statement preparation",
        "Accounts payable and receivable management",
        "Bank and credit card reconciliation",
        "Financial record organization and maintenance",
        "General ledger maintenance",
        "Chart of accounts setup and management"
      ]
    },
    {
      id: "payroll",
      icon: <DollarSign size={32} className="text-secondary-500" />,
      title: "Payroll",
      description: "Ensure your employees are paid accurately and on time while maintaining compliance with tax regulations.",
      features: [
        "Payroll processing and direct deposit",
        "Tax withholding and reporting",
        "Year-end W-2 and 1099 preparation",
        "Payroll tax filing",
        "Employee benefits administration",
        "Time and attendance tracking integration"
      ]
    },
    {
      id: "tax",
      icon: <FileText size={32} className="text-secondary-500" />,
      title: "Tax Preparation",
      description: "Maximize your deductions and ensure compliance with our expert income tax preparation services.",
      features: [
        "Business and personal tax return preparation",
        "Quarterly estimated tax payments",
        "Tax planning and strategy",
        "IRS representation",
        "Sales tax compliance",
        "Multi-state tax filings"
      ]
    },
    {
      id: "consulting",
      icon: <LineChart size={32} className="text-secondary-500" />,
      title: "Business Consulting",
      description: "Get strategic advice to optimize your operations, improve profitability, and drive sustainable growth.",
      features: [
        "Business plan development",
        "Cash flow forecasting and management",
        "Budget preparation and analysis",
        "Profit improvement strategies",
        "Business process optimization",
        "Financial risk assessment"
      ]
    },
    {
      id: "cfo",
      icon: <BarChart4 size={32} className="text-secondary-500" />,
      title: "CFO Services",
      description: "Access expert financial leadership without the cost of hiring a full-time Chief Financial Officer.",
      features: [
        "Financial strategy development",
        "Key performance indicator (KPI) tracking",
        "Financial reporting and analysis",
        "Investment evaluation",
        "Debt management and financing",
        "Merger and acquisition support"
      ]
    },
    {
      id: "quickbooks",
      icon: <Laptop size={32} className="text-secondary-500" />,
      title: "QuickBooks Support",
      description: "Optimize your QuickBooks experience with our file repair, cleanup, and customization services.",
      features: [
        "QuickBooks setup and customization",
        "File review and cleanup",
        "Error correction and troubleshooting",
        "Custom report creation",
        "QuickBooks training for your team",
        "Integration with other business systems"
      ]
    }
  ];

  return (
    <>
      {/* Page Header */}
      <div className="bg-primary-800 py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-heading text-white mb-6">
              Our Financial Services
            </h1>
            <p className="text-xl text-neutral-200 mb-8">
              Comprehensive financial solutions tailored to help your business thrive
            </p>
          </div>
        </div>
      </div>
      
      {/* Services Overview */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              id={service.id}
              className={`mb-24 ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'} scroll-mt-24`}
            >
              <div className="flex flex-col lg:flex-row gap-12 items-center">
                {/* Image Column */}
                <div className="lg:w-5/12 bg-neutral-100 rounded-xl overflow-hidden shadow-md h-64 lg:h-auto relative">
                  <div className="absolute inset-0 flex items-center justify-center bg-primary-800/10">
                    {service.icon}
                  </div>
                </div>
                
                {/* Content Column */}
                <div className="lg:w-7/12">
                  <div className="mb-6">
                    <h2 className="text-3xl font-bold font-heading text-primary-800 mb-4">
                      {service.title}
                    </h2>
                    <p className="text-lg text-neutral-600 mb-6">
                      {service.description}
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                      {service.features.map((feature, fIndex) => (
                        <div key={fIndex} className="flex items-start">
                          <CheckCircle size={18} className="text-secondary-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-neutral-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Button variant="primary" href="/contact" size="md">
                      Get Started
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="bg-primary-800 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-white mb-6">
              Ready to transform your financial management?
            </h2>
            <p className="text-lg text-neutral-200 mb-8">
              Contact us today to schedule a free consultation and discover how our financial services can help your business thrive.
            </p>
            <Button variant="secondary" size="lg" href="/contact">
              Schedule a Free Consultation
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;