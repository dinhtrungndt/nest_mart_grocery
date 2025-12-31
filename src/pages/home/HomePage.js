import { useEffect, useState } from 'react';
import Header from '../../components/header/Header';
import Navbar from '../../components/navbar/Navbar';
import ProductHome from '../../components/products/product_home';
import ShopByCategories from '../../components/products/ShopByCategories';
import ShopNow from '../../components/products/shopNow';
import { IMAGES } from '../../constants/images/image';

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedTag, setSelectedTag] = useState(null);

  const slides = [
    { id: 1, image: IMAGES.slide, title: "Fresh Vegetables", subtitle: "Big discount" },
    { id: 2, image: IMAGES.slide1, title: "Organic Foods", subtitle: "Special Offer" },
    { id: 3, image: IMAGES.slide2, title: "Healthy Living", subtitle: "Save More" },
  ];

  // Auto slide every 2 seconds (only when not paused)
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      handleNext();
    }, 2000);

    return () => clearInterval(interval);
  }, [currentSlide, isPaused]);

  const handleNext = () => {
    setIsTransitioning(true);
    setCurrentSlide((prev) => prev + 1);
  };

  const goToSlide = (index) => {
    setIsTransitioning(true);
    setCurrentSlide(index);
  };

  // Reset to first slide when reaching the duplicate
  useEffect(() => {
    if (currentSlide === slides.length) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentSlide(0);
      }, 700);
    }
  }, [currentSlide, slides.length]);

  return (
    <div>
      {/* Header */}
      <Header />

      {/* Navbar */}
      <Navbar />

      {/* Slide with infinite loop */}
      <div
        className="relative overflow-hidden cursor-pointer shadow-xl"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div
          className={`flex ${isTransitioning ? 'transition-transform duration-700 ease-in-out' : ''}`}
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {/* Render all slides + first slide again at the end */}
          {[...slides, slides[0]].map((slide, index) => (
            <div key={`${slide.id}-${index}`} className="min-w-full relative">
              <img src={slide.image} alt="Slide Banner" className="w-full h-72 md:h-auto object-cover cursor-pointer shadow-xl" />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full px-4">
                <p className="text-[#253D4E] text-3xl md:text-6xl font-bold font-quicksand">{slide.title}</p>
                <p className="text-[#253D4E] text-3xl md:text-6xl font-bold font-quicksand">{slide.subtitle}</p>
                <p className="text-gray-400 text-sm md:text-lg font-medium mt-2 md:mt-4">Sign up for the daily newsletter</p>
                <div className="flex justify-center">
                  <div className="space-x-2 mt-4 md:mt-6 border border-gray-300 rounded-full bg-white w-full max-w-sm md:max-w-md focus:outline-none focus:ring-2 focus:ring-primary flex justify-between p-1">
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="px-4 py-2 md:py-3 focus:outline-none rounded-full w-full text-xs md:text-sm text-gray-700"
                      onFocus={() => setIsPaused(true)}
                      onBlur={() => setIsPaused(false)}
                    />
                    <button className="bg-primary text-white px-4 md:px-6 py-2 md:py-3 rounded-full text-xs md:text-sm font-medium hover:bg-primaryDark transition-colors whitespace-nowrap">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Slide Indicators/Dots */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${currentSlide % slides.length === index ? 'bg-primary w-8' : 'bg-gray-300 hover:bg-gray-400'
                }`}
            />
          ))}
        </div>
      </div>

      {/* Products and Category */}
      <ProductHome
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        selectedTag={selectedTag}
        setSelectedTag={setSelectedTag}
        showFilters={true}
      />

      {/* Shop Now */}
      <ShopNow />

      {/* Shop by Categories */}
      <ShopByCategories setIsPaused={setIsPaused} showIconSelling={true} />
    </div>
  );
};

export default HomePage;
