import { ChevronDown, MoreHorizontal } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const TopBarHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative">
      {/* Top Header */}
      <div className="flex justify-between items-center space-x-4 p-2 bg-gray-100 border-b-2 px-4 md:px-24">
        <div className="flex items-center">
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center">
            <Link to="/about" className="text-xs pr-2 hover:text-primary transition-colors relative after:content-[''] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:h-3 after:w-px after:bg-gray-300">About Us</Link>
            <Link to="/account" className="text-xs px-2 hover:text-primary transition-colors relative after:content-[''] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:h-3 after:w-px after:bg-gray-300">My Account</Link>
            <Link to="/wishlist" className="text-xs px-2 hover:text-primary transition-colors relative after:content-[''] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:h-3 after:w-px after:bg-gray-300">Wishlist</Link>
            <Link to="/order-tracking" className="text-xs px-2 hover:text-primary transition-colors">Order Tracking</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden relative">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-1">
              <MoreHorizontal size={20} />
            </button>

            {/* Mobile Dropdown */}
            {isMenuOpen && (
              <div className="absolute top-full left-0 mt-2 w-40 bg-white shadow-lg rounded-md z-50 border border-gray-100 py-2 flex flex-col">
                <Link to="/about" className="text-xs px-4 py-2 hover:bg-gray-50 hover:text-primary transition-colors">About Us</Link>
                <Link to="/account" className="text-xs px-4 py-2 hover:bg-gray-50 hover:text-primary transition-colors">My Account</Link>
                <Link to="/wishlist" className="text-xs px-4 py-2 hover:bg-gray-50 hover:text-primary transition-colors">Wishlist</Link>
                <Link to="/order-tracking" className="text-xs px-4 py-2 hover:bg-gray-50 hover:text-primary transition-colors">Order Tracking</Link>
              </div>
            )}
          </div>
        </div>
        <div className="flex-1 overflow-hidden mx-4 flex">
          <p className="text-sm text-primary font-medium whitespace-nowrap animate-marquee w-full text-center">
            100% Secure delivery without contacting the courier
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <p className="text-xs hidden md:block">Need help? Call Us: <span className="text-primary font-medium border-r border-gray-300 pr-2">+889.541.507</span></p>
          <p className="flex items-center text-xs cursor-pointer border-r border-gray-300 pr-2">English <ChevronDown size={10} className="ml-1" /></p>
          <p className="flex items-center text-xs cursor-pointer">INR <ChevronDown size={10} className="ml-1" /></p>
        </div>
      </div>
    </div>
  );
};

export default TopBarHeader;
