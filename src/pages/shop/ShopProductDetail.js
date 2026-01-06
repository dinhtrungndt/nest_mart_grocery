import { Heart, Share2, ShoppingCart, Star } from 'lucide-react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import ShopLayout from '../../components/shop/ShopLayout';
import { DataShopSnack } from '../../stores/data/shop';

const ShopProductDetail = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const product = DataShopSnack.find(p => p.id === parseInt(id));

  if (!product) {
    return <div className="text-center py-12">Product not found</div>;
  }

  const breadcrumbItems = [
    { label: 'Shop', link: '/shop' },
    { label: 'Shop Snack', link: '/shop-snack' },
    { label: product.title, link: `/shop/product/${id}` },
  ];

  const handleQuantityChange = (type) => {
    if (type === 'increase') {
      setQuantity(prev => prev + 1);
    } else if (type === 'decrease' && quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  return (
    <ShopLayout
      title={product.title}
      breadcrumbItems={breadcrumbItems}
      showFilters={false}
      showSidebar={true}
      totalItems={0}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 md:mt-12">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="border border-gray-200 rounded-2xl p-4 md:p-8">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-auto object-contain"
            />
          </div>
          <div className="grid grid-cols-4 gap-2 md:gap-4">
            {[product.image, product.image, product.image, product.image].map((img, idx) => (
              <div key={idx} className="border border-gray-200 rounded-lg p-2 cursor-pointer hover:border-primary transition-colors">
                <img src={img} alt={`Thumb ${idx + 1}`} className="w-full h-auto object-contain" />
              </div>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-4 md:space-y-6">
          {/* Sale Badge */}
          {product.isSale && (
            <span className="inline-block bg-red-500 text-white text-xs px-3 py-1 rounded-full">
              Sale Off
            </span>
          )}

          {/* Title */}
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold font-quicksand">
            {product.title}
          </h1>

          {/* Rating & Reviews */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, idx) => (
                <Star
                  key={idx}
                  size={20}
                  className={idx < product.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
                />
              ))}
            </div>
            <span className="text-gray-500 text-sm">({product.rating} reviews)</span>
          </div>

          {/* Price */}
          <div className="flex items-center gap-4">
            <p className="text-3xl md:text-4xl font-bold text-primary">
              ${product.price}
            </p>
            <p className="text-xl md:text-2xl text-gray-400 line-through">
              ${product.oldPrice}
            </p>
            <span className="bg-orange-100 text-orange-600 text-sm px-3 py-1 rounded-full">
              {product.discount}% Off
            </span>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <p className="text-gray-700 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
              luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>

          {/* Product Details */}
          <div className="grid grid-cols-2 gap-4 py-4 border-y border-gray-200">
            <div>
              <p className="text-gray-500 text-sm">Category:</p>
              <p className="font-medium">{product.category}</p>
            </div>
            <div>
              <p className="text-gray-500 text-sm">Brand:</p>
              <p className="font-medium text-primary">{product.brand}</p>
            </div>
            <div>
              <p className="text-gray-500 text-sm">Stock:</p>
              <p className="font-medium text-green-600">{product.quantity} In Stock</p>
            </div>
            <div>
              <p className="text-gray-500 text-sm">SKU:</p>
              <p className="font-medium">FWM{product.id}5B6</p>
            </div>
          </div>

          {/* Quantity & Add to Cart */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex items-center border border-gray-300 rounded-full overflow-hidden w-fit">
              <button
                onClick={() => handleQuantityChange('decrease')}
                className="px-4 py-2 hover:bg-gray-100 transition-colors"
              >
                -
              </button>
              <span className="px-6 py-2 font-medium">{quantity}</span>
              <button
                onClick={() => handleQuantityChange('increase')}
                className="px-4 py-2 hover:bg-gray-100 transition-colors"
              >
                +
              </button>
            </div>

            <button className="flex-1 bg-primary text-white px-8 py-3 rounded-full font-medium hover:bg-primaryDark transition-colors flex items-center justify-center gap-2">
              <ShoppingCart size={20} />
              Add to Cart
            </button>
          </div>

          {/* Wishlist & Share */}
          <div className="flex gap-4">
            <button className="flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-full hover:border-primary hover:text-primary transition-colors">
              <Heart size={20} />
              Wishlist
            </button>
            <button className="flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-full hover:border-primary hover:text-primary transition-colors">
              <Share2 size={20} />
              Share
            </button>
          </div>
        </div>
      </div>

      {/* Product Tabs */}
      <div className="mt-12 border-t border-gray-200 pt-8">
        <div className="flex gap-8 border-b border-gray-200">
          <button className="pb-4 font-medium text-primary border-b-2 border-primary">
            Description
          </button>
          <button className="pb-4 font-medium text-gray-500 hover:text-primary transition-colors">
            Reviews ({product.rating})
          </button>
        </div>

        <div className="py-8 space-y-4">
          <p className="text-gray-700 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
            ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore.
          </p>
        </div>
      </div>
    </ShopLayout>
  );
};

export default ShopProductDetail;
