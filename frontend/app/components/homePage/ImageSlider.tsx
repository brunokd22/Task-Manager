import React, { useEffect, useState } from "react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import {
  ChevronLeft,
  ChevronRight,
  Heart,
  Pause,
  Play,
  Share2,
} from "lucide-react";
import { Badge } from "../ui/badge";

const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  // Sample images with metadata
  const slides = [
    {
      id: 1,
      url: "https://images.pexels.com/photos/3183145/pexels-photo-3183145.jpeg",
      title: "Mountain Serenity",
      description: "Breathtaking mountain landscape with pristine lakes",
      category: "Nature",
      author: "Alex Thompson",
    },
    {
      id: 2,
      url: "https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg",
      title: "Forest Pathway",
      description: "Mystical forest trail leading to adventure",
      category: "Adventure",
      author: "Sarah Johnson",
    },
    {
      id: 3,
      url: "https://images.pexels.com/photos/7376/startup-photos.jpg",
      title: "Ocean Waves",
      description: "Powerful ocean waves crashing against rocks",
      category: "Seascape",
      author: "Mike Davis",
    },
    {
      id: 4,
      url: "https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg",
      title: "Desert Dunes",
      description: "Golden sand dunes stretching to the horizon",
      category: "Desert",
      author: "Emma Wilson",
    },
    {
      id: 5,
      url: "https://images.pexels.com/photos/3182796/pexels-photo-3182796.jpeg",
      title: "Starry Night",
      description: "Magnificent night sky filled with countless stars",
      category: "Astronomy",
      author: "David Chen",
    },
  ];

  // Auto-advance slides
  useEffect(() => {
    if (isAutoplay && !isHovered) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isAutoplay, isHovered, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: React.SetStateAction<number>) => {
    setCurrentSlide(index);
  };

  return (
    <div className="w-full mb-8 p-2 lg:px-10 ">
      <Card className="bg-black/20 dark:bg-black/40 backdrop-blur-lg border-white/10 overflow-hidden">
        <CardContent className="p-0">
          <div
            className="relative h-[60vh] overflow-hidden rounded-lg"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Main Image Display */}
            <div className="relative w-full h-full">
              {slides.map((slide, index) => (
                <div
                  key={slide.id}
                  className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                    index === currentSlide
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-110"
                  }`}
                >
                  <img
                    src={slide.url}
                    alt={slide.title}
                    className="w-full h-full object-cover"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                  {/* Content Overlay */}
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <Button
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20 transition-all duration-300"
              onClick={prevSlide}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20 transition-all duration-300"
              onClick={nextSlide}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>

            {/* Top Controls */}

            {/* Progress Bar */}
          </div>

          {/* Thumbnail Navigation */}
          <div className="p-6 bg-black/30 dark:bg-black/50 backdrop-blur-sm">
            <div className="flex gap-3 justify-center overflow-x-auto pb-2">
              {slides.map((slide, index) => (
                <button
                  key={slide.id}
                  onClick={() => goToSlide(index)}
                  className={`relative flex-shrink-0 w-20 h-16 rounded-lg overflow-hidden transition-all duration-300 ${
                    index === currentSlide
                      ? "ring-2 ring-blue-400 scale-110"
                      : "opacity-60 hover:opacity-100"
                  }`}
                >
                  <img
                    src={slide.url}
                    alt={slide.title}
                    className="w-full h-full object-cover"
                  />
                  {index === currentSlide && (
                    <div className="absolute inset-0 bg-blue-400/20" />
                  )}
                </button>
              ))}
            </div>

            {/* Slide Counter */}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ImageSlider;
