import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  position?: string;
  company?: string;
  rating?: number;
  imageSrc?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  author,
  position,
  company,
  rating = 5,
  imageSrc,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 h-full flex flex-col">
      {/* Rating */}
      {rating > 0 && (
        <div className="flex mb-4">
          {Array.from({ length: 5 }).map((_, index) => (
            <Star
              key={index}
              size={18}
              className={`${
                index < rating ? 'text-secondary-500 fill-secondary-500' : 'text-neutral-300'
              }`}
            />
          ))}
        </div>
      )}
      
      {/* Quote */}
      <p className="text-neutral-700 italic mb-6 flex-grow">"{quote}"</p>
      
      {/* Author info */}
      <div className="flex items-center mt-auto">
        {imageSrc && (
          <img 
            src={imageSrc} 
            alt={author} 
            className="w-12 h-12 rounded-full object-cover mr-4"
          />
        )}
        <div>
          <p className="font-semibold text-primary-800">{author}</p>
          {(position || company) && (
            <p className="text-sm text-neutral-500">
              {position}{position && company && ', '}{company}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;