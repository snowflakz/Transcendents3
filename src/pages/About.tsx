import React from 'react';
import SectionHeading from '../components/ui/SectionHeading';
import { Award, Users, Target, Clock } from 'lucide-react';
import Button from '../components/ui/Button';

const About: React.FC = () => {
  const teamMembers = [
    {
      name: "Jennifer Thompson",
      position: "Founder & CEO",
      bio: "With over 15 years of experience in financial management, Jennifer founded Transcendents3 to help small businesses thrive through expert financial guidance.",
      imageSrc: "https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      name: "Michael Rodriguez",
      position: "Senior Tax Specialist",
      bio: "Michael specializes in tax strategy and compliance, helping clients navigate complex tax regulations while maximizing deductions and minimizing liabilities.",
      imageSrc: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      name: "Sarah Chen",
      position: "QuickBooks Expert",
      bio: "As a certified QuickBooks ProAdvisor, Sarah helps clients optimize their accounting systems for maximum efficiency and accuracy.",
      imageSrc: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      name: "David Wilson",
      position: "CFO Services Director",
      bio: "David brings Fortune 500 financial leadership experience to help growing businesses make strategic financial decisions.",
      imageSrc: "https://images.pexels.com/photos/3785104/pexels-photo-3785104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ];

  return (
    <>
      {/* Page Header */}
      <div className="bg-primary-800 py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-heading text-white mb-6">
              About Transcendents3
            </h1>
            <p className="text-xl text-neutral-200">
              Your trusted partner for financial excellence
            </p>
          </div>
        </div>
      </div>
      
      {/* Our Story */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <img 
                src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Transcendents3 team meeting" 
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>
            
            <div className="lg:w-1/2">
              <SectionHeading
                title="Our Story"
                subtitle="How we became the financial partner of choice for growing businesses"
              />
              
              <div className="space-y-4 text-neutral-700">
                <p>
                  Founded in 2010, Transcendents3 began with a simple mission: to provide small and medium-sized businesses with the financial expertise typically available only to large corporations.
                </p>
                <p>
                  Our founder, Jennifer Thompson, recognized that many business owners were struggling with complex financial tasks that took them away from growing their businesses. With her background in corporate finance and a passion for helping entrepreneurs succeed, she assembled a team of financial experts dedicated to making financial management accessible and effective.
                </p>
                <p>
                  Today, Transcendents3 serves hundreds of clients across diverse industries, providing comprehensive financial services that help businesses not just survive, but thrive in competitive markets.
                </p>
                <p>
                  Our name, Transcendents3, reflects our commitment to helping businesses transcend financial challenges through our three core values: expertise, integrity, and personalized service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Values */}
      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Values"
            subtitle="The principles that guide everything we do"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {[
              {
                icon: <Award className="h-12 w-12 text-secondary-500" />,
                title: "Excellence",
                description: "We hold ourselves to the highest standards of accuracy, efficiency, and service in everything we do."
              },
              {
                icon: <Users className="h-12 w-12 text-secondary-500" />,
                title: "Partnership",
                description: "We work alongside our clients as true partners, committed to their long-term financial success."
              },
              {
                icon: <Target className="h-12 w-12 text-secondary-500" />,
                title: "Innovation",
                description: "We continuously improve our processes and embrace new technologies to deliver better results."
              },
              {
                icon: <Clock className="h-12 w-12 text-secondary-500" />,
                title: "Reliability",
                description: "Our clients count on us to deliver accurate, timely financial services they can trust."
              }
            ].map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="flex justify-center mb-5">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold font-heading text-primary-800 mb-3">
                  {value.title}
                </h3>
                <p className="text-neutral-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Our Team */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Meet Our Team"
            subtitle="The financial experts dedicated to your business success"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:-translate-y-1 duration-300">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={member.imageSrc} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold font-heading text-primary-800 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-secondary-500 font-medium mb-3">
                    {member.position}
                  </p>
                  <p className="text-neutral-600 text-sm">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Certifications */}
      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Certifications"
            subtitle="Professional credentials that ensure the highest quality service"
            centered
          />
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            {[
              { name: "Certified Public Accountant (CPA)" },
              { name: "QuickBooks ProAdvisor" },
              { name: "Certified Bookkeeper (CB)" },
              { name: "Enrolled Agent (EA)" }
            ].map((cert, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center flex items-center justify-center min-h-32">
                <span className="text-lg font-medium text-primary-800">{cert.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="bg-primary-800 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-white mb-6">
              Ready to work with our team?
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

export default About;