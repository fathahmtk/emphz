
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Products } from './pages/Products';
import { Manufacturing } from './pages/Manufacturing';
import { MaterialEngineering } from './pages/MaterialEngineering';
import { HorizonPod } from './pages/HorizonPod';
import { Solutions } from './pages/Solutions';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { RoutePath } from './types';

// ScrollToTop component to handle route changes
const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-900">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path={RoutePath.HOME} element={<Home />} />
          <Route path={RoutePath.PRODUCTS} element={<Products />} />
          <Route path={RoutePath.PRODUCT_DETAIL} element={<Products />} />
          <Route path={RoutePath.ENGINEERING} element={<MaterialEngineering />} />
          <Route path={RoutePath.MANUFACTURING} element={<Manufacturing />} />
          <Route path={RoutePath.SOLUTIONS} element={<Solutions />} />
          <Route path={RoutePath.HORIZON} element={<HorizonPod />} />
          <Route path={RoutePath.ABOUT} element={<About />} />
          <Route path={RoutePath.CONTACT} element={<Contact />} />
          <Route path="*" element={<Navigate to={RoutePath.HOME} replace />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;