import { ChevronDown, CircleUserRound, Heart, MapPin, RefreshCcw, Search, ShoppingCart } from 'lucide-react';
import { IMAGES } from '../../constants/images/image';

const Header2 = () => {
  return (
    <div className="flex flex-wrap md:flex-nowrap justify-between items-center p-2 px-4 md:px-12 lg:px-24 gap-2 md:gap-4">
      <img src={IMAGES.logo} alt="Header Banner" className="w-20 md:w-24 cursor-pointer" />

      {/* Search Bar */}
      <div className="flex items-center justify-start border border-primary rounded-sm p-1 w-full order-last md:order-none md:w-1/3">
        <div className="hidden md:flex md:w-2/5 items-center cursor-pointer transition-colors hover:text-primary p-1 rounded-sm">
          <p className="text-xs font-semibold">All Categories</p>
          <ChevronDown size={16} className="ml-1" />
        </div>
        <span className="hidden md:block h-5 w-0.5 bg-primaryLight mr-2" />
        <input type="text" placeholder="Search for products..." className="px-2 w-full text-xs focus:outline-none" />
        <Search size={20} className="cursor-pointer text-gray-500 mr-2" />
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
  );
};

export default Header2;
