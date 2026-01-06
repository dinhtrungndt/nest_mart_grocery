import { DataShopSnack } from '../../stores/data/shop';

const CategoryShop = ({ selectedCategory, onSelectCategory }) => {
  const categoryMap = new Map();

  DataShopSnack.forEach(item => {
    if (!categoryMap.has(item.category)) {
      categoryMap.set(item.category, {
        category: item.category,
        imageCate: item.imageCate,
        count: 1,
      });
    } else {
      categoryMap.get(item.category).count++;
    }
  });

  const categories = [...categoryMap.values()];

  const handleCategoryClick = (category) => {
    if (selectedCategory === category) {
      onSelectCategory('All');
    } else {
      onSelectCategory(category);
    }
  };

  return (
    <div className="shadow-md p-4 rounded-lg h-fit border border-gray-200">
      <p className="text-lg font-bold font-quicksand">Category</p>
      <span className="block h-0.5 w-10 bg-primary mt-2 mb-4"></span>

      {/* All Categories Option */}
      <div
        className={`flex items-center justify-between mb-4 cursor-pointer border-gray-300 p-2 rounded-lg group hover:bg-primary hover:text-white transition-colors ${selectedCategory === 'All' ? 'bg-primary text-white' : ''
          }`}
        onClick={() => onSelectCategory('All')}
      >
        <div className="flex items-center">
          <p className="ml-2 text-xs">All Products</p>
        </div>
        <p className={`text-xs px-3 rounded-full transition-colors ${selectedCategory === 'All'
          ? 'bg-white text-primary'
          : 'bg-primary text-white group-hover:bg-white group-hover:text-primary'
          }`}>
          {DataShopSnack.length}
        </p>
      </div>

      {/* Category List */}
      {categories.map((cat, index) => (
        <div
          key={index}
          className={`flex items-center justify-between mb-4 cursor-pointer border-gray-300 p-2 rounded-lg group hover:bg-primary hover:text-white transition-colors ${selectedCategory === cat.category ? 'bg-primary text-white' : ''
            }`}
          onClick={() => handleCategoryClick(cat.category)}
        >
          <div className="flex items-center">
            <img src={cat.imageCate} alt={cat.category} className="w-6" />
            <p className="ml-2 text-xs">{cat.category}</p>
          </div>
          <p className={`text-xs px-3 rounded-full transition-colors ${selectedCategory === cat.category
            ? 'bg-white text-primary'
            : 'bg-primary text-white group-hover:bg-white group-hover:text-primary'
            }`}>
            {cat.count}
          </p>
        </div>
      ))}
    </div>
  );
};

export default CategoryShop;
