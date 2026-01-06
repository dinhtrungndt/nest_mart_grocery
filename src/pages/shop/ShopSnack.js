import { ArrowDownWideNarrow, ChevronDown, LayoutGrid, ShoppingCart, X } from 'lucide-react';
import { useState } from 'react';
import Breadcrumb from '../../components/common/Breadcrumb';
import Header2 from '../../components/header/Header2';
import Navbar from '../../components/navbar/Navbar';
import DealsOfTheDay from '../../components/products/DealsOfTheDay';
import FillByPrice from '../../components/products/fillByPrice';
import CategoryShop from '../../components/shop/category';
import { IMAGES } from '../../constants/images/image';
import { DataTrendingBlog } from '../../stores/data/blog';
import { DataShopSnack } from '../../stores/data/shop';
import EmailSubscribe from '../../utils/EmailSubscribe';

const ShopSnack = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedTag, setSelectedTag] = useState(null);
  const showFilters = true;

  const breadcrumbItems = [
    { label: 'Shop', link: '/shop' },
    { label: 'Shop Snack', link: '/shop-snack' },
  ];

  const tags = [
    { name: 'Cabbage', color: 'text-primary' },
    { name: 'Broccoli', color: 'text-black' },
    { name: 'Artichoke', color: 'text-primary' },
    { name: 'Celery', color: 'text-primary' },
    { name: 'Spinach', color: 'text-primary' },
  ];

  const filteredProducts = DataShopSnack.filter((p) => {
    const matchCategory =
      selectedCategory === 'All' || p.category === selectedCategory;

    const matchTag =
      !selectedTag || p.tags?.includes(selectedTag);

    return matchCategory && matchTag;
  });

  return (
    <div>
      <Header2 />
      <Navbar />

      <div className="px-4 md:px-12 lg:px-24 py-4 md:py-6">
        {/* Banner Header */}
        <div className="relative w-full h-32 sm:h-40 md:h-48 lg:h-64 rounded-2xl overflow-hidden shadow-lg mt-4">
          <img
            src={IMAGES.slide_blog}
            alt="Blog Slide"
            className="w-full h-full object-cover"
          />

          {/* Content */}
          <div className="absolute inset-0 flex flex-col justify-center px-4 sm:px-6 md:px-12 lg:px-16">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-quicksand font-bold text-gray-800 mb-1 md:mb-2">
              Snack
            </h1>
            <Breadcrumb items={breadcrumbItems} />
          </div>

          {/* Tags - Hidden on mobile */}
          <div className="absolute top-1/2 -translate-y-1/2 right-2 sm:right-4 md:right-6 flex flex-wrap gap-1 sm:gap-2 max-w-[120px] sm:max-w-xs md:max-w-md">
            {tags.slice(0, 3).map((tag, index) => (
              <span
                key={index}
                className={`hidden sm:flex items-center gap-1 ${tag.color} text-[10px] sm:text-xs font-medium bg-white px-2 sm:px-3 py-1 sm:py-1.5 rounded-full cursor-pointer hover:bg-gray-100 transition-colors shadow-sm`}
              >
                <X size={10} className="text-gray-500" />
                {tag.name}
              </span>
            ))}
          </div>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-4 md:mt-6 mb-4 gap-3 sm:gap-4">
          <p className="font-quicksand text-xs sm:text-sm">
            We found <span className="text-primary font-medium">{filteredProducts.length}</span> items for you!
          </p>
          <div className="flex flex-wrap items-center gap-2 sm:gap-4 w-full sm:w-auto">
            <p className="flex text-[10px] sm:text-xs text-gray-500 gap-1 sm:gap-2 p-1.5 sm:p-2 rounded-lg shadow-lg cursor-pointer hover:bg-gray-100 whitespace-nowrap">
              <LayoutGrid size={12} className="sm:w-3.5 sm:h-3.5" />
              Show: 50 <ChevronDown size={12} className="sm:w-3.5 sm:h-3.5" />
            </p>
            <p className="flex text-[10px] sm:text-xs text-gray-500 gap-1 sm:gap-2 p-1.5 sm:p-2 rounded-lg shadow-lg cursor-pointer hover:bg-gray-100 whitespace-nowrap">
              <ArrowDownWideNarrow size={12} className="sm:w-3.5 sm:h-3.5" />
              Sort by: Featured <ChevronDown size={12} className="sm:w-3.5 sm:h-3.5" />
            </p>
          </div>
        </div>

        {/* Product Grid and Sidebar */}
        <div className="flex flex-col lg:grid lg:grid-cols-6 gap-4 md:gap-6">
          {/* Products Grid */}
          <div className={`order-2 lg:order-none ${showFilters ? 'lg:col-span-5' : 'lg:col-span-6'} grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-6`}>
            {filteredProducts.slice(0, 20).map((product) => (
              <div
                key={product.id}
                className="relative border border-gray-200 h-fit rounded-xl sm:rounded-2xl shadow-md hover:scale-105 cursor-pointer p-2 sm:p-3 md:p-4 transition-transform group"
              >
                {/* Product Image */}
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-auto object-cover rounded-lg"
                />

                {/* Discount Badge */}
                <p className={`absolute top-0 left-0 text-white text-[8px] sm:text-xs p-0.5 sm:p-1 px-2 sm:px-4 rounded-tl-xl sm:rounded-tl-2xl rounded-br-xl sm:rounded-br-2xl ${product.discount >= 20 ? 'bg-red-500' :
                  product.discount >= 20 ? 'bg-orange-500' :
                    product.discount >= 10 ? 'bg-primary-500' :
                      'bg-green-500'
                  }`}>
                  {product.discount}%
                </p>

                {/* Sale Badge */}
                {product.isSale && (
                  <p className="absolute top-0 right-0 bg-cyan-500 text-white text-[8px] sm:text-xs p-0.5 sm:p-1 px-2 sm:px-4 rounded-tr-xl sm:rounded-tr-2xl rounded-bl-xl sm:rounded-bl-2xl">
                    Sale
                  </p>
                )}

                {/* Product Info */}
                <div className="mt-2">
                  <p className="text-gray-500 text-[9px] sm:text-xs">{product.category}</p>
                  <p className="font-medium text-xs sm:text-sm md:text-base group-hover:text-primary line-clamp-2">
                    {product.title}
                  </p>

                  {/* Rating */}
                  <div className="flex items-center justify-between mt-1 sm:mt-2">
                    <div className="flex items-center space-x-0.5">
                      {[...Array(5)].map((_, index) => (
                        <span
                          key={index}
                          className={`text-xs sm:text-sm md:text-lg ${index < product.rating ? 'text-yellow-400' : 'text-gray-300'
                            }`}
                        >
                          ★
                        </span>
                      ))}
                      <span className="text-[8px] sm:text-xs text-gray-500 ml-0.5 sm:ml-1">
                        ({product.rating})
                      </span>
                    </div>
                    <span className="hidden sm:inline text-gray-300 text-xs">|</span>
                    <p className="hidden sm:block text-gray-500 text-[9px] sm:text-xs">
                      SL: {product.quantity}
                    </p>
                  </div>

                  {/* Brand */}
                  <p className="text-gray-500 text-[9px] sm:text-xs mt-1">
                    By <span className="text-primary">{product.brand}</span>
                  </p>

                  {/* Price and Add Button */}
                  <div className="flex items-center justify-between mt-2 sm:mt-3 md:mt-4">
                    <div className="flex flex-col">
                      <p className="text-primary font-medium text-xs sm:text-sm md:text-base">
                        ${product.price}
                      </p>
                      <p className="text-gray-500 text-[9px] sm:text-xs line-through">
                        ${product.oldPrice}
                      </p>
                    </div>
                    <button className="bg-primaryButton flex items-center text-[9px] sm:text-xs text-primaryDark p-1 sm:p-1.5 md:p-2 rounded-sm font-medium hover:bg-primary hover:text-white transition-colors">
                      <ShoppingCart size={12} className="sm:w-4 sm:h-4 mr-0.5 sm:mr-1" />
                      <span className="hidden sm:inline">Add</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Sidebar Filters */}
          {showFilters && (
            <div className="order-1 lg:order-none w-full">
              {/* Category */}
              <CategoryShop
                selectedCategory={selectedCategory}
                onSelectCategory={setSelectedCategory}
              />

              {/* Price Filter */}
              <div className="my-4 md:my-6">
                <FillByPrice />
              </div>

              {/* New Products */}
              <div className="shadow-md p-3 sm:p-4 rounded-lg h-fit border border-gray-200">
                <p className="text-base sm:text-lg font-bold font-quicksand">New Products</p>
                <span className="block h-0.5 w-8 sm:w-10 bg-primary mt-2 mb-3 sm:mb-4"></span>
                {DataTrendingBlog.slice(0, 3).map(item => (
                  <div
                    key={item.id}
                    className="flex mb-2 sm:mb-3 last:mb-0 cursor-pointer hover:opacity-80 transition-opacity"
                  >
                    <img
                      src={item.image}
                      alt={item.alt}
                      className="w-12 h-12 sm:w-16 sm:h-16 object-cover rounded"
                    />
                    <div className="ml-2 sm:ml-4 flex flex-col justify-center gap-0.5 sm:gap-1">
                      <p className="font-medium text-primary text-xs sm:text-sm hover:text-primaryDark line-clamp-2">
                        {item.title}
                      </p>
                      <p className="text-[9px] sm:text-xs text-gray-500">{item.price}</p>
                      <p className="text-[9px] sm:text-xs">{item.rating}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Gallery */}
              <div className="shadow-md p-3 sm:p-4 mt-3 sm:mt-4 rounded-lg h-fit border border-gray-200">
                <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
                  {[IMAGES.ca_rot, IMAGES.ot_chuong, IMAGES.ep_soai, IMAGES.chuoi, IMAGES.dua, IMAGES.sau_rieng].map((img, idx) => (
                    <img
                      key={idx}
                      src={img}
                      alt="Gallery"
                      className="w-full h-auto rounded-lg shadow-md hover:scale-105 transition-transform cursor-pointer"
                    />
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Deals Of The Day */}
          <div className={`order-3 lg:order-none ${showFilters ? 'lg:col-span-5' : 'lg:col-span-6'} mt-4 md:mt-0`}>
            <DealsOfTheDay />
          </div>
        </div>

        {/* Email Subscribe */}
        <EmailSubscribe
          backgroundImage={IMAGES.person_email}
          personImage={IMAGES.personImage}
        />
      </div>
    </div>
  );
};

export default ShopSnack;
