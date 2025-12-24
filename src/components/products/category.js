import { DataProducts } from '../../stores/data/products';

const Category = ({ selectedCategory, onSelectCategory }) => {
  const categoryMap = new Map();

  DataProducts.forEach(item => {
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

  return (
    <div className="shadow-md p-4 rounded-lg h-fit border border-gray-200">
      <p className="text-lg font-bold font-quicksand">Category</p>
      <span className="block h-0.5 w-10 bg-primary mt-2 mb-4"></span>
      {categories.map((cat, index) => (
        <div key={index} className="flex items-center justify-between mb-4 cursor-pointer border-gray-300 p-2 rounded-lg group hover:bg-primary hover:text-white transition-colors" onClick={() => onSelectCategory(cat.category)}>
          <div className="flex items-center">
            <img src={cat.imageCate} alt={cat.category} className="w-6" />
            <p className="ml-2 text-xs">{cat.category}</p>
          </div>
          <p className="bg-primary text-white text-xs px-3 rounded-full group-hover:bg-white group-hover:text-primary transition-colors">
            {cat.count}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Category;
