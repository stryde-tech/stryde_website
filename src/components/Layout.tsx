import { AnimatePresence, motion } from 'framer-motion';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';

export default function Layout() {
  const location = useLocation();

  return (
    <div className="min-h-screen text-primary">
      <div className="page-glow" />
      <div className="noise-layer" />
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          initial={{ opacity: 0, y: 12 }}
          key={location.pathname}
          transition={{ duration: 0.28 }}
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>
      <Footer />
    </div>
  );
}
