import { ArrowRight, CircleUserRound, Heart, RefreshCcw, ShoppingCart } from 'lucide-react';
import Navbar from '../../components/navbar/Navbar';
import TopBar_Header from '../../components/topbar/topbar_header';
import { IMAGES } from '../../constants/images/image';


const HomePage = () => {
  return (
    <div>
      {/* TopHeader */}
      <TopBar_Header />
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
      {/* Navbar */}
      <Navbar />
    </div>
  );
};

export default HomePage;
