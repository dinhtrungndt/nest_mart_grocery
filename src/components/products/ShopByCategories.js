import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useMemo } from 'react';
import { IMAGES } from '../../constants/images/image';
import { DataProducts } from '../../stores/data/products';
import EmailSubscribe from '../../utils/EmailSubscribe';

const ShopByCategories = ({ setIsPaused, showIconSelling }) => {

  const topSelling = useMemo(
    () => DataProducts.sort((a, b) => b.selling - a.selling).slice(0, 3),
    []
  );

  const trendingProducts = useMemo(
    () => DataProducts.filter(p => p.isTrending).slice(0, 3),
    []
  );

  const recentlyAdded = useMemo(
    () => DataProducts.filter(p => p.isRecently).slice(0, 3),
    []
  );

  const topRatedProducts = useMemo(
    () => DataProducts.filter(p => p.isTopRated).slice(0, 3),
    []
  );

  return (
    <div className="px-4 md:px-12 lg:px-24 py-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center">
          <p className="text-2xl font-bold font-quicksand">Shop by Categories</p>
          <p className="text-primary text-xs ml-4 md:ml-10 cursor-pointer hover:text-primaryDark hover:underline transition-colors">All Categories &gt;</p>
        </div>
        <div className="flex items-center space-x-2">
          <ArrowLeft className="bg-gray-200 p-1 rounded-full cursor-pointer hover:bg-gray-300 transition-colors" />
          <ArrowRight className="bg-gray-200 p-1 rounded-full cursor-pointer hover:bg-gray-300 transition-colors" />
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:flex lg:justify-between gap-4 pt-4">
        <div className="flex flex-col items-center bg-gray-100 p-4 rounded-lg space-y-1 hover:scale-105 transition-all cursor-pointer shadow-md">
          <img src={require("../../assets/image/shop_category/image_1.png")} alt="" className="w-16" />
          <p className="text-sm font-bold font-quicksand">Milks and Dairíes</p>
          <p className="text-xs text-gray-400">5 items</p>
        </div>
        <div className="flex flex-col items-center bg-gray-100 p-4 rounded-lg space-y-1 hover:scale-105 transition-all cursor-pointer shadow-md">
          <img src={require("../../assets/image/shop_category/image_2.png")} alt="" className="w-16" />
          <p className="text-sm font-bold font-quicksand">Wines & Alcohol</p>
          <p className="text-xs text-gray-400">4 items</p>
        </div>
        <div className="flex flex-col items-center bg-gray-100 p-4 rounded-lg space-y-1 hover:scale-105 transition-all cursor-pointer shadow-md">
          <img src={require("../../assets/image/shop_category/image_3.png")} alt="" className="w-16" />
          <p className="text-sm font-bold font-quicksand">Clothing & Beauty</p>
          <p className="text-xs text-gray-400">4 items</p>
        </div>
        <div className="flex flex-col items-center bg-gray-100 p-4 rounded-lg space-y-1 hover:scale-105 transition-all cursor-pointer shadow-md">
          <img src={require("../../assets/image/shop_category/image_4.png")} alt="" className="w-16" />
          <p className="text-sm font-bold font-quicksand">Pet Foods & Toy</p>
          <p className="text-xs text-gray-400">2 items</p>
        </div>
        <div className="flex flex-col items-center bg-gray-100 p-4 rounded-lg space-y-1 hover:scale-105 transition-all cursor-pointer shadow-md">
          <img src={require("../../assets/image/shop_category/image_5.png")} alt="" className="w-16" />
          <p className="text-sm font-bold font-quicksand">Packaged fast food</p>
          <p className="text-xs text-gray-400">11 items</p>
        </div>
        <div className="flex flex-col items-center bg-gray-100 p-4 rounded-lg space-y-1 hover:scale-105 transition-all cursor-pointer shadow-md">
          <img src={require("../../assets/image/shop_category/image_6.png")} alt="" className="w-16" />
          <p className="text-sm font-bold font-quicksand">Baking material</p>
          <p className="text-xs text-gray-400">11 items</p>
        </div>
        <div className="flex flex-col items-center bg-gray-100 p-4 rounded-lg space-y-1 hover:scale-105 transition-all cursor-pointer shadow-md">
          <img src={require("../../assets/image/shop_category/image_7.png")} alt="" className="w-16" />
          <p className="text-sm font-bold font-quicksand">Vegetables & tubers</p>
          <p className="text-xs text-gray-400">6 items</p>
        </div>
        <div className="flex flex-col items-center bg-gray-100 p-4 rounded-lg space-y-1 hover:scale-105 transition-all cursor-pointer shadow-md">
          <img src={require("../../assets/image/shop_category/image_8.png")} alt="" className="w-16" />
          <p className="text-sm font-bold font-quicksand">Fresh Seafood</p>
          <p className="text-xs text-gray-400">5 items</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-4 md:py-8">
        {/* Top Selling */}
        <div>
          <p className="text-xl font-bold font-quicksand pb-4">Top Selling</p>
          <span className="block h-0.5 w-1/4 bg-primary mb-4"></span>
          <div>
            {
              topSelling.map(product => (
                <div key={product.id} className="flex items-center space-x-2 cursor-pointer hover:scale-105 transition-all hover:shadow-lg rounded-md p-1 group">
                  <img src={product.image} alt="" className="w-16" />
                  <div>
                    <p className="font-medium group-hover:text-primary">{product.title}</p>
                    {[...Array(5)].map((_, index) => (
                      <span key={index} className={`text-lg ${index < product.rating ? "text-yellow-400" : "text-gray-300"}`}>★</span>
                    ))}
                    <span className="text-xs text-gray-400">{product.rating}</span>
                    <div className="flex items-center space-x-2">
                      <p className="text-primary font-bold underline">${product.price}</p>
                      <p className="text-gray-400 line-through">${product.oldPrice}</p>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
        {/* Trending Products */}
        <div>
          <p className="text-xl font-bold font-quicksand pb-4">Trending Products</p>
          <span className="block h-0.5 w-1/4 bg-primary mb-4"></span>
          <div>
            {
              trendingProducts.map(product => (
                <div key={product.id} className="flex items-center space-x-2 cursor-pointer hover:scale-105 transition-all hover:shadow-lg rounded-md p-1 group">
                  <img src={product.image} alt="" className="w-16" />
                  <div>
                    <p className="font-medium group-hover:text-primary">{product.title}</p>
                    {[...Array(5)].map((_, index) => (
                      <span key={index} className={`text-lg ${index < product.rating ? "text-yellow-400" : "text-gray-300"}`}>★</span>
                    ))}
                    <span className="text-xs text-gray-400">{product.rating}</span>
                    <div className="flex items-center space-x-2">
                      <p className="text-primary font-bold underline">${product.price}</p>
                      <p className="text-gray-400 line-through">${product.oldPrice}</p>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
        {/* Recently Added */}
        <div>
          <p className="text-xl font-bold font-quicksand pb-4">Recently Added</p>
          <span className="block h-0.5 w-1/4 bg-primary mb-4"></span>
          <div>
            {
              recentlyAdded.map(product => (
                <div key={product.id} className="flex items-center space-x-2 cursor-pointer hover:scale-105 transition-all hover:shadow-lg rounded-md p-1 group">
                  <img src={product.image} alt="" className="w-16" />
                  <div>
                    <p className="font-medium group-hover:text-primary">{product.title}</p>
                    {[...Array(5)].map((_, index) => (
                      <span key={index} className={`text-lg ${index < product.rating ? "text-yellow-400" : "text-gray-300"}`}>★</span>
                    ))}
                    <span className="text-xs text-gray-400">{product.rating}</span>
                    <div className="flex items-center space-x-2">
                      <p className="text-primary font-bold underline">${product.price}</p>
                      <p className="text-gray-400 line-through">${product.oldPrice}</p>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
        {/* Top Rated */}
        <div>
          <p className="text-xl font-bold font-quicksand pb-4">Top Rated</p>
          <span className="block h-0.5 w-1/4 bg-primary mb-4"></span>
          <div>
            {
              topRatedProducts.map(product => (
                <div key={product.id} className="flex items-center space-x-2 cursor-pointer hover:scale-105 transition-all hover:shadow-lg rounded-md p-1 group">
                  <img src={product.image} alt="" className="w-16" />
                  <div>
                    <p className="font-medium group-hover:text-primary">{product.title}</p>
                    {[...Array(5)].map((_, index) => (
                      <span key={index} className={`text-lg ${index < product.rating ? "text-yellow-400" : "text-gray-300"}`}>★</span>
                    ))}
                    <span className="text-xs text-gray-400">{product.rating}</span>
                    <div className="flex items-center space-x-2">
                      <p className="text-primary font-bold underline">${product.price}</p>
                      <p className="text-gray-400 line-through">${product.oldPrice}</p>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>

      {/* form section */}
      <EmailSubscribe
        backgroundImage={IMAGES.person_email}
        personImage={IMAGES.personImage}
        onFocus={() => setIsPaused(true)}
        onBlur={() => setIsPaused(false)}
      />

      {/* icon section selling */}
      {showIconSelling && (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:flex lg:justify-between gap-4 pt-8 md:pb-24">
          <div className="flex items-center space-x-2 bg-gray-100 px-6 py-2 rounded-md shadow-md cursor-pointer hover:scale-105 transition-all hover:shadow-lg">
            <img src={IMAGES.best_prices_offers} alt="" className="w-12" />
            <div className="space-y-1">
              <p className="font-medium text-sm">Best Prices & Offers</p>
              <p className="text-xs text-gray-400">Orders $50 or more</p>
            </div>
          </div>
          <div className="flex items-center space-x-2 bg-gray-100 px-6 py-2 rounded-md shadow-md cursor-pointer hover:scale-105 transition-all hover:shadow-lg">
            <img src={IMAGES.free_delivery} alt="" className="w-12" />
            <div className="space-y-1">
              <p className="font-medium text-sm">Free Delivery</p>
              <p className="text-xs text-gray-400">24/7 amazing services</p>
            </div>
          </div>
          <div className="flex items-center space-x-2 bg-gray-100 px-6 py-2 rounded-md shadow-md cursor-pointer hover:scale-105 transition-all hover:shadow-lg">
            <img src={IMAGES.great_daily_deal} alt="" className="w-12" />
            <div className="space-y-1">
              <p className="font-medium text-sm">Great Daily Deals</p>
              <p className="text-xs text-gray-400">When you sign up</p>
            </div>
          </div>
          <div className="flex items-center space-x-2 bg-gray-100 px-6 py-2 rounded-md shadow-md cursor-pointer hover:scale-105 transition-all hover:shadow-lg">
            <img src={IMAGES.wide_assortment} alt="" className="w-12" />
            <div className="space-y-1">
              <p className="font-medium text-sm">Wide Assortment</p>
              <p className="text-xs text-gray-400">Mega Discounts</p>
            </div>
          </div>
          <div className="flex items-center space-x-2 bg-gray-100 px-8 py-2 rounded-md shadow-md cursor-pointer hover:scale-105 transition-all hover:shadow-lg">
            <img src={IMAGES.easy_return} alt="" className="w-12" />
            <div className="space-y-1">
              <p className="font-medium text-sm">Easy Returns</p>
              <p className="text-xs text-gray-400">Within 30 days</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShopByCategories;
