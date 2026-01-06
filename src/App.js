import { Route, Routes } from 'react-router-dom';
import BottomFooter from './components/footer/bottomFooter';
import Footer from './components/footer/footer';
import TopBarHeader from './components/topbar/topbar_header';
import AboutPage from './pages/about/AboutPage';
import Blog from './pages/blog/Blog';
import BlogDetail from './pages/blog/BlogDetail';
import Contact from './pages/contact/Contact';
import HomePage from './pages/home/HomePage';
import HomePage2 from './pages/home/HomePage2';
import ShopSnack from './pages/shop/ShopSnack';

function App() {
  return (
    <div className="app-container">
      <TopBarHeader />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home-2" element={<HomePage2 />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/shop-snack" element={<ShopSnack />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/detail/:id" element={<BlogDetail />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      <BottomFooter />
    </div>
  );
}

export default App;
