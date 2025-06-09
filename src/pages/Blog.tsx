import React from 'react';
import { Search, Calendar, User, ArrowRight } from 'lucide-react';
import Button from '../components/ui/Button';

const Blog: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: "5 Tax-Saving Strategies for Small Business Owners",
      excerpt: "Discover proven tax strategies that can help small business owners legally minimize their tax burden and keep more of what they earn.",
      author: "Michael Rodriguez",
      date: "May 15, 2023",
      category: "Tax Planning",
      imageSrc: "https://images.pexels.com/photos/6693661/pexels-photo-6693661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 2,
      title: "QuickBooks Tips: How to Streamline Your Bookkeeping Process",
      excerpt: "Learn expert tips to make the most of QuickBooks features and save hours each month on your bookkeeping tasks.",
      author: "Sarah Chen",
      date: "April 28, 2023",
      category: "Bookkeeping",
      imageSrc: "https://images.pexels.com/photos/4475524/pexels-photo-4475524.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 3,
      title: "Understanding Cash Flow: The Lifeblood of Your Business",
      excerpt: "Explore why cash flow management is crucial for business survival and practical strategies to improve your cash position.",
      author: "David Wilson",
      date: "April 10, 2023",
      category: "Financial Management",
      imageSrc: "https://images.pexels.com/photos/6801647/pexels-photo-6801647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 4,
      title: "Payroll Compliance: Avoiding Common Mistakes and Penalties",
      excerpt: "Stay compliant with payroll regulations and avoid costly penalties with these essential payroll best practices.",
      author: "Jennifer Thompson",
      date: "March 22, 2023",
      category: "Payroll",
      imageSrc: "https://images.pexels.com/photos/7821906/pexels-photo-7821906.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 5,
      title: "Year-End Financial Checklist for Business Owners",
      excerpt: "Prepare for year-end with this comprehensive checklist to ensure your financial records are accurate and ready for tax season.",
      author: "Michael Rodriguez",
      date: "March 5, 2023",
      category: "Financial Planning",
      imageSrc: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 6,
      title: "The Benefits of Outsourcing Your Financial Operations",
      excerpt: "Discover how outsourcing bookkeeping, payroll, and other financial tasks can save money and improve accuracy for growing businesses.",
      author: "Sarah Chen",
      date: "February 18, 2023",
      category: "Business Strategy",
      imageSrc: "https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
  ];

  const categories = [
    "All Categories",
    "Tax Planning",
    "Bookkeeping",
    "Payroll",
    "Financial Management",
    "Business Strategy",
    "QuickBooks Tips"
  ];

  return (
    <>
      {/* Page Header */}
      <div className="bg-primary-800 py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-heading text-white mb-6">
              Financial Insights Blog
            </h1>
            <p className="text-xl text-neutral-200">
              Expert advice and tips to help you manage your finances and grow your business
            </p>
          </div>
        </div>
      </div>
      
      {/* Blog Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main Content */}
            <div className="lg:w-2/3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blogPosts.map((post) => (
                  <article 
                    key={post.id} 
                    className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:-translate-y-1 duration-300"
                  >
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={post.imageSrc} 
                        alt={post.title} 
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center text-sm text-neutral-500 mb-3">
                        <span className="bg-secondary-100 text-secondary-800 px-2 py-1 rounded text-xs font-medium">
                          {post.category}
                        </span>
                        <span className="mx-2">•</span>
                        <div className="flex items-center">
                          <Calendar size={14} className="mr-1" />
                          {post.date}
                        </div>
                      </div>
                      
                      <h2 className="text-xl font-semibold font-heading text-primary-800 mb-3 leading-tight">
                        <a href="#" className="hover:text-primary-600 transition-colors">
                          {post.title}
                        </a>
                      </h2>
                      
                      <p className="text-neutral-600 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center text-sm text-neutral-500">
                          <User size={14} className="mr-1" />
                          {post.author}
                        </div>
                        
                        <a 
                          href="#" 
                          className="inline-flex items-center text-primary-600 font-medium text-sm hover:text-primary-700 transition-colors"
                        >
                          Read More 
                          <ArrowRight size={14} className="ml-1" />
                        </a>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
              
              {/* Pagination */}
              <div className="mt-12 flex justify-center">
                <nav className="inline-flex rounded-md shadow">
                  <a
                    href="#"
                    className="px-4 py-2 rounded-l-md border border-neutral-300 bg-white text-sm font-medium text-neutral-500 hover:bg-neutral-50"
                  >
                    Previous
                  </a>
                  <a
                    href="#"
                    className="px-4 py-2 border-t border-b border-neutral-300 bg-white text-sm font-medium text-primary-600 hover:bg-primary-50"
                  >
                    1
                  </a>
                  <a
                    href="#"
                    className="px-4 py-2 border border-neutral-300 bg-white text-sm font-medium text-neutral-500 hover:bg-neutral-50"
                  >
                    2
                  </a>
                  <a
                    href="#"
                    className="px-4 py-2 rounded-r-md border border-neutral-300 bg-white text-sm font-medium text-neutral-500 hover:bg-neutral-50"
                  >
                    Next
                  </a>
                </nav>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:w-1/3">
              {/* Search */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h3 className="text-lg font-semibold font-heading text-primary-800 mb-4">
                  Search Articles
                </h3>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search for articles..."
                    className="w-full pl-10 pr-4 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                  />
                  <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400" />
                </div>
              </div>
              
              {/* Categories */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h3 className="text-lg font-semibold font-heading text-primary-800 mb-4">
                  Categories
                </h3>
                <ul className="space-y-2">
                  {categories.map((category, index) => (
                    <li key={index}>
                      <a 
                        href="#" 
                        className={`flex items-center text-neutral-700 hover:text-primary-600 transition-colors ${
                          index === 0 ? 'font-medium text-primary-600' : ''
                        }`}
                      >
                        <ArrowRight size={14} className="mr-2" />
                        {category}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Newsletter */}
              <div className="bg-primary-50 rounded-lg shadow-md p-6 mb-8">
                <h3 className="text-lg font-semibold font-heading text-primary-800 mb-4">
                  Subscribe to Our Newsletter
                </h3>
                <p className="text-neutral-600 mb-4">
                  Get the latest financial tips and insights delivered to your inbox.
                </p>
                <form className="space-y-4">
                  <div>
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      required
                    />
                  </div>
                  <Button variant="primary" type="submit" fullWidth>
                    Subscribe Now
                  </Button>
                </form>
              </div>
              
              {/* Featured Posts */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold font-heading text-primary-800 mb-4">
                  Popular Articles
                </h3>
                <div className="space-y-4">
                  {blogPosts.slice(0, 3).map((post) => (
                    <a 
                      key={post.id}
                      href="#" 
                      className="flex items-start group"
                    >
                      <div className="w-16 h-16 rounded overflow-hidden flex-shrink-0">
                        <img 
                          src={post.imageSrc} 
                          alt={post.title} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="ml-4">
                        <h4 className="text-sm font-medium text-neutral-900 group-hover:text-primary-600 transition-colors line-clamp-2">
                          {post.title}
                        </h4>
                        <p className="text-xs text-neutral-500 mt-1">
                          {post.date}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="bg-primary-800 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-white mb-6">
              Need Personalized Financial Advice?
            </h2>
            <p className="text-lg text-neutral-200 mb-8">
              Our team of financial experts is ready to help you solve your specific challenges.
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

export default Blog;