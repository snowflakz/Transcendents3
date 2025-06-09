import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, CheckCircle } from 'lucide-react';
import Button from '../components/ui/Button';

const Contact: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
    }, 1500);
  };
  
  return (
    <>
      {/* Page Header */}
      <div className="bg-primary-800 py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-heading text-white mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-neutral-200">
              Reach out to our team to schedule a consultation or learn more about our services
            </p>
          </div>
        </div>
      </div>
      
      {/* Contact Information and Form */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Contact Information */}
            <div className="lg:w-1/3">
              <h2 className="text-2xl font-bold font-heading text-primary-800 mb-6">
                Get in Touch
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin size={24} className="text-secondary-500 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-primary-700 mb-1">Our Office</h3>
                    <p className="text-neutral-600">
                      123 Financial Street<br />
                      Suite 456<br />
                      New York, NY 10001
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone size={24} className="text-secondary-500 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-primary-700 mb-1">Phone</h3>
                    <p className="text-neutral-600">
                      <a href="tel:+11234567890" className="hover:text-primary-600 transition-colors">
                        (123) 456-7890
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail size={24} className="text-secondary-500 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-primary-700 mb-1">Email</h3>
                    <p className="text-neutral-600">
                      <a href="mailto:info@transcendents3.com" className="hover:text-primary-600 transition-colors">
                        info@transcendents3.com
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock size={24} className="text-secondary-500 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-primary-700 mb-1">Business Hours</h3>
                    <p className="text-neutral-600">
                      Monday - Friday: 9:00 AM - 5:00 PM<br />
                      Saturday - Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h3 className="text-xl font-semibold font-heading text-primary-800 mb-4">
                  Follow Us
                </h3>
                <div className="flex space-x-4">
                  {['facebook', 'twitter', 'linkedin', 'instagram'].map((social) => (
                    <a 
                      key={social}
                      href="#"
                      className="bg-neutral-100 hover:bg-primary-50 text-primary-800 p-3 rounded-full transition-colors"
                    >
                      <span className="sr-only">{social}</span>
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10zm-10 5.5a.5.5 0 00.5-.5v-5h5a.5.5 0 000-1h-5v-5a.5.5 0 00-1 0v5h-5a.5.5 0 000 1h5v5a.5.5 0 00.5.5z" clipRule="evenodd" />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="lg:w-2/3">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold font-heading text-primary-800 mb-6">
                  Send Us a Message
                </h2>
                
                {formStatus === 'success' ? (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                    <div className="flex justify-center mb-4">
                      <CheckCircle size={48} className="text-green-500" />
                    </div>
                    <h3 className="text-xl font-semibold text-green-800 mb-2">
                      Thank You!
                    </h3>
                    <p className="text-green-700 mb-4">
                      Your message has been received. We'll get back to you shortly.
                    </p>
                    <Button
                      variant="outline"
                      onClick={() => setFormStatus('idle')}
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-neutral-700 mb-1">
                          First Name*
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          required
                          className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                          placeholder="John"
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-neutral-700 mb-1">
                          Last Name*
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          required
                          className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                          placeholder="Smith"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
                          Email Address*
                        </label>
                        <input
                          type="email"
                          id="email"
                          required
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
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-neutral-700 mb-1">
                        Subject*
                      </label>
                      <input
                        type="text"
                        id="subject"
                        required
                        className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                        placeholder="How can we help you?"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">
                        Message*
                      </label>
                      <textarea
                        id="message"
                        rows={5}
                        required
                        className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                        placeholder="Please provide details about your inquiry..."
                      ></textarea>
                    </div>
                    
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="consent"
                        required
                        className="h-4 w-4 text-primary-600 border-neutral-300 rounded focus:ring-primary-500"
                      />
                      <label htmlFor="consent" className="ml-2 block text-sm text-neutral-700">
                        I consent to having this website store my submitted information so they can respond to my inquiry.
                      </label>
                    </div>
                    
                    <div>
                      <Button
                        variant="primary"
                        size="lg"
                        type="submit"
                        disabled={formStatus === 'submitting'}
                        className="w-full md:w-auto"
                      >
                        {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
                      </Button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold font-heading text-primary-800 mb-12 text-center">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-6">
              {[
                {
                  question: "What services does Transcendents3 offer?",
                  answer: "Transcendents3 offers a comprehensive range of financial services including bookkeeping, payroll processing, income tax preparation, business consulting, CFO services, QuickBooks file repair and cleanup, fixed asset and inventory tracking, and custom financial reporting."
                },
                {
                  question: "How much do your services cost?",
                  answer: "Our service costs vary based on the specific needs of your business. We offer customized packages tailored to your requirements. Please contact us for a free consultation to discuss your needs and receive a detailed quote."
                },
                {
                  question: "Can you work with my existing accounting software?",
                  answer: "Yes, we can work with most major accounting software platforms. We specialize in QuickBooks but also have experience with Xero, FreshBooks, and other popular accounting solutions."
                },
                {
                  question: "How often will we communicate about my finances?",
                  answer: "Communication frequency depends on your service package and preferences. We typically provide monthly reports for bookkeeping clients, quarterly updates for tax clients, and can schedule regular check-ins for all clients. We're always available to answer questions as they arise."
                },
                {
                  question: "Can you help with tax planning throughout the year?",
                  answer: "Absolutely! We believe in proactive tax planning rather than just tax preparation. We can help you implement strategies throughout the year to minimize your tax liability while ensuring compliance with all regulations."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold font-heading text-primary-800 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-neutral-600">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;