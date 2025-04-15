
import Hero from '@/components/Hero';
import { Award, Users, Zap, Target, ChevronRight } from 'lucide-react';

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <Hero
        title="About ZenwareIQ"
        subtitle="We're on a mission to help businesses thrive through innovative technology solutions."
        buttonText="Get to Know Us"
        buttonLink="#our-story"
      />

      {/* Our Story Section */}
      <section id="our-story" className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-8">
                <h6 className="text-zenblue font-semibold mb-2">OUR STORY</h6>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  A Decade of Excellence in IT Solutions
                </h2>
                <p className="text-gray-600 mb-4">
                  Founded in 2013, ZenwareIQ began as a small team of technology enthusiasts with a shared vision: 
                  to make enterprise-grade IT solutions accessible to businesses of all sizes.
                </p>
                <p className="text-gray-600 mb-4">
                  Over the years, we've grown into a full-service IT consulting and development firm, 
                  serving clients across various industries including finance, healthcare, manufacturing, 
                  and e-commerce.
                </p>
                <p className="text-gray-600">
                  Our team now includes over 50 experienced technology professionals, from software 
                  developers and cloud architects to cybersecurity experts and IT strategists, all 
                  committed to delivering exceptional results for our clients.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
                alt="ZenwareIQ Team"
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-6 max-w-xs">
                <div className="flex items-center mb-3">
                  <Award className="text-zenblue mr-3" size={24} />
                  <h3 className="font-bold text-lg">Award-Winning Service</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Recognized as a top IT services provider for 3 consecutive years.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Vision Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-zenblue-light/10 p-4 rounded-lg inline-block mb-4 text-zenblue">
                <Target size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-600 mb-4">
                To empower businesses with innovative and reliable technology solutions that 
                drive growth, efficiency, and competitive advantage.
              </p>
              <p className="text-gray-600">
                We're committed to understanding each client's unique challenges and delivering 
                customized IT services that add measurable value to their operations.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-zenblue-light/10 p-4 rounded-lg inline-block mb-4 text-zenblue">
                <Zap size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-600 mb-4">
                To be the leading provider of transformative IT solutions that enable businesses 
                to thrive in an increasingly digital world.
              </p>
              <p className="text-gray-600">
                We envision a future where every organization, regardless of size, has access to 
                the technological tools and expertise needed to reach its full potential.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h6 className="text-zenblue font-semibold mb-2">OUR VALUES</h6>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Principles That Guide Us
            </h2>
            <p className="text-gray-600">
              These core values define our company culture and shape how we work with our clients, partners, and each other.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ValueCard
              title="Innovation"
              description="We continuously explore cutting-edge technologies to deliver forward-thinking solutions."
            />
            <ValueCard
              title="Excellence"
              description="We hold ourselves to the highest standards in everything we do, from coding to customer service."
            />
            <ValueCard
              title="Integrity"
              description="We build relationships based on honesty, transparency, and doing what's right for our clients."
            />
            <ValueCard
              title="Collaboration"
              description="We believe in the power of teamwork, both within our company and in partnership with our clients."
            />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h6 className="text-zenblue font-semibold mb-2">OUR TEAM</h6>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Meet Our Leadership
            </h2>
            <p className="text-gray-600">
              Our team of experienced tech professionals is dedicated to delivering exceptional results for our clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TeamMember
              name="David Chen"
              position="Founder & CEO"
              bio="David has 20+ years of experience in software development and IT consulting. He founded ZenwareIQ with a vision to make enterprise-grade technology accessible to businesses of all sizes."
              image="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400"
            />
            <TeamMember
              name="Sarah Williams"
              position="CTO"
              bio="With a background in cloud architecture and software development, Sarah leads our technical teams and ensures we're leveraging the latest technologies to benefit our clients."
              image="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400"
            />
            <TeamMember
              name="Michael Rodriguez"
              position="Director of Client Services"
              bio="Michael focuses on understanding our clients' unique needs and ensuring we deliver solutions that exceed their expectations."
              image="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400"
            />
          </div>

          <div className="text-center mt-12">
            <a href="#" className="btn-secondary inline-flex items-center">
              Meet the Full Team
              <ChevronRight className="ml-1 h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-zenblue text-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <StatItem number="10+" label="Years of Experience" />
            <StatItem number="200+" label="Clients Served" />
            <StatItem number="500+" label="Projects Completed" />
            <StatItem number="50+" label="Expert Team Members" />
          </div>
        </div>
      </section>
    </div>
  );
};

interface ValueCardProps {
  title: string;
  description: string;
}

const ValueCard = ({ title, description }: ValueCardProps) => (
  <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-zenblue">
    <h3 className="text-xl font-bold mb-3">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

interface TeamMemberProps {
  name: string;
  position: string;
  bio: string;
  image: string;
}

const TeamMember = ({ name, position, bio, image }: TeamMemberProps) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <div className="h-64 overflow-hidden">
      <img 
        src={image} 
        alt={name} 
        className="w-full h-full object-cover object-center"
      />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold">{name}</h3>
      <p className="text-zenblue mb-3">{position}</p>
      <p className="text-gray-600">{bio}</p>
    </div>
  </div>
);

interface StatItemProps {
  number: string;
  label: string;
}

const StatItem = ({ number, label }: StatItemProps) => (
  <div>
    <div className="text-4xl md:text-5xl font-bold mb-2">{number}</div>
    <p className="text-white/80">{label}</p>
  </div>
);

export default About;
