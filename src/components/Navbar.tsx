import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const logoImage = new Image();
    logoImage.src = '/logo.png';
    logoImage.onload = () => console.log('Logo loaded successfully');
    logoImage.onerror = () => console.error('Logo failed to load');
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container-custom py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center text-2xl font-bold text-zenblue">
            <img 
              src="/logo.png" 
              alt="ZenwareIQ Logo" 
              className="h-10 mr-3"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6 items-center">
            <NavLink to="/" isActive={isActive("/")}>
              Home
            </NavLink>
            <NavLink to="/about" isActive={isActive("/about")}>
              About
            </NavLink>
            <NavLink to="/services" isActive={isActive("/services")}>
              Services
            </NavLink>
            <NavLink to="/portfolio" isActive={isActive("/portfolio")}>
              Portfolio
            </NavLink>
            <NavLink to="/contact" isActive={isActive("/contact")}>
              Contact
            </NavLink>
            <Link to="/contact" className="btn-primary ml-4">
              Get a Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-zenblue focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X size={24} />
              ) : (
                <Menu size={24} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <MobileNavLink to="/" onClick={() => setIsMenuOpen(false)} isActive={isActive("/")}>
              Home
            </MobileNavLink>
            <MobileNavLink to="/about" onClick={() => setIsMenuOpen(false)} isActive={isActive("/about")}>
              About
            </MobileNavLink>
            <MobileNavLink to="/services" onClick={() => setIsMenuOpen(false)} isActive={isActive("/services")}>
              Services
            </MobileNavLink>
            <MobileNavLink to="/portfolio" onClick={() => setIsMenuOpen(false)} isActive={isActive("/portfolio")}>
              Portfolio
            </MobileNavLink>
            <MobileNavLink to="/contact" onClick={() => setIsMenuOpen(false)} isActive={isActive("/contact")}>
              Contact
            </MobileNavLink>
            <div className="pt-2">
              <Link 
                to="/contact" 
                className="btn-primary block text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Get a Quote
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  isActive: boolean;
}

const NavLink = ({ to, children, isActive }: NavLinkProps) => (
  <Link
    to={to}
    className={`font-medium hover:text-zenblue transition-colors duration-300 ${
      isActive ? 'text-zenblue' : 'text-gray-700'
    }`}
  >
    {children}
  </Link>
);

interface MobileNavLinkProps extends NavLinkProps {
  onClick: () => void;
}

const MobileNavLink = ({ to, children, onClick, isActive }: MobileNavLinkProps) => (
  <Link
    to={to}
    className={`block py-2 px-4 font-medium rounded-md ${
      isActive ? 'bg-zenblue-light/10 text-zenblue' : 'text-gray-700 hover:bg-gray-100'
    }`}
    onClick={onClick}
  >
    {children}
  </Link>
);

export default Navbar;
