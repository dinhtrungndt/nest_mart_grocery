import { ChevronDown, Flame, Headset, LayoutGrid, Logs } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex flex-wrap md:flex-nowrap justify-between items-center md:space-x-8 bg-gray-100 p-2 md:px-24 text-xs font-medium">
      {/* Browse All Categories */}
      <div className="bg-primary flex items-center justify-center p-1 space-x-1 cursor-pointer rounded-sm">
        <LayoutGrid size={16} className="text-white" />
        <span className="text-white">Browse All Categories</span>
        <ChevronDown size={16} className="text-white" />
      </div>
      {/* Mobile Menu Button */}
      <div className="md:hidden relative order-first md:order-none items-center">
        <button onClick={() => setIsMenuOpen(true)} className="p-2">
          <Logs size={20} />
        </button>

        {/* Overlay */}
        <div
          className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
          onClick={() => setIsMenuOpen(false)}
        />

        {/* Mobile Drawer */}
        <div className={`fixed top-0 left-0 h-full w-64 bg-white z-50 shadow-lg transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="p-4 border-b flex justify-between items-center">
            <span className="font-bold text-lg">Menu</span>
            <button onClick={() => setIsMenuOpen(false)} className="p-1 hover:bg-gray-100 rounded-full">
              <ChevronDown size={20} className="rotate-90" />
            </button>
          </div>
          <div className="flex flex-col py-4 space-y-2 overflow-y-auto h-full pb-20">
            {/* Hot Deals */}
            <div className="flex items-center space-x-3 px-6 py-3 hover:bg-gray-50 cursor-pointer transition-colors group">
              <Flame size={20} className="text-red-500" />
              <p className="text-gray-700 font-medium group-hover:text-primary transition-colors">Hot Deals</p>
            </div>
            {/* Home */}
            <div className="flex items-center justify-between px-6 py-3 hover:bg-gray-50 cursor-pointer transition-colors group">
              <span className="text-gray-700 font-medium group-hover:text-primary transition-colors">Home</span>
              <ChevronDown size={18} className="text-gray-400 group-hover:text-primary transition-colors" />
            </div>
            {/* About */}
            <div className="flex items-center px-6 py-3 hover:bg-gray-50 cursor-pointer transition-colors group">
              <span className="text-gray-700 font-medium group-hover:text-primary transition-colors">About</span>
            </div>
            {/* Shop */}
            <div className="flex items-center justify-between px-6 py-3 hover:bg-gray-50 cursor-pointer transition-colors group">
              <span className="text-gray-700 font-medium group-hover:text-primary transition-colors">Shop</span>
              <ChevronDown size={18} className="text-gray-400 group-hover:text-primary transition-colors" />
            </div>
            {/* Mega Menu */}
            <div className="flex items-center justify-between px-6 py-3 hover:bg-gray-50 cursor-pointer transition-colors group">
              <span className="text-gray-700 font-medium group-hover:text-primary transition-colors">Mega Menu</span>
              <ChevronDown size={18} className="text-gray-400 group-hover:text-primary transition-colors" />
            </div>
            {/* Vendors */}
            <div className="flex items-center justify-between px-6 py-3 hover:bg-gray-50 cursor-pointer transition-colors group">
              <span className="text-gray-700 font-medium group-hover:text-primary transition-colors">Vendors</span>
              <ChevronDown size={18} className="text-gray-400 group-hover:text-primary transition-colors" />
            </div>
            {/* Blog */}
            <div className="flex items-center justify-between px-6 py-3 hover:bg-gray-50 cursor-pointer transition-colors group">
              <span className="text-gray-700 font-medium group-hover:text-primary transition-colors">Blog</span>
              <ChevronDown size={18} className="text-gray-400 group-hover:text-primary transition-colors" />
            </div>
            {/* Pages */}
            <div className="flex items-center justify-between px-6 py-3 hover:bg-gray-50 cursor-pointer transition-colors group">
              <span className="text-gray-700 font-medium group-hover:text-primary transition-colors">Pages</span>
              <ChevronDown size={18} className="text-gray-400 group-hover:text-primary transition-colors" />
            </div>
            {/* Contact */}
            <div className="flex items-center px-6 py-3 hover:bg-gray-50 cursor-pointer transition-colors group">
              <span className="text-gray-700 font-medium group-hover:text-primary transition-colors">Contact</span>
            </div>
          </div>
        </div>
      </div>
      <div className="items-center space-x-6 hidden md:flex">
        {/* Hot Deals */}
        <div className="flex items-center space-x-1 cursor-pointer group">
          <Flame size={16} className="text-red-500" />
          <p className="text-gray-700 group-hover:text-primary transition-colors">Hot Deals</p>
        </div>
        {/* Home */}
        <div className="flex items-center space-x-1 cursor-pointer group">
          <span className="text-gray-700 group-hover:text-primary transition-colors">Home</span>
          <ChevronDown size={16} className="group-hover:text-primary transition-colors" />
        </div>
        {/* About */}
        <div className="flex items-center space-x-1 cursor-pointer group">
          <span className="text-gray-700 group-hover:text-primary transition-colors">About</span>
        </div>
        {/* Shop */}
        <div className="flex items-center space-x-1 cursor-pointer group">
          <span className="text-gray-700 group-hover:text-primary transition-colors">Shop</span>
          <ChevronDown size={16} className="group-hover:text-primary transition-colors" />
        </div>
        {/* Mega Menu */}
        <div className="flex items-center space-x-1 cursor-pointer group">
          <span className="text-gray-700 group-hover:text-primary transition-colors">Mega Menu</span>
          <ChevronDown size={16} className="group-hover:text-primary transition-colors" />
        </div>
        {/* Vendors */}
        <div className="flex items-center space-x-1 cursor-pointer group">
          <span className="text-gray-700 group-hover:text-primary transition-colors">Vendors</span>
          <ChevronDown size={16} className="group-hover:text-primary transition-colors" />
        </div>
        {/* Blog */}
        <div className="flex items-center space-x-1 cursor-pointer group">
          <span className="text-gray-700 group-hover:text-primary transition-colors">Blog</span>
          <ChevronDown size={16} className="group-hover:text-primary transition-colors" />
        </div>
        {/* Pages */}
        <div className="flex items-center space-x-1 cursor-pointer group">
          <span className="text-gray-700 group-hover:text-primary transition-colors">Pages</span>
          <ChevronDown size={16} className="group-hover:text-primary transition-colors" />
        </div>
        {/* Contact */}
        <div className="flex items-center space-x-1 cursor-pointer group">
          <span className="text-gray-700 group-hover:text-primary transition-colors">Contact</span>
        </div>
      </div>
      {/* Contact Phone */}
      <div className="flex items-center space-x-2">
        <div className="flex flex-col">
          <p className="text-primary font-bold text-sm text-right">0889.541.507</p>
          <p className="text-gray-500 text-xs text-right">24/7 Support Center</p>
        </div>
        <Headset size={26} />
      </div>
    </div>
  );
};

export default Navbar;
