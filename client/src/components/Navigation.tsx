import { motion } from 'framer-motion';
import { Menu, X, Moon, Sun, Globe } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useDarkMode } from '@/contexts/DarkModeContext';
import { useLanguage } from '@/contexts/LanguageContext';
import profilePhoto from '/images/profile-photo.jpg';

/**
 * Navigation Component
 * Design Philosophy: Modern Industrial
 * - Fixed navigation bar with logo
 * - Smooth scroll to sections
 * - Mobile responsive menu
 * - Hover effects on links
 * - Full mobile support with improved touch handling
 */

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const { language, toggleLanguage, t } = useLanguage();

  const navItems = [
    { label: t('nav.home'), href: '#home', id: 'home' },
    { label: t('nav.about'), href: '#about', id: 'about' },
    { label: t('nav.services'), href: '#services', id: 'services' },
    { label: t('nav.skills'), href: '#skills', id: 'skills' },
    { label: t('nav.projects'), href: '#projects', id: 'projects' },
    { label: t('nav.experience'), href: '#experience', id: 'experience' },
    { label: t('nav.contact'), href: '#contact', id: 'contact' },
  ];

  // Improved scroll handler with better error handling
  const handleScroll = (href: string) => {
    setIsOpen(false);
    
    // Remove # if present
    const targetId = href.replace('#', '');
    
    // Try to find element by ID
    let element = document.getElementById(targetId);
    
    // If not found, try querySelector
    if (!element) {
      element = document.querySelector(href);
    }
    
    if (element) {
      // Small delay to ensure menu closes before scrolling
      setTimeout(() => {
        element?.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }, 100);
    }
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const nav = document.querySelector('nav');
      if (nav && !nav.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [isOpen]);

  // Close mobile menu on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm border-b border-gray-200 dark:border-slate-700 shadow-sm transition-colors duration-300"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' as const }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.div
            className="flex items-center gap-2 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            onClick={() => handleScroll('#home')}
          >
            <img
              src={profilePhoto}
              alt="Amr Ammory"
              className="w-12 h-12 rounded-lg object-cover shadow-md"
            />
            <div className="hidden sm:block">
              <p className="text-sm font-bold text-gray-900 dark:text-white transition-colors duration-300">Amr Ammory</p>
              <p className="text-xs text-orange-600 dark:text-orange-400 font-semibold transition-colors duration-300">Mechanical Engineer</p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.button
                key={index}
                onClick={() => handleScroll(item.href)}
                className="text-gray-700 dark:text-gray-200 font-medium hover:text-orange-600 dark:hover:text-orange-400 transition-colors duration-300 relative group cursor-pointer"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-600 dark:bg-orange-400 group-hover:w-full transition-all duration-300" />
              </motion.button>
            ))}
          </div>

          {/* Language Toggle Desktop */}
          <motion.button
            onClick={toggleLanguage}
            className="hidden md:flex items-center justify-center p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300 gap-1 cursor-pointer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            title={language === 'en' ? 'Switch to Arabic' : 'التبديل إلى الإنجليزية'}
          >
            <Globe className="w-5 h-5 text-gray-700 dark:text-gray-200" />
            <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">
              {language === 'en' ? 'عربي' : 'EN'}
            </span>
          </motion.button>

          {/* Dark Mode Toggle Desktop */}
          <motion.button
            onClick={toggleDarkMode}
            className="hidden md:flex items-center justify-center p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300 cursor-pointer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {isDarkMode ? (
              <Sun className="w-5 h-5 text-yellow-500" />
            ) : (
              <Moon className="w-5 h-5 text-gray-700" />
            )}
          </motion.button>

          {/* CTA Button Desktop */}
          <motion.button
            onClick={() => handleScroll('#contact')}
            className="hidden md:block px-6 py-2 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg transition-all duration-300 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t('nav.contactMe')}
          </motion.button>

          {/* Language Toggle Mobile */}
          <motion.button
            onClick={toggleLanguage}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300 mr-2 cursor-pointer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            title={language === 'en' ? 'Switch to Arabic' : 'التبديل إلى الإنجليزية'}
          >
            <Globe className="w-5 h-5 text-gray-700 dark:text-gray-200" />
          </motion.button>

          {/* Dark Mode Toggle Mobile */}
          <motion.button
            onClick={toggleDarkMode}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300 mr-2 cursor-pointer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {isDarkMode ? (
              <Sun className="w-5 h-5 text-yellow-500" />
            ) : (
              <Moon className="w-5 h-5 text-gray-700" />
            )}
          </motion.button>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors duration-300 cursor-pointer"
            whileTap={{ scale: 0.95 }}
          >
            {isOpen ? (
              <X className="w-6 h-6 text-gray-900 dark:text-gray-50" />
            ) : (
              <Menu className="w-6 h-6 text-gray-900 dark:text-gray-50" />
            )}
          </motion.button>
        </div>

        {/* Mobile Navigation Menu */}
        <motion.div
          className="md:hidden overflow-hidden bg-white dark:bg-slate-900"
          initial={{ height: 0, opacity: 0 }}
          animate={{
            height: isOpen ? 'auto' : 0,
            opacity: isOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3, ease: 'easeInOut' as const }}
        >
          <div className="py-4 space-y-2 border-t border-gray-200 dark:border-slate-700 px-2">
            {navItems.map((item, index) => (
              <motion.button
                key={index}
                onClick={() => handleScroll(item.href)}
                className="block w-full text-left px-4 py-3 text-gray-700 dark:text-gray-200 hover:bg-orange-50 dark:hover:bg-slate-800 hover:text-orange-600 dark:hover:text-orange-400 rounded-lg transition-colors duration-300 font-medium cursor-pointer active:bg-orange-100 dark:active:bg-slate-700"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.05 }}
                whileTap={{ scale: 0.98 }}
              >
                {item.label}
              </motion.button>
            ))}
            <motion.button
              onClick={() => handleScroll('#contact')}
              className="block w-full px-4 py-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg transition-all duration-300 mt-4 cursor-pointer active:bg-orange-800"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: (navItems.length + 1) * 0.05 }}
              whileTap={{ scale: 0.98 }}
            >
              {t('nav.contactMe')}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
}
