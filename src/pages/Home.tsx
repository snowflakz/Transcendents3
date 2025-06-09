import React from 'react';
import Hero from '../components/sections/home/Hero';
import Services from '../components/sections/home/Services';
import Testimonials from '../components/sections/home/Testimonials';
import CallToAction from '../components/sections/home/CallToAction';
import { Shield, TrendingUp, Clock, BadgeCheck } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      
      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Why Choose Transcendents3"
            subtitle="We deliver exceptional financial services tailored to your business needs"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {[
              {
                icon: <Shield className="h-10 w-10 text-secondary-500" />,
                title: "Trusted Expertise",
                description: "Our team of certified professionals brings years of experience across various industries."
              },
              {
                icon: <TrendingUp className="h-10 w-10 text-secondary-500" />,
                title: "Growth-Focused",
                description: "We help you make strategic financial decisions that drive sustainable business growth."
              },
              {
                icon: <Clock className="h-10 w-10 text-secondary-500" />,
                title: "Time-Saving",
                description: "Our efficient services free up your time to focus on what matters most—your business."
              },
              {
                icon: <BadgeCheck className="h-10 w-10 text-secondary-500" />,
                title: "Tailored Solutions",
                description: "We customize our approach to fit your unique business needs and objectives."
              }
            ].map((feature, index) => (
              <div key={index} className="text-center p-6 border border-neutral-100 rounded-lg transition-all duration-300 hover:shadow-md">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold font-heading text-primary-800 mb-3">
                  {feature.title}
                </h3>
                <p className="text-neutral-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <Services />
      
      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Clients Served" },
              { number: "15+", label: "Years of Experience" },
              { number: "98%", label: "Client Retention" },
              { number: "$5M+", label: "Tax Savings Delivered" }
            ].map((stat, index) => (
              <div key={index} className="text-center p-8 border-b-4 border-secondary-500 bg-neutral-50 rounded-lg">
                <div className="text-4xl md:text-5xl font-bold text-primary-800 mb-2">
                  {stat.number}
                </div>
                <div className="text-neutral-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <Testimonials />
      <CallToAction />
    </>
  );
};

export default Home;