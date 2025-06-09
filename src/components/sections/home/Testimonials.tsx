import React, { useState, useEffect, useRef } from 'react';
import SectionHeading from '../../ui/SectionHeading';
import TestimonialCard from '../../ui/TestimonialCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  
  const testimonials = [
    {
      quote: "Transcendents3 transformed our financial processes and saved us hours every week. Their expertise in QuickBooks optimization streamlined our entire operation.",
      author: "Sarah Johnson",
      position: "CEO",
      company: "Brightline Retail",
      rating: 5,
    },
    {
      quote: "The team at Transcendents3 handled our payroll with incredible precision. They're responsive, detail-oriented, and truly care about our business success.",
      author: "Michael Chen",
      position: "Operations Director",
      company: "Nexus Technologies",
      rating: 5,
    },
    {
      quote: "Their tax preparation services saved us thousands of dollars in deductions we would have missed. Extremely knowledgeable and professional.",
      author: "Jennifer Miller",
      position: "Founder",
      company: "Coastal Designs",
      rating: 5,
    },
    {
      quote: "As a small business owner, having Transcendents3 manage our bookkeeping gives me peace of mind and lets me focus on growing my business.",
      author: "David Williams",
      position: "Owner",
      company: "Urban Craftworks",
      rating: 5,
    },
    {
      quote: "The CFO services they provide have been instrumental in helping us make strategic financial decisions during our expansion phase.",
      author: "Lisa Rodriguez",
      position: "President",
      company: "Summit Solutions",
      rating: 5,
    },
  ];

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [activeIndex]);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section className="py-16 md:py-24 bg-primary-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="What Our Clients Say"
          subtitle="Don't just take our word for it. Here's what our clients have to say about our services."
          centered
          className="text-white"
          subtitleClassName="text-neutral-300"
        />
        
        <div className="relative max-w-4xl mx-auto">
          {/* Desktop Testimonials (3 cards side by side) */}
          <div className="hidden lg:block">
            <div className="grid grid-cols-3 gap-6">
              {[
                activeIndex === 0 ? testimonials.length - 1 : activeIndex - 1,
                activeIndex,
                activeIndex === testimonials.length - 1 ? 0 : activeIndex + 1
              ].map((index, i) => (
                <div 
                  key={i} 
                  className={`transition-all duration-300 ${
                    i === 1 
                      ? 'transform scale-105 z-10' 
                      : 'opacity-75 scale-95'
                  }`}
                >
                  <TestimonialCard
                    quote={testimonials[index].quote}
                    author={testimonials[index].author}
                    position={testimonials[index].position}
                    company={testimonials[index].company}
                    rating={testimonials[index].rating}
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Mobile & Tablet Testimonials (single card) */}
          <div className="lg:hidden">
            <div ref={sliderRef} className="overflow-hidden">
              <div 
                className="transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${activeIndex * 100}%)`,
                  display: 'flex',
                }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <TestimonialCard
                      quote={testimonial.quote}
                      author={testimonial.author}
                      position={testimonial.position}
                      company={testimonial.company}
                      rating={testimonial.rating}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Navigation Controls */}
          <div className="flex justify-center items-center mt-8 space-x-4">
            <button 
              onClick={prevSlide}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} className="text-white" />
            </button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    index === activeIndex ? 'bg-secondary-500' : 'bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextSlide}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} className="text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;