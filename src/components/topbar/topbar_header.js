import { ArrowRight, ChevronDown, CircleUserRound, Heart, RefreshCcw, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { IMAGES } from '../../constants/images/image';

const TopBar_Header = () => {
  return (
    <div>
      {/* Top Header */}
      <div className="flex justify-between items-center space-x-4 p-2 bg-gray-100 border-b-2 px-24">
        <div className="flex items-center">
          <Link to="/about" className="text-xs pr-2 hover:text-primary transition-colors relative after:content-[''] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:h-3 after:w-px after:bg-gray-300">About Us</Link>
          <Link to="/account" className="text-xs px-2 hover:text-primary transition-colors relative after:content-[''] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:h-3 after:w-px after:bg-gray-300">My Account</Link>
          <Link to="/wishlist" className="text-xs px-2 hover:text-primary transition-colors relative after:content-[''] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:h-3 after:w-px after:bg-gray-300">Wishlist</Link>
          <Link to="/order-tracking" className="text-xs px-2 hover:text-primary transition-colors">Order Tracking</Link>
        </div>
        <div className="flex-1 overflow-hidden mx-4 flex">
          <p className="text-sm text-primary font-medium whitespace-nowrap animate-marquee w-full text-center">
            100% Secure delivery without contacting the courier
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <p className="text-xs">Need help? Call Us: <span className="text-primary font-medium border-r border-gray-300 pr-2">+889.541.507</span></p>
          <p className="flex items-center text-xs cursor-pointer border-r border-gray-300 pr-2">English <ChevronDown size={10} className="ml-1" /></p>
          <p className="flex items-center text-xs cursor-pointer">INR <ChevronDown size={10} className="ml-1" /></p>
        </div>
      </div>
      {/* Header */}
      <div className="flex justify-between items-center p-4 px-24">
        <img src={IMAGES.logo} alt="Header Banner" className="w-24" />
        <div className="flex justify-between border border-primary rounded-sm p-1 w-1/3">
          <input type="text" placeholder="Search for products..." className="px-4 text-xs w-full focus:outline-none" />
          <button className="bg-primary text-white px-4 py-2 rounded-sm text-xs hover:bg-primaryDark transition-colors">Search</button>
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
    </div>
  );
};

export default TopBar_Header;
