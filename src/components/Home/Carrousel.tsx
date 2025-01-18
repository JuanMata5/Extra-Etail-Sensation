import { useState } from "react";

const Carrousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    "/public/captura-de-pantalla-2018-01-07-a-las-16-18-2411-b896799c1742b7e46b15154389209065-1024-1024.png",
    "/public/captura-de-pantalla-2018-01-07-a-las-16-18-2411-b896799c1742b7e46b15154389209065-1024-1024.png",
    "/public/captura-de-pantalla-2018-01-07-a-las-16-18-2411-b896799c1742b7e46b15154389209065-1024-1024.png",
    "/public/captura-de-pantalla-2018-01-07-a-las-16-18-2411-b896799c1742b7e46b15154389209065-1024-1024.png",
    "/public/captura-de-pantalla-2018-01-07-a-las-16-18-2411-b896799c1742b7e46b15154389209065-1024-1024.png",
  ];

  const handlePrevious = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };

  const handleIndicatorClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div id="default-carousel" className="relative w-full">
      {/* Carousel wrapper */}
      <div className="relative h-56 md:h-96 overflow-hidden rounded-lg">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`duration-700 ease-in-out absolute w-full top-0 left-0 ${index === activeIndex ? "" : "hidden"}`}
            data-carousel-item
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
      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full ${index === activeIndex ? "bg-blue-600" : "bg-white"}`}
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
