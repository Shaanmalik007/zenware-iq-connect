
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HeroProps {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
  showArrow?: boolean;
}

const Hero = ({
  title,
  subtitle,
  buttonText,
  buttonLink,
  showArrow = false,
}: HeroProps) => {
  return (
    <div className="hero-gradient text-white">
      <div className="container-custom py-20 md:py-32">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            {title}
          </h1>
          <p className="text-lg md:text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            {subtitle}
          </p>
          <Link 
            to={buttonLink} 
            className="bg-white text-zenblue px-8 py-3 rounded-md font-semibold inline-flex items-center hover:bg-gray-100 transition-colors"
          >
            {buttonText}
            {showArrow && <ArrowRight className="ml-2 h-5 w-5" />}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
