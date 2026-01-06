import { ChevronDown, Flame, Headset, LayoutGrid, Logs } from 'lucide-react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedMobileMenu, setExpandedMobileMenu] = useState(null);

  const toggleMobileMenu = (menu) => {
    setExpandedMobileMenu(expandedMobileMenu === menu ? null : menu);
  };

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
            {/* Home */}
            <div className="flex flex-col">
              <div className="flex items-center justify-between px-6 py-3 hover:bg-gray-50 transition-colors group">
                <NavLink to="/" className={({ isActive }) => `font-medium transition-colors ${isActive ? 'text-primary font-bold' : 'text-gray-700 group-hover:text-primary'}`}>
                  Home
                </NavLink>
                <button onClick={() => toggleMobileMenu('home')} className="p-1">
                  <ChevronDown size={18} className={`transition-transform duration-300 ${expandedMobileMenu === 'home' ? 'rotate-180 text-primary' : 'text-gray-400 group-hover:text-primary'}`} />
                </button>
              </div>
              <div className={`overflow-hidden transition-all duration-300 ${expandedMobileMenu === 'home' ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="bg-gray-50 px-8 py-2 space-y-2 flex flex-col">
                  <NavLink to="/" className="text-gray-600 hover:text-primary py-1">Home 1</NavLink>
                  <NavLink to="/home-2" className="text-gray-600 hover:text-primary py-1">Home 2</NavLink>
                </div>
              </div>
            </div>
            {/* About */}
            <NavLink to="/about" className="flex items-center px-6 py-3 hover:bg-gray-50 cursor-pointer transition-colors group">
              {({ isActive }) => (
                <span className={`font-medium transition-colors ${isActive ? 'text-primary font-bold' : 'text-gray-700 group-hover:text-primary'}`}>About</span>
              )}
            </NavLink>
            {/* Shop */}
            {/* Shop */}
            <div className="flex flex-col">
              <div className="flex items-center justify-between px-6 py-3 hover:bg-gray-50 transition-colors group">
                <NavLink to="/shop" className={({ isActive }) => `font-medium transition-colors ${isActive ? 'text-primary font-bold' : 'text-gray-700 group-hover:text-primary'}`}>
                  Shop
                </NavLink>
                <button onClick={() => toggleMobileMenu('shop')} className="p-1">
                  <ChevronDown size={18} className={`transition-transform duration-300 ${expandedMobileMenu === 'shop' ? 'rotate-180 text-primary' : 'text-gray-400 group-hover:text-primary'}`} />
                </button>
              </div>
              <div className={`overflow-hidden transition-all duration-300 ${expandedMobileMenu === 'shop' ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="bg-gray-50 px-8 py-2 space-y-2 flex flex-col">
                  <NavLink to="/shop-snack" className="text-gray-600 hover:text-primary py-1">Shop Snack</NavLink>
                  <NavLink to="/shop-list" className="text-gray-600 hover:text-primary py-1">Shop List</NavLink>
                  <NavLink to="/shop-details" className="text-gray-600 hover:text-primary py-1">Shop Details</NavLink>
                  <NavLink to="/shop-filter" className="text-gray-600 hover:text-primary py-1">Shop Filter</NavLink>
                </div>
              </div>
            </div>
            {/* Mega Menu */}
            <div className="flex flex-col">
              <div className="flex items-center justify-between px-6 py-3 hover:bg-gray-50 transition-colors group">
                <NavLink to="/mega-menu" className={({ isActive }) => `font-medium transition-colors ${isActive ? 'text-primary font-bold' : 'text-gray-700 group-hover:text-primary'}`}>
                  Mega Menu
                </NavLink>
                <button onClick={() => toggleMobileMenu('mega-menu')} className="p-1">
                  <ChevronDown size={18} className={`transition-transform duration-300 ${expandedMobileMenu === 'mega-menu' ? 'rotate-180 text-primary' : 'text-gray-400 group-hover:text-primary'}`} />
                </button>
              </div>
              <div className={`overflow-hidden transition-all duration-300 ${expandedMobileMenu === 'mega-menu' ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="bg-gray-50 px-8 py-2 space-y-4 flex flex-col">
                  <div className="space-y-1">
                    <p className="font-bold text-primary text-sm">Fruit</p>
                    <NavLink to="/shop" className="block text-gray-600 hover:text-primary text-sm pl-2">Apple</NavLink>
                    <NavLink to="/shop" className="block text-gray-600 hover:text-primary text-sm pl-2">Banana</NavLink>
                  </div>
                  <div className="space-y-1">
                    <p className="font-bold text-primary text-sm">Meat</p>
                    <NavLink to="/shop" className="block text-gray-600 hover:text-primary text-sm pl-2">Beef</NavLink>
                    <NavLink to="/shop" className="block text-gray-600 hover:text-primary text-sm pl-2">Chicken</NavLink>
                  </div>
                </div>
              </div>
            </div>
            {/* Vendors */}
            <div className="flex flex-col">
              <div className="flex items-center justify-between px-6 py-3 hover:bg-gray-50 transition-colors group">
                <NavLink to="/vendors" className={({ isActive }) => `font-medium transition-colors ${isActive ? 'text-primary font-bold' : 'text-gray-700 group-hover:text-primary'}`}>
                  Vendors
                </NavLink>
                <button onClick={() => toggleMobileMenu('vendors')} className="p-1">
                  <ChevronDown size={18} className={`transition-transform duration-300 ${expandedMobileMenu === 'vendors' ? 'rotate-180 text-primary' : 'text-gray-400 group-hover:text-primary'}`} />
                </button>
              </div>
              <div className={`overflow-hidden transition-all duration-300 ${expandedMobileMenu === 'vendors' ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="bg-gray-50 px-8 py-2 space-y-2 flex flex-col">
                  <NavLink to="/vendors" className="text-gray-600 hover:text-primary py-1">Vendors Grid</NavLink>
                  <NavLink to="/vendors-list" className="text-gray-600 hover:text-primary py-1">Vendors List</NavLink>
                  <NavLink to="/vendor-details" className="text-gray-600 hover:text-primary py-1">Vendor Details</NavLink>
                </div>
              </div>
            </div>
            {/* Blog */}
            {/* Blog */}
            <div className="flex flex-col">
              <div className="flex items-center justify-between px-6 py-3 hover:bg-gray-50 transition-colors group">
                <NavLink to="/blog" className={({ isActive }) => `font-medium transition-colors ${isActive ? 'text-primary font-bold' : 'text-gray-700 group-hover:text-primary'}`}>
                  Blog
                </NavLink>
                <button onClick={() => toggleMobileMenu('blog')} className="p-1">
                  <ChevronDown size={18} className={`transition-transform duration-300 ${expandedMobileMenu === 'blog' ? 'rotate-180 text-primary' : 'text-gray-400 group-hover:text-primary'}`} />
                </button>
              </div>
              <div className={`overflow-hidden transition-all duration-300 ${expandedMobileMenu === 'blog' ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="bg-gray-50 px-8 py-2 space-y-2 flex flex-col">
                  <NavLink to="/blog" className="text-gray-600 hover:text-primary py-1">Blog Category</NavLink>
                  <NavLink to="/blog-single" className="text-gray-600 hover:text-primary py-1">Blog Single</NavLink>
                </div>
              </div>
            </div>
            {/* Pages */}
            {/* Pages */}
            <div className="flex flex-col">
              <div className="flex items-center justify-between px-6 py-3 hover:bg-gray-50 transition-colors group">
                <NavLink to="/pages" className={({ isActive }) => `font-medium transition-colors ${isActive ? 'text-primary font-bold' : 'text-gray-700 group-hover:text-primary'}`}>
                  Pages
                </NavLink>
                <button onClick={() => toggleMobileMenu('pages')} className="p-1">
                  <ChevronDown size={18} className={`transition-transform duration-300 ${expandedMobileMenu === 'pages' ? 'rotate-180 text-primary' : 'text-gray-400 group-hover:text-primary'}`} />
                </button>
              </div>
              <div className={`overflow-hidden transition-all duration-300 ${expandedMobileMenu === 'pages' ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="bg-gray-50 px-8 py-2 space-y-2 flex flex-col">
                  <NavLink to="/about" className="text-gray-600 hover:text-primary py-1">About Us</NavLink>
                  <NavLink to="/contact" className="text-gray-600 hover:text-primary py-1">Contact</NavLink>
                  <NavLink to="/account" className="text-gray-600 hover:text-primary py-1">My Account</NavLink>
                  <NavLink to="/login" className="text-gray-600 hover:text-primary py-1">Login</NavLink>
                  <NavLink to="/register" className="text-gray-600 hover:text-primary py-1">Register</NavLink>
                  <NavLink to="/404" className="text-gray-600 hover:text-primary py-1">404 Page</NavLink>
                </div>
              </div>
            </div>
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
            { label: 'Shop Snack', to: '/shop-snack' },
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
