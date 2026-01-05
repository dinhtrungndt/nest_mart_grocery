import { ArrowDownWideNarrow, ChevronDown, LayoutGrid, Search, X } from 'lucide-react';
import { useState } from 'react';
import { IMAGES } from '../../constants/images/image';
import { DataTrendingBlog } from '../../stores/data/blog';
import EmailSubscribe from '../../utils/EmailSubscribe';
import BlogTags from '../blog/BlogTags';
import CategoryBlog from '../blog/CategoryBlog';
import Breadcrumb from '../common/Breadcrumb';
import Header2 from '../header/Header2';
import Navbar from '../navbar/Navbar';

const BlogLayout = ({
  children,
  title = "Blog & News",
  breadcrumbItems,
  showFilters = true,
  showSidebar = true
}) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedTag, setSelectedTag] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const tags = [
    { name: 'Shopping', color: 'text-primary' },
    { name: 'Recipes', color: 'text-black' },
    { name: 'Kitchen', color: 'text-black' },
    { name: 'News', color: 'text-primary' },
    { name: 'Food', color: 'text-primary' },
  ];

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
              {title}
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
        {showFilters && (
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-8 border-b pb-4 gap-4">
            <div className="flex items-center gap-3">
              <img src={IMAGES.icon_recips_articles} alt="Articles Icon" className="w-6 h-6 object-cover" />
              <p className="font-medium">
                Recips Articles
                <span className="text-gray-500 text-sm ml-2">(50 articles)</span>
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <p className="flex text-xs text-gray-500 gap-2 p-2 rounded-lg shadow-lg cursor-pointer hover:bg-gray-100">
                <LayoutGrid size={14} />Show 15 <ChevronDown size={14} />
              </p>
              <p className="flex text-xs text-gray-500 gap-2 p-2 rounded-lg shadow-lg cursor-pointer hover:bg-gray-100">
                <ArrowDownWideNarrow size={14} />Sort: Featured <ChevronDown size={14} />
              </p>
              <div className="relative flex items-center gap-2 p-2 rounded-lg shadow-lg">
                <input
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="focus:outline-none text-xs w-32"
                />
                <Search size={14} className="text-gray-500" />
              </div>
            </div>
          </div>
        )}

        {/* Main Content */}
        <div className={`flex flex-col ${showSidebar ? 'lg:grid lg:grid-cols-4' : ''} gap-6 mt-6`}>
          {/* Main Content Area */}
          <div className={showSidebar ? 'col-span-3' : 'col-span-4'}>
            {children}
          </div>

          {/* Sidebar */}
          {showSidebar && (
            <div className="col-span-1">
              <CategoryBlog
                selectedCategory={selectedCategory}
                onSelectCategory={setSelectedCategory}
              />

              <div className="shadow-md p-4 mt-4 rounded-lg h-fit border border-gray-200">
                <p className="text-lg font-bold font-quicksand">Trending Now</p>
                <span className="block h-0.5 w-10 bg-primary mt-2 mb-4"></span>
                {DataTrendingBlog.map(item => (
                  <div key={item.id} className="flex mb-3 last:mb-0 cursor-pointer hover:opacity-80 transition-opacity">
                    <img src={item.image} alt={item.alt} className="w-16 h-16 object-cover rounded" />
                    <div className="ml-4 flex flex-col justify-center gap-1">
                      <p className="font-medium text-primary text-sm hover:text-primaryDark">{item.title}</p>
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
                  <img src={IMAGES.ca_rot} alt="Gallery" className="w-full h-auto rounded-lg shadow-md hover:scale-105 transition-transform cursor-pointer" />
                  <img src={IMAGES.ot_chuong} alt="Gallery" className="w-full h-auto rounded-lg shadow-md hover:scale-105 transition-transform cursor-pointer" />
                  <img src={IMAGES.ep_soai} alt="Gallery" className="w-full h-auto rounded-lg shadow-md hover:scale-105 transition-transform cursor-pointer" />
                  <img src={IMAGES.chuoi} alt="Gallery" className="w-full h-auto rounded-lg shadow-md hover:scale-105 transition-transform cursor-pointer" />
                  <img src={IMAGES.dua} alt="Gallery" className="w-full h-auto rounded-lg shadow-md hover:scale-105 transition-transform cursor-pointer" />
                  <img src={IMAGES.sau_rieng} alt="Gallery" className="w-full h-auto rounded-lg shadow-md hover:scale-105 transition-transform cursor-pointer" />
                </div>
              </div>

              <BlogTags
                selectedTag={selectedTag}
                onSelectTag={setSelectedTag}
              />
            </div>
          )}
        </div>

        {/* Email Subscribe */}
        <EmailSubscribe
          backgroundImage={IMAGES.form_email_footer}
          personImage={IMAGES.banner_13}
        />
      </div>
    </div>
  );
};

export default BlogLayout;
