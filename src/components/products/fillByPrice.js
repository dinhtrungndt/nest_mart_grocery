import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { useState } from 'react';

const FillByPrice = () => {
  // State lưu giá trị từ $500 đến $1000
  const [priceRange, setPriceRange] = useState([500, 1000]);

  const handleSliderChange = (value) => {
    setPriceRange(value);
  };

  return (
    <div className="shadow-md p-6 rounded-2xl h-fit border border-gray-100 bg-white">
      <h3 className="text-xl font-bold text-slate-800 mb-1">Fill by price</h3>
      <div className="w-12 h-1 bg-green-200 mb-8 rounded-full"></div>

      {/* Thanh Slider */}
      <div className="px-2">
        <Slider
          range
          min={0}
          max={2000}
          defaultValue={[500, 1000]}
          onChange={handleSliderChange}
          trackStyle={[{ backgroundColor: '#3BB77E', height: 6 }]}
          handleStyle={[
            { borderColor: '#3BB77E', height: 18, width: 18, marginTop: -6, backgroundColor: '#3BB77E', opacity: 1 },
            { borderColor: '#3BB77E', height: 18, width: 18, marginTop: -6, backgroundColor: '#3BB77E', opacity: 1 },
          ]}
          railStyle={{ backgroundColor: '#eeeeee', height: 6 }}
        />
      </div>

      {/* Hiển thị giá trị */}
      <div className="flex justify-between mt-4 mb-6 text-sm font-medium">
        <span className="text-gray-500">From: <span className="text-green-500 font-bold">${priceRange[0]}</span></span>
        <span className="text-gray-500">To: <span className="text-green-500 font-bold">${priceRange[1]}</span></span>
      </div>

      {/* Phần Color Filter */}
      <div className="space-y-2 mb-6">
        <p className="font-bold text-gray-700 mb-3">Color</p>
        {['Red (56)', 'Green (78)', 'Blue (54)'].map(color => (
          <label key={color} className="flex items-center space-x-3 text-gray-600 cursor-pointer">
            <input type="checkbox" className="form-checkbox h-4 w-4 text-green-500 rounded border-gray-300" />
            <span>{color}</span>
          </label>
        ))}
      </div>

      {/* Phần Item Condition Filter */}
      <div className="space-y-2 mb-6">
        <p className="font-bold text-gray-700 mb-3">Item Condition</p>
        {['New (1506)', 'Refurbished (27)', 'Used (45)'].map(condition => (
          <label key={condition} className="flex items-center space-x-3 text-gray-600 cursor-pointer">
            <input type="checkbox" className="form-checkbox h-4 w-4 text-green-500 rounded border-gray-300" />
            <span>{condition}</span>
          </label>
        ))}
      </div>

      {/* Nút Filter */}
      <button className="w-full bg-[#3BB77E] text-white py-2 rounded-md font-bold flex items-center justify-center gap-2 hover:bg-green-600 transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
        </svg>
        Filter
      </button>
    </div>
  );
};

export default FillByPrice;
