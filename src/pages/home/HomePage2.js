import { ArrowLeft, ArrowRight, ChevronDown, CircleUserRound, Heart, MapPin, RefreshCcw, Search, ShoppingCart } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import ProductHome from '../../components/products/product_home';
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
      <div className="flex flex-wrap md:flex-nowrap justify-between items-center p-4 px-4 md:px-12 lg:px-24 gap-4">
        <img src={IMAGES.logo} alt="Header Banner" className="w-24 cursor-pointer" />
        <div className="flex items-center justify-start border border-primary rounded-sm p-1 w-full order-last md:order-none md:w-1/3">
          <p className="text-xs font-semibold flex items-center cursor-pointer hover:bg-gray-200 transition-colors hover:text-primary p-1 rounded-sm mr-2">All Categories <ChevronDown size={16} className="ml-1" /></p>
          <span className="block h-5 w-0.5 bg-primaryLight" />
          <input type="text" placeholder="Search for products..." className="px-2 w-[56%] md:w-2/3 text-xs focus:outline-none" />
          <Search size={20} className="cursor-pointer text-gray-500 ml-2" />
        </div>
        <div className="flex items-center space-x-2 md:space-x-6">
          <button className="flex items-center border border-primary text-primary p-1 md:p-2 rounded-sm text-xs hover:bg-primaryDark transition-colors hover:text-white"><MapPin size={16} className="mr-1" /><span className="md:inline">Your Location</span> <ChevronDown size={16} className="ml-1" /></button>
          {/* Compare with badge */}
          <div className="flex items-center cursor-pointer transition-colors relative group">
            <div className="relative">
              <RefreshCcw size={16} className="text-gray-500 group-hover:text-primary mr-1 transition-colors" />
              <span className="absolute -top-2 -right-2 bg-primary text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">3</span>
            </div>
            <p className="text-xs text-gray-500 group-hover:text-primary transition-colors hidden md:block">Compare</p>
          </div>

          {/* Wishlist with badge */}
          <div className="flex items-center cursor-pointer transition-colors relative group">
            <div className="relative">
              <Heart size={16} className="text-gray-500 group-hover:text-primary mr-1 transition-colors" />
              <span className="absolute -top-2 -right-2 bg-primary text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">5</span>
            </div>
            <p className="text-xs text-gray-500 group-hover:text-primary transition-colors hidden md:block">Wishlist</p>
          </div>

          {/* Cart with badge */}
          <div className="flex items-center cursor-pointer transition-colors relative group">
            <div className="relative">
              <ShoppingCart size={16} className="text-gray-500 group-hover:text-primary mr-1 transition-colors" />
              <span className="absolute -top-2 -right-2 bg-primary text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">2</span>
            </div>
            <p className="text-xs text-gray-500 group-hover:text-primary transition-colors hidden md:block">Cart</p>
          </div>

          <div className="flex items-center cursor-pointer transition-colors group">
            <CircleUserRound size={16} className="text-gray-500 group-hover:text-primary mr-1 transition-colors" />
            <p className="text-xs text-gray-500 group-hover:text-primary transition-colors hidden md:block">Account</p>
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
      <ProductHome />

      {/* Shop Now */}
      <div className="px-4 md:px-12 lg:px-24 py-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="relative shadow-md rounded-xl">
          <img src={require('../../assets/image/products/shop_now_1.png')} alt="" className="w-full rounded-lg" />
          <div className="absolute top-8 left-8 space-y-4">
            <p className="text-black text-xl font-bold font-quicksand leading-tight">Everyday Fresh & <br /> Clean with Our <br /> Products</p>
            <button className="bg-primary text-white px-4 py-2  text-sm font-medium hover:bg-primaryDark transition-colors">Shop Now →</button>
          </div>
        </div>

        <div className="relative shadow-md rounded-xl">
          <img src={require('../../assets/image/products/shop_now_2.png')} alt="" className="w-full rounded-lg" />
          <div className="absolute top-8 left-8 space-y-4">
            <p className="text-black text-xl font-bold font-quicksand leading-tight">Make your Breakfast <br /> Healthy and Easy</p>
            <button className="bg-primary text-white px-4 py-2  text-sm font-medium hover:bg-primaryDark transition-colors">Shop Now →</button>
          </div>
        </div>

        <div className="relative shadow-md rounded-xl">
          <img src={require('../../assets/image/products/shop_now_3.png')} alt="" className="w-full rounded-lg" />
          <div className="absolute top-8 left-8 space-y-4">
            <p className="text-black text-xl font-bold font-quicksand leading-tight">The best Organic <br /> Products Online</p>
            <button className="bg-primary text-white px-4 py-2  text-sm font-medium hover:bg-primaryDark transition-colors">Shop Now →</button>
          </div>
        </div>
      </div>

      {/* Shop by Categories */}
      <div className="px-4 md:px-12 lg:px-24 py-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center">
            <p className="text-2xl font-bold font-quicksand">Shop by Categories</p>
            <p className="text-primary text-xs ml-4 md:ml-10 cursor-pointer hover:text-primaryDark hover:underline transition-colors">All Categories &gt;</p>
          </div>
          <div className="flex items-center space-x-2">
            <ArrowLeft className="bg-gray-200 p-1 rounded-full cursor-pointer hover:bg-gray-300 transition-colors" />
            <ArrowRight className="bg-gray-200 p-1 rounded-full cursor-pointer hover:bg-gray-300 transition-colors" />
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:flex lg:justify-between gap-4 pt-4">
          <div className="flex flex-col items-center bg-gray-100 p-4 rounded-lg space-y-1 hover:scale-105 transition-all cursor-pointer shadow-md">
            <img src={require("../../assets/image/shop_category/image_1.png")} alt="" className="w-16" />
            <p className="text-sm font-bold font-quicksand">Milks and Dairíes</p>
            <p className="text-xs text-gray-400">5 items</p>
          </div>
          <div className="flex flex-col items-center bg-gray-100 p-4 rounded-lg space-y-1 hover:scale-105 transition-all cursor-pointer shadow-md">
            <img src={require("../../assets/image/shop_category/image_2.png")} alt="" className="w-16" />
            <p className="text-sm font-bold font-quicksand">Wines & Alcohol</p>
            <p className="text-xs text-gray-400">4 items</p>
          </div>
          <div className="flex flex-col items-center bg-gray-100 p-4 rounded-lg space-y-1 hover:scale-105 transition-all cursor-pointer shadow-md">
            <img src={require("../../assets/image/shop_category/image_3.png")} alt="" className="w-16" />
            <p className="text-sm font-bold font-quicksand">Clothing & Beauty</p>
            <p className="text-xs text-gray-400">4 items</p>
          </div>
          <div className="flex flex-col items-center bg-gray-100 p-4 rounded-lg space-y-1 hover:scale-105 transition-all cursor-pointer shadow-md">
            <img src={require("../../assets/image/shop_category/image_4.png")} alt="" className="w-16" />
            <p className="text-sm font-bold font-quicksand">Pet Foods & Toy</p>
            <p className="text-xs text-gray-400">2 items</p>
          </div>
          <div className="flex flex-col items-center bg-gray-100 p-4 rounded-lg space-y-1 hover:scale-105 transition-all cursor-pointer shadow-md">
            <img src={require("../../assets/image/shop_category/image_5.png")} alt="" className="w-16" />
            <p className="text-sm font-bold font-quicksand">Packaged fast food</p>
            <p className="text-xs text-gray-400">11 items</p>
          </div>
          <div className="flex flex-col items-center bg-gray-100 p-4 rounded-lg space-y-1 hover:scale-105 transition-all cursor-pointer shadow-md">
            <img src={require("../../assets/image/shop_category/image_6.png")} alt="" className="w-16" />
            <p className="text-sm font-bold font-quicksand">Baking material</p>
            <p className="text-xs text-gray-400">11 items</p>
          </div>
          <div className="flex flex-col items-center bg-gray-100 p-4 rounded-lg space-y-1 hover:scale-105 transition-all cursor-pointer shadow-md">
            <img src={require("../../assets/image/shop_category/image_7.png")} alt="" className="w-16" />
            <p className="text-sm font-bold font-quicksand">Vegetables & tubers</p>
            <p className="text-xs text-gray-400">6 items</p>
          </div>
          <div className="flex flex-col items-center bg-gray-100 p-4 rounded-lg space-y-1 hover:scale-105 transition-all cursor-pointer shadow-md">
            <img src={require("../../assets/image/shop_category/image_8.png")} alt="" className="w-16" />
            <p className="text-sm font-bold font-quicksand">Fresh Seafood</p>
            <p className="text-xs text-gray-400">5 items</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
          {/* Top Selling */}
          <div>
            <p className="text-xl font-bold font-quicksand pb-4">Top Selling</p>
            <span className="block h-0.5 w-1/4 bg-primary mb-4"></span>
            <div>
              {
                topSelling.map(product => (
                  <div key={product.id} className="flex items-center space-x-2 cursor-pointer hover:scale-105 transition-all hover:shadow-lg rounded-md p-1 group">
                    <img src={product.image} alt="" className="w-16" />
                    <div>
                      <p className="font-medium group-hover:text-primary">{product.title}</p>
                      {[...Array(5)].map((_, index) => (
                        <span key={index} className={`text-lg ${index < product.rating ? "text-yellow-400" : "text-gray-300"}`}>★</span>
                      ))}
                      <span className="text-xs text-gray-400">{product.rating}</span>
                      <div className="flex items-center space-x-2">
                        <p className="text-primary font-bold underline">${product.price}</p>
                        <p className="text-gray-400 line-through">${product.oldPrice}</p>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
          {/* Trending Products */}
          <div>
            <p className="text-xl font-bold font-quicksand pb-4">Trending Products</p>
            <span className="block h-0.5 w-1/4 bg-primary mb-4"></span>
            <div>
              {
                trendingProducts.map(product => (
                  <div key={product.id} className="flex items-center space-x-2 cursor-pointer hover:scale-105 transition-all hover:shadow-lg rounded-md p-1 group">
                    <img src={product.image} alt="" className="w-16" />
                    <div>
                      <p className="font-medium group-hover:text-primary">{product.title}</p>
                      {[...Array(5)].map((_, index) => (
                        <span key={index} className={`text-lg ${index < product.rating ? "text-yellow-400" : "text-gray-300"}`}>★</span>
                      ))}
                      <span className="text-xs text-gray-400">{product.rating}</span>
                      <div className="flex items-center space-x-2">
                        <p className="text-primary font-bold underline">${product.price}</p>
                        <p className="text-gray-400 line-through">${product.oldPrice}</p>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
          {/* Recently Added */}
          <div>
            <p className="text-xl font-bold font-quicksand pb-4">Recently Added</p>
            <span className="block h-0.5 w-1/4 bg-primary mb-4"></span>
            <div>
              {
                recentlyAdded.map(product => (
                  <div key={product.id} className="flex items-center space-x-2 cursor-pointer hover:scale-105 transition-all hover:shadow-lg rounded-md p-1 group">
                    <img src={product.image} alt="" className="w-16" />
                    <div>
                      <p className="font-medium group-hover:text-primary">{product.title}</p>
                      {[...Array(5)].map((_, index) => (
                        <span key={index} className={`text-lg ${index < product.rating ? "text-yellow-400" : "text-gray-300"}`}>★</span>
                      ))}
                      <span className="text-xs text-gray-400">{product.rating}</span>
                      <div className="flex items-center space-x-2">
                        <p className="text-primary font-bold underline">${product.price}</p>
                        <p className="text-gray-400 line-through">${product.oldPrice}</p>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
          {/* Top Rated */}
          <div>
            <p className="text-xl font-bold font-quicksand pb-4">Top Rated</p>
            <span className="block h-0.5 w-1/4 bg-primary mb-4"></span>
            <div>
              {
                topRatedProducts.map(product => (
                  <div key={product.id} className="flex items-center space-x-2 cursor-pointer hover:scale-105 transition-all hover:shadow-lg rounded-md p-1 group">
                    <img src={product.image} alt="" className="w-16" />
                    <div>
                      <p className="font-medium group-hover:text-primary">{product.title}</p>
                      {[...Array(5)].map((_, index) => (
                        <span key={index} className={`text-lg ${index < product.rating ? "text-yellow-400" : "text-gray-300"}`}>★</span>
                      ))}
                      <span className="text-xs text-gray-400">{product.rating}</span>
                      <div className="flex items-center space-x-2">
                        <p className="text-primary font-bold underline">${product.price}</p>
                        <p className="text-gray-400 line-through">${product.oldPrice}</p>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>

        {/* form section */}
        <div className="pt-4 relative">
          <img src={require("../../assets/image/bg-nest-email.png")} alt="" className="w-full h-64 md:h-auto object-cover rounded-2xl" />
          <img src={require("../../assets/image/person-bg-nest.png")} alt="" className="absolute w-1/2 md:w-1/2 bottom-0 right-0 rounded-br-2xl hidden md:block" />
          <div className="absolute top-1/2 left-4 md:left-24 transform -translate-y-1/2 md:transform-none md:top-1/4 space-y-2 w-full md:w-auto pr-4 md:pr-0">
            <p className="text-2xl md:text-4xl font-bold font-quicksand line-clamp-2">Stay home & get your daily <br className="hidden md:block" /> needs from our shop</p>
            <p className="text-lg md:text-xl font-medium font-quicksand">Start Your Daily Shopping with <span className="text-primary">Nest Mart</span></p>
            <div className="flex justify-center md:justify-start">
              <div className="mt-6 border border-gray-300 rounded-full bg-white w-full md:w-96 focus:outline-none focus:ring-2 focus:ring-primary flex justify-between">
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

        {/* icon section selling */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:flex lg:justify-between gap-4 pt-4">
          <div className="flex items-center space-x-2 bg-gray-100 px-6 py-2 rounded-md shadow-md cursor-pointer hover:scale-105 transition-all hover:shadow-lg">
            <img src={require("../../assets/image/icon_selling/best_prices_offers.png")} alt="" className="w-12" />
            <div className="space-y-1">
              <p className="font-medium text-sm">Best Prices & Offers</p>
              <p className="text-xs text-gray-400">Orders $50 or more</p>
            </div>
          </div>
          <div className="flex items-center space-x-2 bg-gray-100 px-6 py-2 rounded-md shadow-md cursor-pointer hover:scale-105 transition-all hover:shadow-lg">
            <img src={require("../../assets/image/icon_selling/free_delivery.png")} alt="" className="w-12" />
            <div className="space-y-1">
              <p className="font-medium text-sm">Free Delivery</p>
              <p className="text-xs text-gray-400">24/7 amazing services</p>
            </div>
          </div>
          <div className="flex items-center space-x-2 bg-gray-100 px-6 py-2 rounded-md shadow-md cursor-pointer hover:scale-105 transition-all hover:shadow-lg">
            <img src={require("../../assets/image/icon_selling/great_daily_deal.png")} alt="" className="w-12" />
            <div className="space-y-1">
              <p className="font-medium text-sm">Great Daily Deals</p>
              <p className="text-xs text-gray-400">When you sign up</p>
            </div>
          </div>
          <div className="flex items-center space-x-2 bg-gray-100 px-6 py-2 rounded-md shadow-md cursor-pointer hover:scale-105 transition-all hover:shadow-lg">
            <img src={require("../../assets/image/icon_selling/wide_assortment.png")} alt="" className="w-12" />
            <div className="space-y-1">
              <p className="font-medium text-sm">Wide Assortment</p>
              <p className="text-xs text-gray-400">Mega Discounts</p>
            </div>
          </div>
          <div className="flex items-center space-x-2 bg-gray-100 px-8 py-2 rounded-md shadow-md cursor-pointer hover:scale-105 transition-all hover:shadow-lg">
            <img src={require("../../assets/image/icon_selling/easy_returns.png")} alt="" className="w-12" />
            <div className="space-y-1">
              <p className="font-medium text-sm">Easy Returns</p>
              <p className="text-xs text-gray-400">Within 30 days</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage2;
