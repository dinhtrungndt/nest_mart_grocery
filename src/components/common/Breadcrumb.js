import { ChevronRight, Home } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Breadcrumb = ({ items }) => {
  const location = useLocation();

  return (
    <div className="flex items-center text-sm font-quicksand py-4 px-4 md:px-12 lg:px-24 border-b border-gray-100">
      <Link to="/" className="flex items-center text-primary font-bold hover:text-primaryDark transition-colors">
        <Home size={16} className="mr-1" />
        Home
      </Link>
      {items.map((item, index) => {
        const isActive = location.pathname === item.link;
        return (
          <div key={index} className="flex items-center">
            <ChevronRight size={14} className="mx-2 text-gray-400" />
            {item.link ? (
              <Link
                to={item.link}
                className={`${isActive ? 'text-primary font-bold' : 'text-gray-500'} hover:text-primary transition-colors`}
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-gray-500">{item.label}</span>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Breadcrumb;
