import { ChevronDown, Flame, Headset, LayoutGrid } from 'lucide-react';

const Navbar = () => {
  return (
    <div className="flex justify-between items-center space-x-8 bg-gray-100 p-2 px-24 text-xs font-medium">
      {/* Browse All Categories */}
      <div className="bg-primary flex items-center justify-center p-1 space-x-1 cursor-pointer rounded-sm">
        <LayoutGrid size={16} className="text-white" />
        <span className="text-white">Browse All Categories</span>
        <ChevronDown size={16} className="text-white" />
      </div>
      <div className="flex items-center space-x-6">
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
