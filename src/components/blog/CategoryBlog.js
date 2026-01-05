import { DataRecipsArticles } from '../../stores/data/blog';

const CategoryBlog = ({ selectedCategory, onSelectCategory }) => {
  const categoryMap = new Map();

  DataRecipsArticles.forEach(item => {
    if (!categoryMap.has(item.category)) {
      categoryMap.set(item.category, {
        category: item.category,
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

      <div
        className={`flex items-center justify-between mb-4 cursor-pointer border-gray-300 p-2 rounded-lg group hover:bg-primary hover:text-white transition-colors ${selectedCategory === 'All' ? 'bg-primary text-white' : ''}`}
        onClick={() => onSelectCategory('All')}
      >
        <p className="text-xs">All Articles</p>
        <p className={`text-xs px-3 rounded-full ${selectedCategory === 'All' ? 'bg-white text-primary' : 'bg-primary text-white'} group-hover:bg-white group-hover:text-primary transition-colors`}>
          {DataRecipsArticles.length}
        </p>
      </div>

      {categories.map((cat, index) => (
        <div
          key={index}
          className={`flex items-center justify-between mb-4 cursor-pointer border-gray-300 p-2 rounded-lg group hover:bg-primary hover:text-white transition-colors ${selectedCategory === cat.category ? 'bg-primary text-white' : ''}`}
          onClick={() => onSelectCategory(cat.category)}
        >
          <p className="text-xs">{cat.category}</p>
          <p className={`text-xs px-3 rounded-full ${selectedCategory === cat.category ? 'bg-white text-primary' : 'bg-primary text-white'} group-hover:bg-white group-hover:text-primary transition-colors`}>
            {cat.count}
          </p>
        </div>
      ))}
    </div>
  );
};

export default CategoryBlog;
