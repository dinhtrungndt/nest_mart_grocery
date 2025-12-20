import { ShoppingCart } from 'lucide-react';
import { DataDealsOfTheDay } from '../../stores/data/products';

const DealsOfTheDay = () => {
  return (
    <div>
      {/* Title */}
      <div className="flex justify-between my-4">
        <p className="text-2xl font-bold font-quicksand">
          Deals Of The Day
        </p>
        <p className="text-xs text-primary cursor-pointer hover:text-primaryDark transition-colors">
          All Deals {'>'}
        </p>
      </div>

      {/* 4 columns */}
      <div className="grid grid-cols-4 gap-6">
        {
          DataDealsOfTheDay.slice(0, 4).map((item) => (
            <div key={item.id} className="relative rounded-2xl cursor-pointer transition-transform hover:scale-105">
              <img src={item.image} alt={item.title} />
              <div className="absolute -bottom-10 left-4 right-4 bg-white p-4 rounded-2xl space-y-2">
                <p className="text-sm text-black font-medium line-clamp-2">{item.title}</p>
                <p className="text-xs">by <span className="text-primary">{item.brand}</span></p>
                <div className="flex space-x-2 items-center justify-between">
                  <div className="flex space-x-2 items-center">
                    <p className="text-sm text-primaryDark font-medium underline">${item.price}</p>
                    <p className="text-xs text-gray-500 font-medium line-through">${item.oldPrice}</p>
                  </div>
                  <button className="bg-primaryButton flex text-xs text-primaryDark p-2 rounded-sm font-medium hover:bg-primary hover:text-white"><ShoppingCart size={16} className="mr-1" />Add</button>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default DealsOfTheDay;
