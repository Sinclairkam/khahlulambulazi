import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ProjectImageSliderProps {
  images?: string[];
  defaultImage: string;
  title: string;
  onClick?: () => void;
}

export default function ProjectImageSlider({ images, defaultImage, title, onClick }: ProjectImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const hasImages = images && images.length > 0;
  const imageList = hasImages ? images : [defaultImage];
  const activeImage = imageList[currentIndex];

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? imageList.length - 1 : prev - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === imageList.length - 1 ? 0 : prev + 1));
  };

  return (
    <div 
      className="relative w-full h-full overflow-hidden group/slider cursor-pointer"
      onClick={onClick}
    >
      <img
        src={activeImage}
        alt={`${title} - View ${currentIndex + 1}`}
        className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105"
        referrerPolicy="no-referrer"
      />

      {/* Slide Indicators / Dots */}
      {hasImages && imageList.length > 1 && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-2 z-10 bg-black/40 px-2 py-1 rounded-full">
          {imageList.map((_, idx) => (
            <div
              key={idx}
              className={`w-1.5 h-1.5 rounded-full transition-all ${
                idx === currentIndex ? 'bg-brand-sky scale-110' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      )}

      {/* Navigation Chevrons inside card - hidden on mobile, flexing/showing cleanly on hover */}
      {hasImages && imageList.length > 1 && (
        <>
          <button
            onClick={handlePrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-black/60 hover:bg-black/90 hover:scale-105 border border-white/10 text-white transition-all md:opacity-0 md:group-hover/slider:opacity-100"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-black/60 hover:bg-black/90 hover:scale-105 border border-white/10 text-white transition-all md:opacity-0 md:group-hover/slider:opacity-100"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </>
      )}
    </div>
  );
}
