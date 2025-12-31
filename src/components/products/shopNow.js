
const ShopNow = () => {
  return (
    <div className="px-4 md:px-12 lg:px-24 py-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div className="relative shadow-md rounded-xl">
        <img src={require('../../assets/image/products/shop_now_1.png')} alt="" className="w-full rounded-lg" />
        <div className="absolute top-8 left-8 space-y-4">
          <p className="text-black text-xl font-bold font-quicksand leading-tight">Everyday Fresh & <br /> Clean with Our <br /> Products</p>
          <button className="bg-primary text-white px-4 py-2  text-sm font-medium hover:bg-primaryDark transition-colors">Shop Now →</button>
        </div>
      </div>

      <div className="relative shadow-md rounded-xl">
        <img src={require('../../assets/image/products/shop_now_2.png')} alt="" className="w-full rounded-lg" />
        <div className="absolute top-8 left-8 space-y-4">
          <p className="text-black text-xl font-bold font-quicksand leading-tight">Make your Breakfast <br /> Healthy and Easy</p>
          <button className="bg-primary text-white px-4 py-2  text-sm font-medium hover:bg-primaryDark transition-colors">Shop Now →</button>
        </div>
      </div>

      <div className="relative shadow-md rounded-xl">
        <img src={require('../../assets/image/products/shop_now_3.png')} alt="" className="w-full rounded-lg" />
        <div className="absolute top-8 left-8 space-y-4">
          <p className="text-black text-xl font-bold font-quicksand leading-tight">The best Organic <br /> Products Online</p>
          <button className="bg-primary text-white px-4 py-2  text-sm font-medium hover:bg-primaryDark transition-colors">Shop Now →</button>
        </div>
      </div>
    </div>
  );
};

export default ShopNow;
