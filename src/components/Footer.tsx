import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const logoImage = new Image();
    logoImage.src = '/logo.png';
    logoImage.onload = () => console.log('Footer logo loaded successfully');
    logoImage.onerror = () => console.error('Footer logo failed to load');
  }, []);

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <img 
                src="/logo.png" 
                alt="ZenwareIQ Logo" 
                className="h-10 mr-3"
              />
            </div>
            <h3 className="text-xl font-bold mb-4">
              <span className="text-zenblue-light">Zenware</span>IQ
            </h3>
            <p className="text-gray-300 mb-4">
              Empowering businesses with innovative IT solutions that drive growth and efficiency.
            </p>
            <div className="flex space-x-4">
              <SocialLink href="https://facebook.com" icon={<Facebook size={18} />} />
              <SocialLink href="https://twitter.com" icon={<Twitter size={18} />} />
              <SocialLink href="https://linkedin.com" icon={<Linkedin size={18} />} />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <FooterLink to="/">Home</FooterLink>
              <FooterLink to="/about">About Us</FooterLink>
              <FooterLink to="/services">Services</FooterLink>
              <FooterLink to="/portfolio">Portfolio</FooterLink>
              <FooterLink to="/contact">Contact</FooterLink>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <FooterLink to="/services#cloud">Cloud Solutions</FooterLink>
              <FooterLink to="/services#software">Custom Software</FooterLink>
              <FooterLink to="/services#cybersecurity">Cybersecurity</FooterLink>
              <FooterLink to="/services#consulting">IT Consulting</FooterLink>
              <FooterLink to="/services#infrastructure">Infrastructure</FooterLink>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 text-zenblue-light mt-1" />
                <span className="text-gray-300">
                  123 Tech Plaza, Suite 500<br />
                  San Francisco, CA 94103
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 text-zenblue-light" />
                <span className="text-gray-300">(555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 text-zenblue-light" />
                <a href="mailto:info@zenwareiq.com" className="text-gray-300 hover:text-zenblue-light transition-colors">
                  info@zenwareiq.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} ZenwareIQ. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
}

const SocialLink = ({ href, icon }: SocialLinkProps) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="bg-gray-800 p-2 rounded-full hover:bg-zenblue transition-colors duration-300"
  >
    {icon}
  </a>
);

interface FooterLinkProps {
  to: string;
  children: React.ReactNode;
}

const FooterLink = ({ to, children }: FooterLinkProps) => (
  <li>
    <Link to={to} className="text-gray-300 hover:text-zenblue-light transition-colors">
      {children}
    </Link>
  </li>
);

export default Footer;
