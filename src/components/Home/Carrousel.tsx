import { useState } from "react";

const Carrousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    "/hero/heroCarousel.png",
    "/hero/DALL·E 2025-03-21 18.04.59 - A futuristic, high-energy digital design banner featuring the words 'E-TAIL 420' in bold, graffiti-style letters with a blood-splattered effect. The b.webp",
    "/hero/heroCarousel.png",
    "/hero/heroCarousel.png",
    "/hero/heroCarousel.png",
  ];

  const handlePrevious = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div id="carousel" className="relative w-full h-full  mx-auto">
      {/* Carousel wrapper */}
      <div className="relative w-full h-[300px] sm:h-[400px] md:h-[600px] lg:h-[700px] overflow-hidden rounded-lg">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${
              index === activeIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Slider indicators */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 rounded-full transition-all duration-300 ${
              index === activeIndex ? "bg-blue-600 w-5 md:w-6" : "bg-gray-400"
            }`}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>

      {/* Slider controls */}
      <button
        className="absolute top-1/2 left-2 md:left-5 transform -translate-y-1/2 bg-gray-800/60 text-white p-2 md:p-3 lg:p-4 rounded-full hover:bg-gray-800/80"
        onClick={handlePrevious}
      >
        &#9664;
      </button>
      <button
        className="absolute top-1/2 right-2 md:right-5 transform -translate-y-1/2 bg-gray-800/60 text-white p-2 md:p-3 lg:p-4 rounded-full hover:bg-gray-800/80"
        onClick={handleNext}
      >
        &#9654;
      </button>
    </div>
  );
};

export default Carrousel;
