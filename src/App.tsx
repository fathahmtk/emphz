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
import PlaceholderPage from './pages/PlaceholderPage';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
      animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      exit={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: -10 }}
      transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
};

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:bg-white focus:px-4 focus:py-2 focus:rounded focus:shadow">Skip to main content</a>
      <div className="relative min-h-screen">
        <Navbar />
        <main id="main-content">
          <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
            <Route path="/products/:category" element={<PageWrapper><ProductPage /></PageWrapper>} />
            <Route path="/products" element={<PageWrapper><Home /></PageWrapper>} />
            <Route path="/about" element={<PageWrapper><PlaceholderPage title="About EMPHZ" description="Learn about EMPHZ's mission, engineering philosophy, and modular infrastructure capabilities." /></PageWrapper>} />
            <Route path="/solutions" element={<PageWrapper><PlaceholderPage title="Solutions" description="Explore integrated modular solutions designed for industrial, commercial, and public use cases." /></PageWrapper>} />
            <Route path="/experience" element={<PageWrapper><PlaceholderPage title="Experience Center" description="Discover our product demonstrations, deployment walkthroughs, and in-person consultation experience." /></PageWrapper>} />
            <Route path="/portfolio" element={<PageWrapper><PlaceholderPage title="Portfolio" description="Review EMPHZ project highlights across workspace pods, transit systems, and utility infrastructure." /></PageWrapper>} />
            <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
            <Route path="*" element={<PageWrapper><Home /></PageWrapper>} />
          </Routes>
        </AnimatePresence>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
