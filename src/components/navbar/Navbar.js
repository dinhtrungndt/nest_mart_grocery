import { ChevronDown, Flame, Headset, LayoutGrid, Logs } from 'lucide-react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Helper to render dropdown links
  const renderDropdownLinks = (links) => (
    <div className="absolute top-full left-0 w-48 bg-white shadow-lg rounded-md py-2 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2 border-t-2 border-primary">
      {links.map((link, index) => (
        <NavLink
          key={index}
          to={link.to}
          className="block px-4 py-2 text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors"
        >
          {link.label}
        </NavLink>
      ))}
    </div>
  );

  return (
    <div className="flex flex-wrap md:flex-nowrap justify-between items-center md:space-x-8 bg-gray-100 p-2 md:px-24 text-xs font-medium relative z-30">
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
            <NavLink to="/hot-deals" className="flex items-center space-x-3 px-6 py-3 hover:bg-gray-50 cursor-pointer transition-colors group">
              {({ isActive }) => (
                <>
                  <Flame size={20} className="text-red-500" />
                  <p className={`font-medium transition-colors ${isActive ? 'text-primary font-bold' : 'text-gray-700 group-hover:text-primary'}`}>Hot Deals</p>
                </>
              )}
            </NavLink>
            {/* Home */}
            <NavLink to="/" className="flex items-center justify-between px-6 py-3 hover:bg-gray-50 cursor-pointer transition-colors group">
              {({ isActive }) => (
                <>
                  <span className={`font-medium transition-colors ${isActive ? 'text-primary font-bold' : 'text-gray-700 group-hover:text-primary'}`}>Home</span>
                  <ChevronDown size={18} className={`transition-colors ${isActive ? 'text-primary' : 'text-gray-400 group-hover:text-primary'}`} />
                </>
              )}
            </NavLink>
            {/* About */}
            <NavLink to="/about" className="flex items-center px-6 py-3 hover:bg-gray-50 cursor-pointer transition-colors group">
              {({ isActive }) => (
                <span className={`font-medium transition-colors ${isActive ? 'text-primary font-bold' : 'text-gray-700 group-hover:text-primary'}`}>About</span>
              )}
            </NavLink>
            {/* Shop */}
            <NavLink to="/shop" className="flex items-center justify-between px-6 py-3 hover:bg-gray-50 cursor-pointer transition-colors group">
              {({ isActive }) => (
                <>
                  <span className={`font-medium transition-colors ${isActive ? 'text-primary font-bold' : 'text-gray-700 group-hover:text-primary'}`}>Shop</span>
                  <ChevronDown size={18} className={`transition-colors ${isActive ? 'text-primary' : 'text-gray-400 group-hover:text-primary'}`} />
                </>
              )}
            </NavLink>
            {/* Mega Menu */}
            <NavLink to="/mega-menu" className="flex items-center justify-between px-6 py-3 hover:bg-gray-50 cursor-pointer transition-colors group">
              {({ isActive }) => (
                <>
                  <span className={`font-medium transition-colors ${isActive ? 'text-primary font-bold' : 'text-gray-700 group-hover:text-primary'}`}>Mega Menu</span>
                  <ChevronDown size={18} className={`transition-colors ${isActive ? 'text-primary' : 'text-gray-400 group-hover:text-primary'}`} />
                </>
              )}
            </NavLink>
            {/* Vendors */}
            <NavLink to="/vendors" className="flex items-center justify-between px-6 py-3 hover:bg-gray-50 cursor-pointer transition-colors group">
              {({ isActive }) => (
                <>
                  <span className={`font-medium transition-colors ${isActive ? 'text-primary font-bold' : 'text-gray-700 group-hover:text-primary'}`}>Vendors</span>
                  <ChevronDown size={18} className={`transition-colors ${isActive ? 'text-primary' : 'text-gray-400 group-hover:text-primary'}`} />
                </>
              )}
            </NavLink>
            {/* Blog */}
            <NavLink to="/blog" className="flex items-center justify-between px-6 py-3 hover:bg-gray-50 cursor-pointer transition-colors group">
              {({ isActive }) => (
                <>
                  <span className={`font-medium transition-colors ${isActive ? 'text-primary font-bold' : 'text-gray-700 group-hover:text-primary'}`}>Blog</span>
                  <ChevronDown size={18} className={`transition-colors ${isActive ? 'text-primary' : 'text-gray-400 group-hover:text-primary'}`} />
                </>
              )}
            </NavLink>
            {/* Pages */}
            <NavLink to="/pages" className="flex items-center justify-between px-6 py-3 hover:bg-gray-50 cursor-pointer transition-colors group">
              {({ isActive }) => (
                <>
                  <span className={`font-medium transition-colors ${isActive ? 'text-primary font-bold' : 'text-gray-700 group-hover:text-primary'}`}>Pages</span>
                  <ChevronDown size={18} className={`transition-colors ${isActive ? 'text-primary' : 'text-gray-400 group-hover:text-primary'}`} />
                </>
              )}
            </NavLink>
            {/* Contact */}
            <NavLink to="/contact" className="flex items-center px-6 py-3 hover:bg-gray-50 cursor-pointer transition-colors group">
              {({ isActive }) => (
                <span className={`font-medium transition-colors ${isActive ? 'text-primary font-bold' : 'text-gray-700 group-hover:text-primary'}`}>Contact</span>
              )}
            </NavLink>
          </div>
        </div>
      </div>
      <div className="items-center space-x-6 hidden md:flex">
        {/* Hot Deals */}
        <NavLink to="/hot-deals" className="flex items-center space-x-1 cursor-pointer group">
          {({ isActive }) => (
            <>
              <Flame size={16} className="text-red-500" />
              <p className={`transition-colors ${isActive ? 'text-primary font-bold' : 'text-gray-700 group-hover:text-primary'}`}>Hot Deals</p>
            </>
          )}
        </NavLink>

        {/* Home */}
        <div className="relative group">
          <NavLink to="/" className="flex items-center space-x-1 cursor-pointer py-2">
            {({ isActive }) => (
              <>
                <span className={`transition-colors ${isActive ? 'text-primary font-bold' : 'text-gray-700 group-hover:text-primary'}`}>Home</span>
                <ChevronDown size={16} className={`transition-colors ${isActive ? 'text-primary' : 'group-hover:text-primary'}`} />
              </>
            )}
          </NavLink>
          {renderDropdownLinks([
            { label: 'Home 1', to: '/' },
            { label: 'Home 2', to: '/home-2' },
          ])}
        </div>

        {/* About */}
        <NavLink to="/about" className="flex items-center space-x-1 cursor-pointer group">
          {({ isActive }) => (
            <span className={`transition-colors ${isActive ? 'text-primary font-bold' : 'text-gray-700 group-hover:text-primary'}`}>About</span>
          )}
        </NavLink>

        {/* Shop */}
        <div className="relative group">
          <NavLink to="/shop" className="flex items-center space-x-1 cursor-pointer py-2">
            {({ isActive }) => (
              <>
                <span className={`transition-colors ${isActive ? 'text-primary font-bold' : 'text-gray-700 group-hover:text-primary'}`}>Shop</span>
                <ChevronDown size={16} className={`transition-colors ${isActive ? 'text-primary' : 'group-hover:text-primary'}`} />
              </>
            )}
          </NavLink>
          {renderDropdownLinks([
            { label: 'Shop Grid', to: '/shop' },
            { label: 'Shop List', to: '/shop-list' },
            { label: 'Shop Details', to: '/shop-details' },
            { label: 'Shop Filter', to: '/shop-filter' },
          ])}
        </div>

        {/* Mega Menu */}
        <div className="relative group">
          <NavLink to="/mega-menu" className="flex items-center space-x-1 cursor-pointer py-2">
            {({ isActive }) => (
              <>
                <span className={`transition-colors ${isActive ? 'text-primary font-bold' : 'text-gray-700 group-hover:text-primary'}`}>Mega Menu</span>
                <ChevronDown size={16} className={`transition-colors ${isActive ? 'text-primary' : 'group-hover:text-primary'}`} />
              </>
            )}
          </NavLink>
          {/* Custom wider dropdown for Mega Menu */}
          <div className="absolute top-full left-0 w-64 bg-white shadow-lg rounded-md py-2 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2 border-t-2 border-primary">
            <div className="grid grid-cols-2 gap-2 p-2">
              {/* Just placeholder content for mega menu structure */}
              <div className="space-y-1">
                <p className="font-bold text-primary mb-1">Fruit</p>
                <NavLink to="/shop" className="block text-gray-600 hover:text-primary">Apple</NavLink>
                <NavLink to="/shop" className="block text-gray-600 hover:text-primary">Banana</NavLink>
              </div>
              <div className="space-y-1">
                <p className="font-bold text-primary mb-1">Meat</p>
                <NavLink to="/shop" className="block text-gray-600 hover:text-primary">Beef</NavLink>
                <NavLink to="/shop" className="block text-gray-600 hover:text-primary">Chicken</NavLink>
              </div>
            </div>
          </div>
        </div>

        {/* Vendors */}
        <div className="relative group">
          <NavLink to="/vendors" className="flex items-center space-x-1 cursor-pointer py-2">
            {({ isActive }) => (
              <>
                <span className={`transition-colors ${isActive ? 'text-primary font-bold' : 'text-gray-700 group-hover:text-primary'}`}>Vendors</span>
                <ChevronDown size={16} className={`transition-colors ${isActive ? 'text-primary' : 'group-hover:text-primary'}`} />
              </>
            )}
          </NavLink>
          {renderDropdownLinks([
            { label: 'Vendors Grid', to: '/vendors' },
            { label: 'Vendors List', to: '/vendors-list' },
            { label: 'Vendor Details', to: '/vendor-details' },
          ])}
        </div>

        {/* Blog */}
        <div className="relative group">
          <NavLink to="/blog" className="flex items-center space-x-1 cursor-pointer py-2">
            {({ isActive }) => (
              <>
                <span className={`transition-colors ${isActive ? 'text-primary font-bold' : 'text-gray-700 group-hover:text-primary'}`}>Blog</span>
                <ChevronDown size={16} className={`transition-colors ${isActive ? 'text-primary' : 'group-hover:text-primary'}`} />
              </>
            )}
          </NavLink>
          {renderDropdownLinks([
            { label: 'Blog Category', to: '/blog' },
            { label: 'Blog Single', to: '/blog-single' },
          ])}
        </div>

        {/* Pages */}
        <div className="relative group">
          <NavLink to="/pages" className="flex items-center space-x-1 cursor-pointer py-2">
            {({ isActive }) => (
              <>
                <span className={`transition-colors ${isActive ? 'text-primary font-bold' : 'text-gray-700 group-hover:text-primary'}`}>Pages</span>
                <ChevronDown size={16} className={`transition-colors ${isActive ? 'text-primary' : 'group-hover:text-primary'}`} />
              </>
            )}
          </NavLink>
          {renderDropdownLinks([
            { label: 'About Us', to: '/about' },
            { label: 'Contact', to: '/contact' },
            { label: 'My Account', to: '/account' },
            { label: 'Login', to: '/login' },
            { label: 'Register', to: '/register' },
            { label: '404 Page', to: '/404' },
          ])}
        </div>

        {/* Contact */}
        <NavLink to="/contact" className="flex items-center space-x-1 cursor-pointer group">
          {({ isActive }) => (
            <span className={`transition-colors ${isActive ? 'text-primary font-bold' : 'text-gray-700 group-hover:text-primary'}`}>Contact</span>
          )}
        </NavLink>
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
