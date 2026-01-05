import { ArrowDownWideNarrow, ChevronDown, ChevronLeft, ChevronRight, LayoutGrid, Search, X } from 'lucide-react';
import { useState } from 'react';
import BlogTags from '../../components/blog/BlogTags';
import CategoryBlog from '../../components/blog/CategoryBlog';
import Breadcrumb from '../../components/common/Breadcrumb';
import Header2 from '../../components/header/Header2';
import Navbar from '../../components/navbar/Navbar';
import { IMAGES } from '../../constants/images/image';
import { DataRecipsArticles, DataTrendingBlog } from '../../stores/data/blog';
import EmailSubscribe from '../../utils/EmailSubscribe';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedTag, setSelectedTag] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;

  const filteredArticles = DataRecipsArticles.filter((article) => {
    const matchCategory = selectedCategory === 'All' || article.category === selectedCategory;
    const matchTag = !selectedTag || article.tags?.includes(selectedTag);
    const matchSearch = !searchQuery || article.title.toLowerCase().includes(searchQuery.toLowerCase());

    return matchCategory && matchTag && matchSearch;
  });

  // Pagination logic
  const totalPages = Math.ceil(filteredArticles.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentArticles = filteredArticles.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const breadcrumbItems = [
    { label: 'Pages', link: '/pages' },
    { label: 'Blog', link: '/blog' },
  ];

  const tags = [
    { name: 'Shopping', color: 'text-primary' },
    { name: 'Recipes', color: 'text-black' },
    { name: 'Kitchen', color: 'text-black' },
    { name: 'News', color: 'text-primary' },
    { name: 'Food', color: 'text-primary' },
  ];

  // Reset to page 1 when filters change
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handleTagChange = (tag) => {
    setSelectedTag(tag);
    setCurrentPage(1);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  return (
    <div>
      <Header2 />
      <Navbar />

      <div className="px-4 md:px-12 lg:px-24 py-4 md:py-6">
        {/* Blog Header */}
        <div className="relative w-full h-48 md:h-64 rounded-2xl overflow-hidden shadow-lg mt-4">
          <img
            src={IMAGES.slide_blog}
            alt="Blog Slide"
            className="w-full h-full object-cover"
          />

          {/* Content */}
          <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-12 lg:px-16">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-quicksand font-bold text-gray-800 mb-2">
              Blog & News
            </h1>
            <Breadcrumb items={breadcrumbItems} />
          </div>

          {/* Tags */}
          <div className="absolute top-1/2 right-4 flex flex-wrap gap-2 max-w-xs md:max-w-md">
            {tags.map((tag, index) => (
              <span
                key={index}
                className={`flex items-center gap-1 ${tag.color} text-xs font-medium bg-white px-3 py-1.5 rounded-full cursor-pointer hover:bg-gray-100 transition-colors shadow-sm`}
              >
                <X size={12} className="text-gray-500" />
                {tag.name}
              </span>
            ))}
          </div>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-8 border-b pb-4 gap-4">
          <div className="flex items-center gap-3">
            <img src={IMAGES.icon_recips_articles} alt="Articles Icon" className="w-6 h-6 object-cover" />
            <p className="font-medium">
              Recips Articles
              <span className="text-gray-500 text-sm ml-2">({filteredArticles.length} articles)</span>
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <p className="flex text-xs text-gray-500 gap-2 p-2 rounded-lg shadow-lg cursor-pointer hover:bg-gray-100">
              <LayoutGrid size={14} />Show {itemsPerPage} <ChevronDown size={14} />
            </p>
            <p className="flex text-xs text-gray-500 gap-2 p-2 rounded-lg shadow-lg cursor-pointer hover:bg-gray-100">
              <ArrowDownWideNarrow size={14} />Sort: Featured <ChevronDown size={14} />
            </p>
            <div className="relative flex items-center gap-2 p-2 rounded-lg shadow-lg">
              <input
                placeholder="Search..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="focus:outline-none text-xs w-32"
              />
              <Search size={14} className="text-gray-500" />
            </div>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="flex flex-col lg:grid lg:grid-cols-4 gap-6 mt-6">
          {/* Articles */}
          <div className="col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {currentArticles.length > 0 ? (
                currentArticles.map((article) => (
                  <div key={article.id} className="flex flex-col gap-4 cursor-pointer hover:scale-105 transition-transform">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-48 object-cover rounded-lg shadow-md"
                    />
                    <div className="flex flex-col gap-2">
                      <span className="text-xs text-primary font-medium">{article.category}</span>
                      <h2 className="text-lg font-semibold hover:text-primary transition-colors line-clamp-2">
                        {article.title}
                      </h2>
                      <div className="flex items-center gap-4 text-xs text-gray-500">
                        <p>{article.date}</p>
                        <p>•</p>
                        <p>{article.views} views</p>
                        <p>•</p>
                        <p>{article.readTime}</p>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-3 text-center py-12 text-gray-500">
                  <p className="text-lg">No articles found</p>
                  <p className="text-sm">Try adjusting your filters</p>
                </div>
              )}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center gap-2 mt-8 mb-12">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-200 hover:bg-primary hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronLeft size={16} />
                </button>

                {[...Array(totalPages)].map((_, index) => {
                  const pageNumber = index + 1;

                  // Show first page, last page, current page, and pages around current
                  if (
                    pageNumber === 1 ||
                    pageNumber === totalPages ||
                    (pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1)
                  ) {
                    return (
                      <button
                        key={pageNumber}
                        onClick={() => handlePageChange(pageNumber)}
                        className={`w-6 h-6 rounded-full font-medium transition-colors ${currentPage === pageNumber
                          ? 'bg-primary text-white text-xs'
                          : 'bg-gray-200 hover:bg-gray-300 text-gray-700 text-xs'
                          }`}
                      >
                        {pageNumber}
                      </button>
                    );
                  } else if (
                    pageNumber === currentPage - 2 ||
                    pageNumber === currentPage + 2
                  ) {
                    return <span key={pageNumber} className="text-gray-500">...</span>;
                  }
                  return null;
                })}

                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-200 hover:bg-primary hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="col-span-1">
            <CategoryBlog
              selectedCategory={selectedCategory}
              onSelectCategory={handleCategoryChange}
            />
            <div className="shadow-md p-4 mt-4 rounded-lg h-fit border border-gray-200">
              <p className="text-lg font-bold font-quicksand">Trending Now</p>
              <span className="block h-0.5 w-10 bg-primary mt-2 mb-4"></span>
              {DataTrendingBlog.map(item => (
                <div key={item.id} className="flex mb-3 last:mb-0">
                  <img src={item.image} alt={item.alt} />
                  <div className="ml-4 flex flex-col justify-center gap-1">
                    <p className="font-medium text-primary text-sm">{item.title}</p>
                    <p className="text-xs text-gray-500">{item.price}</p>
                    <p className="text-xs">{item.rating}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="shadow-md p-4 mt-4 rounded-lg h-fit border border-gray-200">
              <p className="text-lg font-bold font-quicksand">Gallery</p>
              <span className="block h-0.5 w-10 bg-primary mt-2 mb-4"></span>
              <div className="grid grid-cols-3 gap-2">
                <img src={IMAGES.ca_rot} alt="Blog Gallery" className="w-full h-auto rounded-lg shadow-md" />
                <img src={IMAGES.ot_chuong} alt="Blog Gallery" className="w-full h-auto rounded-lg shadow-md" />
                <img src={IMAGES.ep_soai} alt="Blog Gallery" className="w-full h-auto rounded-lg shadow-md" />
                <img src={IMAGES.chuoi} alt="Blog Gallery" className="w-full h-auto rounded-lg shadow-md" />
                <img src={IMAGES.dua} alt="Blog Gallery" className="w-full h-auto rounded-lg shadow-md" />
                <img src={IMAGES.sau_rieng} alt="Blog Gallery" className="w-full h-auto rounded-lg shadow-md" />
              </div>
            </div>
            <BlogTags
              selectedTag={selectedTag}
              onSelectTag={handleTagChange}
            />
          </div>
        </div>
        {/* Form Email Footer */}
        <EmailSubscribe
          backgroundImage={IMAGES.form_email_footer}
          personImage={IMAGES.banner_13}
        />
      </div>
    </div>
  );
};

export default Blog;
