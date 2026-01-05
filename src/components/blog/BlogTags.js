const BlogTags = ({ selectedTag, onSelectTag }) => {
  const tags = [
    { name: 'Shopping', color: 'bg-pink-100 text-pink-600' },
    { name: 'Recipes', color: 'bg-blue-100 text-blue-600' },
    { name: 'Kitchen', color: 'bg-purple-100 text-purple-600' },
    { name: 'News', color: 'bg-green-100 text-green-600' },
    { name: 'Food', color: 'bg-orange-100 text-orange-600' },
    { name: 'Healthy', color: 'bg-cyan-100 text-cyan-600' },
    { name: 'Organic', color: 'bg-lime-100 text-lime-600' },
  ];

  return (
    <div className="shadow-md p-4 rounded-lg border border-gray-200 mt-6">
      <p className="text-lg font-bold font-quicksand">Popular Tags</p>
      <span className="block h-0.5 w-10 bg-primary mt-2 mb-4"></span>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            onClick={() => onSelectTag(selectedTag === tag.name ? null : tag.name)}
            className={`${tag.color} text-xs font-medium px-3 py-1.5 rounded cursor-pointer hover:shadow-md transition-all ${selectedTag === tag.name ? 'ring-2 ring-primary shadow-lg' : ''
              }`}
          >
            {tag.name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default BlogTags;
