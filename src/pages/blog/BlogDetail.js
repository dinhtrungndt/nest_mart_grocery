import { useParams } from 'react-router-dom';
import BlogLayout from '../../components/blog/BlogLayout';
import { DataRecipsArticles } from '../../stores/data/blog';

const BlogDetail = () => {
  const { id } = useParams();
  const article = DataRecipsArticles.find(a => a.id === parseInt(id));

  if (!article) {
    return <div>Article not found</div>;
  }

  const breadcrumbItems = [
    { label: 'Pages', link: '/pages' },
    { label: 'Blog', link: '/blog' },
    { label: article.title, link: `/blog/detail/${id}` },
  ];

  return (
    <BlogLayout
      title={article.title}
      breadcrumbItems={breadcrumbItems}
      showFilters={false}
      showSidebar={true}
    >
      {/* Article Detail Content */}
      <article className="prose max-w-none">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-96 object-cover rounded-lg shadow-lg mb-6"
        />

        <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
          <span className="text-primary font-medium">{article.category}</span>
          <span>•</span>
          <span>{article.date}</span>
          <span>•</span>
          <span>{article.views} views</span>
          <span>•</span>
          <span>{article.readTime}</span>
        </div>

        <h1 className="text-3xl font-bold font-quicksand mb-6">{article.title}</h1>

        <div className="text-gray-700 leading-relaxed space-y-4">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
            luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.
          </p>

          <p>
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
          </p>

          <blockquote className="border-l-4 border-primary pl-4 italic text-gray-600 my-6">
            "This is a sample quote from the article. It highlights important information."
          </blockquote>

          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
          </p>
        </div>
      </article>
    </BlogLayout>
  );
};

export default BlogDetail;
