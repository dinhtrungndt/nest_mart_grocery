import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const TopBar_Header = () => {
  return (
    <div>
      {/* Top Header */}
      <div className="flex justify-between items-center space-x-4 p-2 bg-gray-100 border-b-2 px-24">
        <div className="flex items-center">
          <Link to="/about" className="text-xs pr-2 hover:text-[#3BB77E] transition-colors relative after:content-[''] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:h-3 after:w-px after:bg-gray-300">About Us</Link>
          <Link to="/account" className="text-xs px-2 hover:text-[#3BB77E] transition-colors relative after:content-[''] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:h-3 after:w-px after:bg-gray-300">My Account</Link>
          <Link to="/wishlist" className="text-xs px-2 hover:text-[#3BB77E] transition-colors relative after:content-[''] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:h-3 after:w-px after:bg-gray-300">Wishlist</Link>
          <Link to="/order-tracking" className="text-xs px-2 hover:text-[#3BB77E] transition-colors">Order Tracking</Link>
        </div>
        <div className="flex-1 overflow-hidden mx-4 flex">
          <p className="text-sm text-[#3BB77E] font-medium whitespace-nowrap animate-marquee w-full text-center">
            100% Secure delivery without contacting the courier
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <p className="text-xs">Need help? Call Us: <span className="text-[#3BB77E] font-medium border-r border-gray-300 pr-2">+889.541.507</span></p>
          <p className="flex items-center text-xs cursor-pointer border-r border-gray-300 pr-2">English <ChevronDown size={10} className="ml-1" /></p>
          <p className="flex items-center text-xs cursor-pointer">INR <ChevronDown size={10} className="ml-1" /></p>
        </div>
      </div>
    </div>
  );
};

export default TopBar_Header;
