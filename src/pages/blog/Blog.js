import { ArrowDownWideNarrow, ChevronDown, LayoutGrid, X } from 'lucide-react';
import Breadcrumb from '../../components/common/Breadcrumb';
import Header2 from '../../components/header/Header2';
import Navbar from '../../components/navbar/Navbar';
import { IMAGES } from '../../constants/images/image';

const Blog = () => {
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

  return (
    <div>
      {/* Header */}
      <Header2 />

      {/* Navbar */}
      <Navbar />

      <div className="px-4 md:px-12 lg:px-24 py-4 md:py-6">
        {/* Blog Header with Background */}
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
          <div className="absolute top-1/2 right-24 flex flex-wrap gap-2 max-w-xs md:max-w-md">
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

        {/* Recips Articles */}
        <div className="flex justify-between items-center mt-8 border-b pb-4">
          <div className="flex items-center gap-3 mt-6">
            <img src={IMAGES.icon_recips_articles} alt="Blog Slide" className="w-6 h-1w-6 object-cover" />
            <p className="font-medium">Recips Articles</p>
          </div>
          <div className="flex items-center gap-4 mt-6">
            <p className="flex text-xs text-gray-500 gap-2 p-2 rounded-lg shadow-md cursor-pointer hover:bg-gray-100"><LayoutGrid size={14} />Show 50 <ChevronDown size={14} /></p>
            <p className="flex text-xs text-gray-500 gap-2 p-2 rounded-lg shadow-md cursor-pointer hover:bg-gray-100"><ArrowDownWideNarrow size={14} />Sort: Featured <ChevronDown size={14} /></p>
          </div>
        </div>
      </div>
    </div >
  );
};

export default Blog;
