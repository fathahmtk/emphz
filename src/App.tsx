/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import React, { useEffect } from 'react';
import { Navbar, Footer } from './components/Layout';
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';
import Contact from './pages/Contact';
import { motion, AnimatePresence } from 'motion/react';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const PageWrapper = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration: 0.3 }}
  >
    {children}
  </motion.div>
);

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="relative min-h-screen">
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
            <Route path="/products/:category" element={<PageWrapper><ProductPage /></PageWrapper>} />
            <Route path="/products" element={<PageWrapper><Home /></PageWrapper>} />
            <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
            <Route path="*" element={<PageWrapper><Home /></PageWrapper>} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </div>
    </Router>
  );
}

