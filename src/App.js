import { Route, Routes } from 'react-router-dom';
import BottomFooter from './components/footer/bottomFooter';
import Footer from './components/footer/footer';
import Navbar from './components/navbar/Navbar';
import TopBar_Header from './components/topbar/topbar_header';
import AboutPage from './pages/about/AboutPage';
import HomePage from './pages/home/HomePage';

function App() {
  return (
    <div className="app-container">
      <TopBar_Header />
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>

      <Footer />
      <BottomFooter />
    </div>
  );
}

export default App;
