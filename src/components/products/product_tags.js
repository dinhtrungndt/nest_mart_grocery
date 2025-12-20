import { DataProducts } from '../../stores/data/products';

const Product_Tags = ({ selectedTag, onSelectTag }) => {
  const tagMap = new Map();

  DataProducts.forEach((p) => {
    p.tags?.forEach((tag) => {
      tagMap.set(tag, (tagMap.get(tag) || 0) + 1);
    });
  });

  const tags = [...tagMap.entries()];

  return (
    <div className="w-full shadow-md p-4 rounded-lg h-fit border border-gray-200 mt-12">
      <div className="flex justify-between items-center">
        <p className="text-lg font-bold font-quicksand">Product Tags</p>
        {selectedTag && (
          <button
            onClick={() => onSelectTag(null)}
            className="text-xs text-primary underline"
          >
            Clear
          </button>
        )}
      </div>

      <span className="block h-0.5 w-10 bg-primary mt-2 mb-4"></span>

      <div className="flex flex-wrap gap-2">
        {tags.map(([tag, count]) => (
          <button
            key={tag}
            onClick={() => onSelectTag(tag)}
            className={`text-xs px-3 py-1 rounded-full border transition
              ${selectedTag === tag
                ? 'bg-primary text-white border-primary'
                : 'hover:bg-primary hover:text-white'
              }`}
          >
            {tag} ({count})
          </button>
        ))}
      </div>
    </div>
  );
};

export default Product_Tags;
