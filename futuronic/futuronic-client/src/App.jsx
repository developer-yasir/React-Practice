import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import TechnologiesPage from './pages/TechnologiesPage';
import ContactPage from './pages/ContactPage';
import ProductsPage from './pages/ProductsPage';
import ProcessPage from './pages/ProcessPage';
import ResultsPage from './pages/ResultsPage';
import PricingPage from './pages/PricingPage';
import { useSelector, useDispatch } from 'react-redux';
import { applyTheme } from './features/theme/themeSlice';
import { useEffect } from 'react';

// Component to handle scroll to top on route change
function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    // Scroll to top whenever the location (route) changes
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}

function App() {
  const themeMode = useSelector((state) => state.theme.mode);
  const dispatch = useDispatch();

  // Apply theme when component mounts and when theme changes
  useEffect(() => {
    applyTheme(themeMode);
  }, [themeMode]);

  return (
    <div className="min-h-screen transition-colors duration-500 bg-[var(--bg-color)] text-[var(--text-color)]">
      <div className="app">
        <Navbar />
        <ScrollToTop />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/technologies" element={<TechnologiesPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/process" element={<ProcessPage />} />
            <Route path="/results" element={<ResultsPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App