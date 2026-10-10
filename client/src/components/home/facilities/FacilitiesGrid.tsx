'use client';

import React from 'react';
import { FacilityImageItem } from './types';
import { FacilityImageCard } from './FacilityImageCard';

export interface FacilitiesGridProps {
  images: FacilityImageItem[];
  onImageClick: (index: number) => void;
  className?: string;
}

/**
 * Responsive Facilities Grid Layout
 * Renders one prominent featured image followed by two or three smaller images with captions.
 */
export const FacilitiesGrid: React.FC<FacilitiesGridProps> = ({
  images,
  onImageClick,
  className = ''
}) => {
  if (!images || images.length === 0) return null;

  const featuredImage = images[0];
  const smallerImages = images.slice(1, 4);

  return (
    <div className={`space-y-6 sm:space-y-8 ${className}`}>
      {/* 1. Large Featured Image */}
      {featuredImage && (
        <div>
          <FacilityImageCard
            image={featuredImage}
            isFeatured={true}
            onClick={() => onImageClick(0)}
          />
        </div>
      )}

      {/* 2. Responsive Grid of Smaller Images */}
      {smallerImages.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-5 lg:gap-6">
          {smallerImages.map((img, idx) => {
            const actualIndex = idx + 1;
            return (
              <FacilityImageCard
                key={img.id}
                image={img}
                isFeatured={false}
                onClick={() => onImageClick(actualIndex)}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};
