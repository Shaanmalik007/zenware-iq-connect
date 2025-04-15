
import { User } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  position: string;
  company: string;
  image?: string;
}

const TestimonialCard = ({
  quote,
  author,
  position,
  company,
  image,
}: TestimonialCardProps) => {
  return (
    <div className="card p-6 h-full">
      <div className="mb-4 text-zenblue">
        <svg
          width="45"
          height="36"
          viewBox="0 0 45 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.032 35.352C9.048 35.352 5.832 34.128 3.384 31.68C0.936 29.232 0 25.68 0 21.024C0 17.04 0.72 13.152 2.16 9.36C3.6 5.568 5.448 2.352 7.704 -0.287998L18.072 5.208C16.248 8.616 14.4 12.024 12.528 15.432C10.8 18.648 9.936 21.096 9.936 22.776C9.936 23.64 10.296 24.36 11.016 24.936C11.736 25.512 12.6 25.8 13.608 25.8C15.576 25.8 17.064 25.08 18.072 23.64C19.224 22.056 19.8 20.28 19.8 18.312C19.8 17.592 19.512 16.584 18.936 15.288C18.504 14.136 18.288 13.128 18.288 12.264C18.288 10.296 19.008 8.688 20.448 7.464C21.888 6.096 23.64 5.424 25.704 5.424C28.344 5.424 30.456 6.528 32.04 8.736C33.624 10.8 34.416 13.68 34.416 17.376C34.416 22.608 32.832 27.192 29.664 31.128C26.496 35.064 22.056 35.352 16.344 32.136L13.032 35.352ZM38.52 35.352C34.536 35.352 31.32 34.128 28.872 31.68C26.424 29.232 25.488 25.68 25.488 21.024C25.488 17.04 26.208 13.152 27.648 9.36C29.088 5.568 30.936 2.352 33.192 -0.287998L43.56 5.208C41.736 8.616 39.888 12.024 38.016 15.432C36.288 18.648 35.424 21.096 35.424 22.776C35.424 23.64 35.784 24.36 36.504 24.936C37.224 25.512 38.088 25.8 39.096 25.8C41.064 25.8 42.552 25.08 43.56 23.64C44.712 22.056 45.288 20.28 45.288 18.312C45.288 17.592 45 16.584 44.424 15.288C43.992 14.136 43.776 13.128 43.776 12.264C43.776 10.296 44.496 8.688 45.936 7.464C47.376 6.096 49.128 5.424 51.192 5.424C53.832 5.424 55.944 6.528 57.528 8.736C59.112 10.8 59.904 13.68 59.904 17.376C59.904 22.608 58.32 27.192 55.152 31.128C51.984 35.064 47.544 35.352 41.832 32.136L38.52 35.352Z"
            fill="currentColor"
            fillOpacity="0.1"
          />
        </svg>
      </div>
      <p className="text-gray-700 mb-6 italic">{quote}</p>
      <div className="flex items-center">
        {image ? (
          <img
            src={image}
            alt={author}
            className="w-12 h-12 object-cover rounded-full mr-4"
          />
        ) : (
          <div className="w-12 h-12 bg-zenblue-light/20 rounded-full flex items-center justify-center mr-4 text-zenblue">
            <User size={24} />
          </div>
        )}
        <div>
          <h4 className="font-bold">{author}</h4>
          <p className="text-gray-500 text-sm">
            {position}, {company}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
