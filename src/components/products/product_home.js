import { ShoppingCart } from 'lucide-react';
import { useState } from 'react';
import { DataProducts } from '../../stores/data/products';
import Category from './category';
import Product_Tags from './product_tags';

const ProductHome = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedTag, setSelectedTag] = useState(null);


  const filteredProducts = DataProducts.filter((p) => {
    const matchCategory =
      selectedCategory === 'All' || p.category === selectedCategory;

    const matchTag =
      !selectedTag || p.tags?.includes(selectedTag);

    return matchCategory && matchTag;
  });

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
    setSelectedTag(null);
  };

  return (
    <div className="p-6 px-24">
      {/* Product Category */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold font-quicksand">Popular Products</h1>
        <div className="flex space-x-6 text-sm font-medium">
          <p className={`hover:text-primary cursor-pointer transition-colors ${selectedCategory === 'All' ? 'text-primary' : ''}`} onClick={() => handleSelectCategory('All')}>All</p>
          <p className={`hover:text-primary cursor-pointer transition-colors ${selectedCategory === 'Baking material' ? 'text-primary' : ''}`} onClick={() => handleSelectCategory('Baking material')}>Baking material</p>
          <p className={`hover:text-primary cursor-pointer transition-colors ${selectedCategory === 'Fresh Fruits' ? 'text-primary' : ''}`} onClick={() => handleSelectCategory('Fresh Fruits')}>Fresh Fruits</p>
          <p className={`hover:text-primary cursor-pointer transition-colors ${selectedCategory === 'Milks & Dairies' ? 'text-primary' : ''}`} onClick={() => handleSelectCategory('Milks & Dairies')}>Milks & Dairies</p>
          <p className={`hover:text-primary cursor-pointer transition-colors ${selectedCategory === 'Meats' ? 'text-primary' : ''}`} onClick={() => handleSelectCategory('Meats')}>Meats</p>
          <p className={`hover:text-primary cursor-pointer transition-colors ${selectedCategory === 'Vegetables' ? 'text-primary' : ''}`} onClick={() => handleSelectCategory('Vegetables')}>Vegetables</p>
        </div>
      </div>
      {/* Product and Category */}
      <div className="grid grid-cols-6 gap-6">
        {/* Products */}
        <div className="col-span-5 grid grid-cols-5 gap-6">
          {filteredProducts.slice(0, 15).map((product) => (
            <div key={product.id} className="relative border border-gray-200 h-fit rounded-2xl shadow-md hover:scale-105 cursor-pointer p-4 transition-transform group">
              <img src={product.image} alt={product.name} className="" />
              <p className={`absolute top-0 left-0 bg-primary text-white text-xs p-1 px-4 rounded-tl-2xl rounded-br-2xl ${product.discount >= 20 ? 'bg-red-500' :
                product.discount >= 15 ? 'bg-orange-500' :
                  product.discount >= 10 ? 'bg-primary-500' :
                    'bg-green-500'
                }`}>{product.discount} %</p>
              {product.isSale && (
                <p className="absolute top-0 right-0 bg-cyan-500 text-white text-xs p-1 px-4 rounded-tr-2xl rounded-bl-2xl">Sale</p>
              )}
              <p className="text-gray-500 text-xs">{product.category}</p>
              <p className="font-medium text-base group-hover:text-primary">{product.title}</p>
              {/* Rating Stars */}
              <div className="flex items-center space-x-1 justify-between">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, index) => (
                    <span
                      key={index}
                      className={`text-lg ${index < product.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                    >
                      ★
                    </span>
                  ))}
                  <span className="text-xs text-gray-500 ml-1">({product.rating})</span>
                </div>
                <span className="text-gray-300 text-xs">|</span>
                <p className="text-gray-500 text-xs">SL: {product.quantity}</p>
              </div>
              <p className="text-gray-500 text-xs">By <span className="text-primary">{product.brand}</span></p>
              <div className="flex space-y-2 mt-4 items-center justify-between">
                <div className="flex flex-col">
                  <p className="text-primary font-medium underline">${product.price}</p>
                  <p className="text-gray-500 text-xs line-through">
                    ${product.oldPrice}</p>
                </div>
                <button className="bg-primaryButton flex text-xs text-primaryDark p-2 rounded-sm font-medium hover:bg-primary hover:text-white"><ShoppingCart size={16} className="mr-1" />Add</button>
              </div>
            </div>
          ))}
        </div>
        <div>
          <Category
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
          <Product_Tags
            selectedTag={selectedTag}
            onSelectTag={setSelectedTag}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductHome;
