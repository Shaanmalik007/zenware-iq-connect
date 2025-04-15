
import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import TestimonialCard from '@/components/TestimonialCard';
import { Cloud, Code, Shield, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div>
      {/* Hero Section */}
      <Hero
        title="Empowering Your Business With Innovative IT Solutions"
        subtitle="ZenwareIQ delivers custom technology solutions that drive growth, efficiency, and competitive advantage for businesses of all sizes."
        buttonText="Get a Free Consultation"
        buttonLink="/contact"
        showArrow={true}
      />

      {/* About Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Transforming Businesses Through Technology
              </h2>
              <p className="text-gray-600 mb-6">
                At ZenwareIQ, we understand that every business has unique technology needs. 
                Our team of experts works closely with you to develop tailored solutions 
                that align with your business goals and drive measurable results.
              </p>
              <p className="text-gray-600 mb-8">
                With over a decade of experience serving diverse industries, 
                we pride ourselves on delivering reliable, scalable, and 
                future-proof IT solutions that give our clients the competitive edge.
              </p>
              <Link to="/about" className="btn-primary">
                Learn More About Us
              </Link>
            </div>
            <div className="relative">
              <div className="bg-white shadow-xl rounded-lg p-8 md:ml-12 relative z-10">
                <div className="flex items-start mb-6">
                  <div className="bg-zenblue-light/10 p-3 rounded-lg mr-4 text-zenblue">
                    <Shield size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Trusted By Leading Businesses</h3>
                    <p className="text-gray-600">Over 200+ clients across various industries trust our solutions.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-zenblue-light/10 p-3 rounded-lg mr-4 text-zenblue">
                    <Code size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Custom Development Approach</h3>
                    <p className="text-gray-600">Tailored solutions that perfectly fit your business requirements.</p>
                  </div>
                </div>
              </div>
              <div 
                className="absolute inset-0 bg-zenblue rounded-lg transform translate-x-6 translate-y-6 -z-0 hidden md:block"
                aria-hidden="true"
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-gray-600">
              Comprehensive IT solutions designed to meet your business needs and drive digital transformation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              title="Cloud Solutions"
              description="Secure, scalable cloud infrastructure that grows with your business. We handle migration, optimization, and management."
              icon={<Cloud size={32} />}
              link="/services#cloud"
            />
            <ServiceCard
              title="Custom Software Development"
              description="Bespoke applications built to streamline operations and enhance customer experiences."
              icon={<Code size={32} />}
              link="/services#software"
            />
            <ServiceCard
              title="Cybersecurity"
              description="Comprehensive security solutions to protect your data and systems from evolving threats."
              icon={<Shield size={32} />}
              link="/services#cybersecurity"
            />
          </div>

          <div className="text-center mt-12">
            <Link to="/services" className="btn-secondary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-gray-600">
              Don't just take our word for it. Here's what our clients have to say about working with ZenwareIQ.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard
              quote="ZenwareIQ has significantly improved our IT infrastructure, enabling us to operate at a whole new level of efficiency."
              author="Sarah Johnson"
              position="CTO"
              company="NexTech Solutions"
            />
            <TestimonialCard
              quote="The team at ZenwareIQ delivered our custom software on time and on budget. It has transformed how we manage our operations."
              author="Michael Chen"
              position="Operations Director"
              company="Global Logistics Inc."
            />
            <TestimonialCard
              quote="Their cloud migration strategy saved us money while improving performance. We couldn't be happier with the results."
              author="Jennifer Williams"
              position="CEO"
              company="Innovate Financial"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-zenblue text-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
            <p className="text-white/90 text-lg mb-8">
              Contact us today for a free consultation and discover how ZenwareIQ can help you achieve your technology goals.
            </p>
            <Link
              to="/contact"
              className="bg-white text-zenblue px-8 py-3 rounded-md font-semibold inline-flex items-center hover:bg-gray-100 transition-colors"
            >
              Get Started Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
