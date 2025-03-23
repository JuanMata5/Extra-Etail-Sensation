import { useState } from "react";

const Carrousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    "../../public/hero/heroCarousel.png",
    "../../public/hero/DALL·E 2025-03-21 18.04.59 - A futuristic, high-energy digital design banner featuring the words 'E-TAIL 420' in bold, graffiti-style letters with a blood-splattered effect. The b.webp",
    "../../public/hero/heroCarousel.png",
    "../../public/hero/heroCarousel.png",
    "../../public/hero/heroCarousel.png",
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

  const handleIndicatorClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div id="default-carousel" className="relative w-full h-full">
      {/* Carousel wrapper */}
      <div className="relative w-full  md:h-[500px] overflow-hidden rounded-lg">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-[65vh] transition-opacity duration-700 ease-in-out ${
              index === activeIndex ? "opacity-100" : "opacity-0"
            }`}
            data-carousel-item
          >
            <img
              src={slide}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover "
            />
          </div>
        ))}
      </div>

      {/* Slider indicators */}
      <div className=" absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full ${
              index === activeIndex ? "bg-blue-600" : "bg-white"
            }`}
            aria-current={index === activeIndex ? "true" : "false"}
            aria-label={`Slide ${index + 1}`}
            onClick={() => handleIndicatorClick(index)}
            data-carousel-slide-to={index}
          />
        ))}
      </div>

      {/* Slider controls */}
      <button
        type="button"
        className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={handlePrevious}
      >
        <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-800/60 text-white group-hover:bg-gray-800/80">
          <svg
            className="w-6 h-6 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={handleNext}
      >
        <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-800/60 text-white group-hover:bg-gray-800/80">
          <svg
            className="w-6 h-6 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};

export default Carrousel;
