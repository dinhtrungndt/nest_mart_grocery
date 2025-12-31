import { Send } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import Header2 from '../../components/header/Header2';
import Navbar from '../../components/navbar/Navbar';
import Category from '../../components/products/category';
import FillByPrice from '../../components/products/fillByPrice';
import ProductHome from '../../components/products/product_home';
import ProductTags from '../../components/products/product_tags';
import ShopByCategories from '../../components/products/ShopByCategories';
import ShopNow from '../../components/products/shopNow';
import { IMAGES } from '../../constants/images/image';
import { DataProducts } from '../../stores/data/products';

const HomePage2 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedTag, setSelectedTag] = useState(null);

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
      <Header2 />

      {/* Navbar */}
      <Navbar />

      <div className="grid grid-cols-1 md:grid-cols-[20%_80%] gap-4 p-4 md:px-12 lg:px-24 md:pt-4">
        {/* Sidebar */}
        <div className="hidden md:flex flex-col gap-4">
          <Category
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
          <ProductTags
            selectedTag={selectedTag}
            onSelectTag={setSelectedTag}
          />
          <FillByPrice />
        </div>

        {/* Main Content */}
        <div className="flex flex-col gap-8">
          {/* Slide */}
          <div className="relative">
            <img src={require('../../assets/image/home2/slide1.png')} alt="slice" className="w-full h-auto object-cover rounded-md" />

            <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center pl-8 md:pl-12 lg:pl-16 pr-4">
              <p className="text-xl md:text-3xl lg:text-5xl font-quicksand font-bold leading-tight mb-2 md:mb-4">
                Don’t miss amazing <br className="hidden md:block" /> grocery deals
              </p>
              <p className="text-sm md:text-lg lg:text-xl font-quicksand text-gray-500 mb-4 md:mb-6">
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

          {/* Mobile Filters (Category + Tags) */}
          <div className="md:hidden">
            <Category
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
            />
            <ProductTags
              selectedTag={selectedTag}
              onSelectTag={setSelectedTag}
            />
            <FillByPrice />
          </div>

          <ProductHome
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            selectedTag={selectedTag}
            setSelectedTag={setSelectedTag}
            showFilters={false}
            className="p-0"
          />
        </div>
      </div>
      <ShopNow />
      <ShopByCategories setIsPaused={setIsPaused} showIconSelling={false} />
      <div className="md:pb-24"></div>
    </div>
  );
};

export default HomePage2;
