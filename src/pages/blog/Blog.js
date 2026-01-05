import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BlogLayout from '../../components/blog/BlogLayout';
import { DataRecipsArticles } from '../../stores/data/blog';

const Blog = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;

  // Pagination logic
  const totalPages = Math.ceil(DataRecipsArticles.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentArticles = DataRecipsArticles.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleArticleClick = (articleId) => {
    navigate(`/blog/detail/${articleId}`);
  };

  const breadcrumbItems = [
    { label: 'Pages', link: '/pages' },
    { label: 'Blog', link: '/blog' },
  ];

  return (
    <BlogLayout
      title="Blog & News"
      breadcrumbItems={breadcrumbItems}
      showFilters={true}
      showSidebar={true}
    >
      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {currentArticles.length > 0 ? (
          currentArticles.map((article) => (
            <div
              key={article.id}
              className="flex flex-col gap-4 cursor-pointer hover:scale-105 transition-transform"
              onClick={() => handleArticleClick(article.id)}
            >
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
        <div className="flex items-center justify-center gap-2 mt-8 mb-12">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 hover:bg-primary hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft size={16} />
          </button>

          {[...Array(totalPages)].map((_, index) => {
            const pageNumber = index + 1;

            if (
              pageNumber === 1 ||
              pageNumber === totalPages ||
              (pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1)
            ) {
              return (
                <button
                  key={pageNumber}
                  onClick={() => handlePageChange(pageNumber)}
                  className={`w-10 h-10 rounded-full font-medium transition-colors ${currentPage === pageNumber
                    ? 'bg-primary text-white'
                    : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
                    }`}
                >
                  {pageNumber}
                </button>
              );
            } else if (pageNumber === currentPage - 2 || pageNumber === currentPage + 2) {
              return <span key={pageNumber} className="text-gray-500">...</span>;
            }
            return null;
          })}

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 hover:bg-primary hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      )}
    </BlogLayout>
  );
};

export default Blog;
