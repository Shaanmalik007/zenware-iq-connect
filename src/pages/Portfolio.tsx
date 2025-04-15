
import Hero from '@/components/Hero';
import PortfolioCard from '@/components/PortfolioCard';
import { useState } from 'react';

// Portfolio data
const portfolioItems = [
  {
    id: 1,
    title: "Cloud Migration for Financial Firm",
    description: "Helped a mid-sized financial services company migrate to AWS, reducing infrastructure costs by 40%.",
    category: "Cloud Solutions",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800",
    link: "/portfolio/1",
  },
  {
    id: 2,
    title: "Custom CRM for Manufacturing",
    description: "Developed a tailored customer relationship management system for a manufacturing company.",
    category: "Software Development",
    image: "https://images.unsplash.com/photo-1565106430482-8f6e74349ca1?auto=format&fit=crop&q=80&w=800",
    link: "/portfolio/2",
  },
  {
    id: 3,
    title: "Security Overhaul for Healthcare Provider",
    description: "Implemented comprehensive cybersecurity solutions for a healthcare network with 15 locations.",
    category: "Cybersecurity",
    image: "https://images.unsplash.com/photo-1576670159375-822efbd3f05d?auto=format&fit=crop&q=80&w=800",
    link: "/portfolio/3",
  },
  {
    id: 4,
    title: "Business Intelligence Dashboard",
    description: "Created interactive data visualization tools for a retail chain to optimize inventory management.",
    category: "Business Intelligence",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    link: "/portfolio/4",
  },
  {
    id: 5,
    title: "IT Infrastructure Redesign",
    description: "Redesigned network architecture for a growing law firm, improving reliability and performance.",
    category: "Infrastructure",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800",
    link: "/portfolio/5",
  },
  {
    id: 6,
    title: "E-commerce Platform Development",
    description: "Built a custom e-commerce solution for a specialty food distributor with complex inventory needs.",
    category: "Software Development",
    image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=800",
    link: "/portfolio/6",
  },
];

// Categories for filtering
const categories = [
  "All",
  "Cloud Solutions",
  "Software Development",
  "Cybersecurity",
  "Infrastructure",
  "Business Intelligence",
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredPortfolio = activeCategory === "All"
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <div>
      {/* Hero Section */}
      <Hero
        title="Our Portfolio"
        subtitle="Explore our successful projects and see how we've helped businesses transform through technology."
        buttonText="Contact Us"
        buttonLink="/contact"
      />

      {/* Portfolio Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Case Studies & Success Stories
            </h2>
            <p className="text-gray-600">
              Browse through our portfolio of successful projects across various industries and technological domains.
            </p>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? "bg-zenblue text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPortfolio.map((item) => (
              <PortfolioCard
                key={item.id}
                title={item.title}
                description={item.description}
                category={item.category}
                image={item.image}
                link={item.link}
              />
            ))}
          </div>

          {filteredPortfolio.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Featured Case Study */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h6 className="text-zenblue font-semibold mb-2">FEATURED CASE STUDY</h6>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Cloud Migration for Financial Firm
            </h2>
            <p className="text-gray-600">
              How we helped a mid-sized financial services company reduce infrastructure costs 
              by 40% while improving security and scalability.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="order-2 md:order-1 p-8 lg:p-12 flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-4">The Challenge</h3>
                <p className="text-gray-600 mb-6">
                  Alpha Financial Services was struggling with aging on-premises infrastructure 
                  that was costly to maintain and couldn't scale to meet their growing needs.
                </p>

                <h3 className="text-2xl font-bold mb-4">Our Solution</h3>
                <p className="text-gray-600 mb-6">
                  We designed and implemented a phased migration to AWS, including:
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <span className="bg-zenblue-light/10 p-1 rounded-full mr-2 text-zenblue">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </span>
                    <span>Comprehensive cloud readiness assessment</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-zenblue-light/10 p-1 rounded-full mr-2 text-zenblue">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </span>
                    <span>Secure AWS architecture design with redundancy</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-zenblue-light/10 p-1 rounded-full mr-2 text-zenblue">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </span>
                    <span>Automated deployment pipelines for applications</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-zenblue-light/10 p-1 rounded-full mr-2 text-zenblue">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </span>
                    <span>Staff training on cloud best practices</span>
                  </li>
                </ul>

                <h3 className="text-2xl font-bold mb-4">The Results</h3>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <div className="text-zenblue text-3xl font-bold mb-1">40%</div>
                    <p className="text-gray-600 text-sm">Cost Reduction</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <div className="text-zenblue text-3xl font-bold mb-1">99.9%</div>
                    <p className="text-gray-600 text-sm">Uptime</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <div className="text-zenblue text-3xl font-bold mb-1">3x</div>
                    <p className="text-gray-600 text-sm">Faster Deployment</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <div className="text-zenblue text-3xl font-bold mb-1">60%</div>
                    <p className="text-gray-600 text-sm">IT Staff Efficiency</p>
                  </div>
                </div>

                <a href="/portfolio/1" className="btn-primary mt-4 text-center md:text-left inline-block">
                  Read Full Case Study
                </a>
              </div>
              <div className="order-1 md:order-2">
                <img
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800"
                  alt="Cloud Migration Case Study"
                  className="w-full h-full object-cover"
                  style={{ minHeight: '300px' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Trusted by Leading Companies</h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We're proud to work with organizations of all sizes across various industries.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 opacity-70">
            {/* These would be actual client logos in a real implementation */}
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="flex items-center justify-center">
                <div className="bg-gray-200 h-12 w-full rounded flex items-center justify-center">
                  <span className="text-gray-500 font-semibold">CLIENT {index + 1}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
