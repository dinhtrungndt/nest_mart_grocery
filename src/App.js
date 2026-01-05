import { Route, Routes } from 'react-router-dom';
import BottomFooter from './components/footer/bottomFooter';
import Footer from './components/footer/footer';
import TopBarHeader from './components/topbar/topbar_header';
import AboutPage from './pages/about/AboutPage';
import Blog from './pages/blog/Blog';
import Contact from './pages/contact/Contact';
import HomePage from './pages/home/HomePage';
import HomePage2 from './pages/home/HomePage2';

function App() {
  return (
    <div className="app-container">
      <TopBarHeader />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home-2" element={<HomePage2 />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      <BottomFooter />
    </div>
  );
}

export default App;
