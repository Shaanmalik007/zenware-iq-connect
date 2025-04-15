
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface PortfolioCardProps {
  title: string;
  description: string;
  category: string;
  image: string;
  link: string;
}

const PortfolioCard = ({ title, description, category, image, link }: PortfolioCardProps) => {
  return (
    <div className="card overflow-hidden group h-full flex flex-col">
      <div className="relative overflow-hidden" style={{ height: '240px' }}>
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-3 left-3">
          <span className="bg-zenblue text-white text-xs font-semibold px-3 py-1 rounded-full">
            {category}
          </span>
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 flex-grow">{description}</p>
        <Link
          to={link}
          className="text-zenblue font-medium inline-flex items-center mt-auto hover:text-zenblue-dark transition-colors"
        >
          View Case Study
          <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </div>
    </div>
  );
};

export default PortfolioCard;
