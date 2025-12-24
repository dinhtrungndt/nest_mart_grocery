import { ChevronDown, CircleUserRound, Heart, MapPin, RefreshCcw, Search, Send, ShoppingCart } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Category from '../../components/products/category';
import FillByPrice from '../../components/products/fillByPrice';
import { IMAGES } from '../../constants/images/image';
import { DataProducts } from '../../stores/data/products';

const HomePage2 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  const topSelling = useMemo(
    () => DataProducts.sort((a, b) => b.selling - a.selling).slice(0, 3),
    []
  );

  const trendingProducts = useMemo(
    () => DataProducts.filter(p => p.isTrending).slice(0, 3),
    []
  );

  const recentlyAdded = useMemo(
    () => DataProducts.filter(p => p.isRecently).slice(0, 3),
    []
  );

  const topRatedProducts = useMemo(
    () => DataProducts.filter(p => p.isTopRated).slice(0, 3),
    []
  );

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
      <div className="flex flex-wrap md:flex-nowrap justify-between items-center p-2 px-4 md:px-12 lg:px-24 gap-2 md:gap-4">
        <img src={IMAGES.logo} alt="Header Banner" className="w-20 md:w-24 cursor-pointer" />

        {/* Search Bar */}
        <div className="flex items-center justify-start border border-primary rounded-sm p-1 w-full order-last md:order-none md:w-1/3">
          <div className="hidden md:flex items-center cursor-pointer hover:bg-gray-200 transition-colors hover:text-primary p-1 rounded-sm mr-2">
            <p className="text-xs font-semibold">All Categories</p>
            <ChevronDown size={16} className="ml-1" />
          </div>
          <span className="hidden md:block h-5 w-0.5 bg-primaryLight mr-2" />
          <input type="text" placeholder="Search for products..." className="px-2 w-full text-xs focus:outline-none" />
          <Search size={20} className="cursor-pointer text-gray-500 ml-2" />
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-3 md:space-x-6">
          <button className="hidden md:flex items-center border border-primary text-primary p-1 md:p-2 rounded-sm text-xs hover:bg-primaryDark transition-colors hover:text-white">
            <MapPin size={16} className="mr-1" />
            <span>Your Location</span>
            <ChevronDown size={16} className="ml-1" />
          </button>

          {/* Compare with badge */}
          <div className="flex items-center cursor-pointer transition-colors relative group">
            <div className="relative">
              <RefreshCcw size={20} className="text-gray-500 group-hover:text-primary mr-1 transition-colors" />
              <span className="absolute -top-2 -right-2 bg-primary text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">3</span>
            </div>
            <p className="text-xs text-gray-500 group-hover:text-primary transition-colors hidden lg:block">Compare</p>
          </div>

          {/* Wishlist with badge */}
          <div className="flex items-center cursor-pointer transition-colors relative group">
            <div className="relative">
              <Heart size={20} className="text-gray-500 group-hover:text-primary mr-1 transition-colors" />
              <span className="absolute -top-2 -right-2 bg-primary text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">5</span>
            </div>
            <p className="text-xs text-gray-500 group-hover:text-primary transition-colors hidden lg:block">Wishlist</p>
          </div>

          {/* Cart with badge */}
          <div className="flex items-center cursor-pointer transition-colors relative group">
            <div className="relative">
              <ShoppingCart size={20} className="text-gray-500 group-hover:text-primary mr-1 transition-colors" />
              <span className="absolute -top-2 -right-2 bg-primary text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">2</span>
            </div>
            <p className="text-xs text-gray-500 group-hover:text-primary transition-colors hidden lg:block">Cart</p>
          </div>

          <div className="flex items-center cursor-pointer transition-colors group">
            <CircleUserRound size={20} className="text-gray-500 group-hover:text-primary mr-1 transition-colors" />
            <p className="text-xs text-gray-500 group-hover:text-primary transition-colors hidden lg:block">Account</p>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <Navbar />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 md:p-24 md:pt-4">
        {/* Category */}
        <div className="hidden md:block col-span-1">
          <Category />
        </div>

        {/* slice */}
        <div className="col-span-1 md:col-span-2 relative">
          <img src={require('../../assets/image/home2/slide1.png')} alt="slice" className="w-full h-auto object-cover rounded-md" />

          <div className="absolute top-1 md:top-0 left-0 w-full h-full flex flex-col justify-center pl-[10%] md:pl-[10%] pr-4">
            <p className="text-xl md:text-3xl lg:text-5xl font-quicksand font-bold leading-tight md:mb-8 mb-2">
              Don’t miss amazing <br className="hidden md:block" /> grocery deals
            </p>
            <p className="text-sm md:text-xl lg:text-2xl font-quicksand text-gray-500 mb-2 md:mb-4">
              Sign up for the daily newsletter
            </p>

            <div className="w-full max-w-[200px] md:max-w-md">
              <div className="flex items-center border border-gray-300 rounded-full bg-white overflow-hidden focus-within:ring-2 focus-within:ring-primary">
                <Send size={20} className="text-gray-500 ml-3 hidden md:block" />
                <input
                  type="email"
                  placeholder="Your email address"
                  className="px-2 py-1.5 md:py-3 focus:outline-none w-full text-[10px] md:text-sm text-gray-700"
                  onFocus={() => setIsPaused(true)}
                  onBlur={() => setIsPaused(false)}
                />
                <button className="bg-primary text-white px-3 md:px-6 py-1.5 md:py-3 text-[10px] md:text-sm font-medium hover:bg-primaryDark transition-colors whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Fill By Price - Hide on mobile if needed or keep it */}
        <div className="col-span-1 md:hidden">
          <Category />
        </div>
        <div className="col-span-1">
          <FillByPrice />
        </div>

      </div>

    </div>
  );
};

export default HomePage2;
