
import Hero from '@/components/Hero';
import { CheckCircle, Server, Cloud, Code, Shield, HelpCircle, Database, BarChart } from 'lucide-react';

const Services = () => {
  return (
    <div>
      {/* Hero Section */}
      <Hero
        title="Our Services"
        subtitle="Comprehensive IT solutions tailored to meet your business needs and drive digital transformation."
        buttonText="Contact Us"
        buttonLink="/contact"
      />

      {/* Services Introduction */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Technology Solutions for Modern Businesses
            </h2>
            <p className="text-gray-600">
              At ZenwareIQ, we offer a full range of IT services to help your business leverage technology 
              for growth, efficiency, and competitive advantage. Our expert team works closely with you to 
              understand your unique challenges and develop customized solutions that deliver real results.
            </p>
          </div>

          {/* Cloud Solutions */}
          <div id="cloud" className="py-16">
            <ServiceSection
              icon={<Cloud size={48} />}
              title="Cloud Solutions"
              description="Harness the power of cloud technology to enhance flexibility, scalability, and efficiency across your organization."
              benefits={[
                "Secure and scalable cloud infrastructure",
                "Seamless migration strategies",
                "Cost-effective cloud management",
                "24/7 monitoring and support"
              ]}
              image="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=800"
            />
          </div>

          {/* Software Development */}
          <div id="software" className="py-16 border-t border-gray-200">
            <ServiceSection
              icon={<Code size={48} />}
              title="Custom Software Development"
              description="Bespoke software solutions designed to streamline operations, enhance customer experiences, and solve your unique business challenges."
              benefits={[
                "Tailored applications for your specific needs",
                "User-friendly interfaces and experiences",
                "Integration with existing systems",
                "Ongoing maintenance and updates"
              ]}
              image="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&q=80&w=800"
              imageLeft={false}
            />
          </div>

          {/* Cybersecurity */}
          <div id="cybersecurity" className="py-16 border-t border-gray-200">
            <ServiceSection
              icon={<Shield size={48} />}
              title="Cybersecurity"
              description="Comprehensive security solutions to protect your data, systems, and reputation from evolving cyber threats."
              benefits={[
                "Vulnerability assessments and penetration testing",
                "Security policy development and implementation",
                "Employee security awareness training",
                "Incident response planning"
              ]}
              image="https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=800"
            />
          </div>

          {/* IT Consulting */}
          <div id="consulting" className="py-16 border-t border-gray-200">
            <ServiceSection
              icon={<HelpCircle size={48} />}
              title="IT Consulting"
              description="Strategic technology advice to help you make informed decisions and maximize your IT investments."
              benefits={[
                "Technology roadmap development",
                "Digital transformation strategies",
                "IT cost optimization",
                "Vendor selection and management"
              ]}
              image="https://images.unsplash.com/photo-1579389083078-4e7018379f7e?auto=format&fit=crop&q=80&w=800"
              imageLeft={false}
            />
          </div>

          {/* Infrastructure Management */}
          <div id="infrastructure" className="py-16 border-t border-gray-200">
            <ServiceSection
              icon={<Server size={48} />}
              title="Infrastructure Management"
              description="Reliable management and support for your critical IT infrastructure, ensuring optimal performance and minimal downtime."
              benefits={[
                "Network design and implementation",
                "Server management and virtualization",
                "Disaster recovery planning",
                "Proactive maintenance and monitoring"
              ]}
              image="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800"
            />
          </div>

          {/* Data Services */}
          <div id="data" className="py-16 border-t border-gray-200">
            <ServiceSection
              icon={<Database size={48} />}
              title="Data Services"
              description="Unlock the power of your data with comprehensive solutions for management, analysis, and visualization."
              benefits={[
                "Database design and optimization",
                "Data migration and integration",
                "Business intelligence solutions",
                "Big data processing and analytics"
              ]}
              image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
              imageLeft={false}
            />
          </div>

          {/* Business Intelligence */}
          <div id="intelligence" className="py-16 border-t border-gray-200">
            <ServiceSection
              icon={<BarChart size={48} />}
              title="Business Intelligence"
              description="Transform your data into actionable insights to drive informed decision-making and business growth."
              benefits={[
                "Custom dashboards and reporting",
                "Predictive analytics",
                "Data visualization solutions",
                "Real-time performance monitoring"
              ]}
              image="https://images.unsplash.com/photo-1560264280-88b68371db39?auto=format&fit=crop&q=80&w=800"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-zenblue text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-white/90 text-lg mb-8 max-w-3xl mx-auto">
            Contact us today to discuss your technology needs and discover how ZenwareIQ can help you achieve your business goals.
          </p>
          <a href="/contact" className="bg-white text-zenblue px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors">
            Schedule a Free Consultation
          </a>
        </div>
      </section>
    </div>
  );
};

interface ServiceSectionProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  benefits: string[];
  image: string;
  imageLeft?: boolean;
}

const ServiceSection = ({
  icon,
  title,
  description,
  benefits,
  image,
  imageLeft = true,
}: ServiceSectionProps) => {
  const content = (
    <div>
      <div className="bg-zenblue-light/10 p-4 rounded-lg inline-block mb-4 text-zenblue">
        {icon}
      </div>
      <h3 className="text-2xl md:text-3xl font-bold mb-4">{title}</h3>
      <p className="text-gray-600 mb-6 text-lg">{description}</p>
      <div className="space-y-3">
        {benefits.map((benefit, index) => (
          <div key={index} className="flex items-start">
            <CheckCircle className="text-zenblue mr-2 mt-1 flex-shrink-0" size={20} />
            <p className="text-gray-700">{benefit}</p>
          </div>
        ))}
      </div>
    </div>
  );

  const imageContent = (
    <div className="relative">
      <img src={image} alt={title} className="rounded-lg shadow-lg" />
      <div 
        className="absolute inset-0 rounded-lg shadow-lg border-2 border-zenblue/20 transform -translate-x-4 -translate-y-4 -z-10"
        aria-hidden="true"
      ></div>
    </div>
  );

  return (
    <div className="grid md:grid-cols-2 gap-12 items-center">
      {imageLeft ? (
        <>
          <div className="order-2 md:order-1">{imageContent}</div>
          <div className="order-1 md:order-2">{content}</div>
        </>
      ) : (
        <>
          <div>{content}</div>
          <div>{imageContent}</div>
        </>
      )}
    </div>
  );
};

export default Services;
