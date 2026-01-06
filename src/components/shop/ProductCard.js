import { ShoppingCart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/shop/product/${product.id}`);
  };

  return (
    <div
      onClick={handleClick}
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
          product.discount >= 15 ? 'bg-orange-500' :
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
  );
};

export default ProductCard;
