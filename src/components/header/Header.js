import { ArrowRight, CircleUserRound, Heart, RefreshCcw, ShoppingCart } from "lucide-react";
import { IMAGES } from "../../constants/images/image";

const Header = () => {
  return (
    <div className="flex flex-wrap md:flex-nowrap justify-between items-center p-4 px-4 md:px-12 lg:px-24 gap-4">
      <img src={IMAGES.logo} alt="Header Banner" className="w-24 cursor-pointer" />
      <div className="flex justify-between border border-primary rounded-sm p-1 w-full order-last md:order-none md:w-1/3">
        <input type="text" placeholder="Search for products..." className="px-4 text-xs w-full focus:outline-none" />
        <button className="bg-primary text-white px-6 py-2 rounded-sm text-xs hover:bg-primaryDark transition-colors">Search</button>
      </div>
      <div className="flex items-center space-x-2 md:space-x-6">
        <button className="flex border border-primary text-primary p-1 md:p-2 rounded-sm text-xs hover:bg-primaryDark transition-colors hover:text-white"><span className="md:inline">Became Vendor</span> <ArrowRight size={16} className="ml-1" /></button>
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
  );
};

export default Header;
