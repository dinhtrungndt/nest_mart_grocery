import { ArrowRight, CircleUserRound, Heart, RefreshCcw, ShoppingCart } from 'lucide-react';
import { useEffect, useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import ProductHome from '../../components/products/product_home';
import TopBar_Header from '../../components/topbar/topbar_header';
import { IMAGES } from '../../constants/images/image';

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

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
      {/* TopHeader */}
      <TopBar_Header />
      {/* Header */}
      <div className="flex justify-between items-center p-4 px-24">
        <img src={IMAGES.logo} alt="Header Banner" className="w-24 cursor-pointer" />
        <div className="flex justify-between border border-primary rounded-sm p-1 w-1/3">
          <input type="text" placeholder="Search for products..." className="px-4 text-xs w-full focus:outline-none" />
          <button className="bg-primary text-white px-6 py-2 rounded-sm text-xs hover:bg-primaryDark transition-colors">Search</button>
        </div>
        <div className="flex items-center space-x-6">
          <button className="flex border border-primary text-primary px-4 py-2 rounded-sm text-xs hover:bg-primaryDark transition-colors hover:text-white">Became Vendor <ArrowRight size={16} className="ml-1" /></button>
          {/* Compare with badge */}
          <div className="flex items-center cursor-pointer transition-colors relative group">
            <div className="relative">
              <RefreshCcw size={16} className="text-gray-500 group-hover:text-primary mr-1 transition-colors" />
              <span className="absolute -top-2 -right-2 bg-primary text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">3</span>
            </div>
            <p className="text-xs text-gray-500 group-hover:text-primary transition-colors">Compare</p>
          </div>

          {/* Wishlist with badge */}
          <div className="flex items-center cursor-pointer transition-colors relative group">
            <div className="relative">
              <Heart size={16} className="text-gray-500 group-hover:text-primary mr-1 transition-colors" />
              <span className="absolute -top-2 -right-2 bg-primary text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">5</span>
            </div>
            <p className="text-xs text-gray-500 group-hover:text-primary transition-colors">Wishlist</p>
          </div>

          {/* Cart with badge */}
          <div className="flex items-center cursor-pointer transition-colors relative group">
            <div className="relative">
              <ShoppingCart size={16} className="text-gray-500 group-hover:text-primary mr-1 transition-colors" />
              <span className="absolute -top-2 -right-2 bg-primary text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">2</span>
            </div>
            <p className="text-xs text-gray-500 group-hover:text-primary transition-colors">Cart</p>
          </div>

          <div className="flex items-center cursor-pointer transition-colors group">
            <CircleUserRound size={16} className="text-gray-500 group-hover:text-primary mr-1 transition-colors" />
            <p className="text-xs text-gray-500 group-hover:text-primary transition-colors">Account</p>
          </div>
        </div>
      </div>
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
              <img src={slide.image} alt="Slide Banner" className="w-full cursor-pointer shadow-xl" />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full">
                <p className="text-[#253D4E] text-6xl font-bold font-quicksand">{slide.title}</p>
                <p className="text-[#253D4E] text-6xl font-bold font-quicksand">{slide.subtitle}</p>
                <p className="text-gray-400 text-lg font-medium mt-4">Sign up for the daily newsletter</p>
                <div className="flex justify-center">
                  <div className="space-x-2 mt-6 border border-gray-300 rounded-full bg-white w-96 focus:outline-none focus:ring-2 focus:ring-primary flex justify-between">
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="px-4 py-3 focus:outline-none rounded-full w-full text-sm text-gray-700"
                      onFocus={() => setIsPaused(true)}
                      onBlur={() => setIsPaused(false)}
                    />
                    <button className="bg-primary text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-primaryDark transition-colors">
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
      <ProductHome />

    </div>
  );
};

export default HomePage;
