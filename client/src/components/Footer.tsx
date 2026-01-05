import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

/**
 * Footer Component
 * Design Philosophy: Modern Industrial
 * - Professional footer with contact info
 * - Social media links
 * - Copyright information
 * - Responsive layout
 * - FULLY BILINGUAL: All text uses translations for Arabic/English support
 */

export default function Footer() {
  const { t, language } = useLanguage();
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' as const },
    },
  };

  return (
    <footer className="bg-gray-900 text-white">
      <motion.div
        className="container mx-auto px-4 py-16 md:py-20"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
      >
        <div className="max-w-6xl mx-auto">
          {/* Footer Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* About Section */}
            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-bold mb-4">Amr Ammory</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {t('footer.bio')}
              </p>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-bold mb-4">{t('nav.home')}</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#about" className="text-gray-400 hover:text-orange-400 transition-colors duration-300">
                    {t('nav.about')}
                  </a>
                </li>
                <li>
                  <a href="#skills" className="text-gray-400 hover:text-orange-400 transition-colors duration-300">
                    {t('nav.skills')}
                  </a>
                </li>
                <li>
                  <a href="#projects" className="text-gray-400 hover:text-orange-400 transition-colors duration-300">
                    {t('nav.projects')}
                  </a>
                </li>
                <li>
                  <a href="#experience" className="text-gray-400 hover:text-orange-400 transition-colors duration-300">
                    {t('nav.experience')}
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-400 hover:text-orange-400 transition-colors duration-300">
                    {t('nav.contact')}
                  </a>
                </li>
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-bold mb-4">{t('contact.title')}</h3>
              <div className="space-y-3 text-sm">
                <a
                  href="mailto:amrammory13@gmail.com"
                  className="flex items-center gap-2 text-gray-400 hover:text-orange-400 transition-colors duration-300"
                >
                  <Mail className="w-4 h-4" />
                  amrammory13@gmail.com
                </a>
                <a
                  href="tel:+963983952896"
                  className="flex items-center gap-2 text-gray-400 hover:text-orange-400 transition-colors duration-300"
                >
                  <Phone className="w-4 h-4" />
                  +963 983 952 896
                </a>
                <div className="flex items-center gap-2 text-gray-400">
                  <MapPin className="w-4 h-4" />
                  Aleppo, Syria
                </div>
              </div>
            </motion.div>
          </div>

          {/* Divider */}
          <motion.div variants={itemVariants} className="border-t border-gray-800 py-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              {/* Copyright */}
              <p className="text-gray-400 text-sm">
                {t('footer.copyright')}
              </p>

              {/* Social Links */}
              <div className="flex items-center gap-4">
                <a
                  href="https://linkedin.com/in/amrammory"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-800 hover:bg-orange-600 rounded-lg transition-all duration-300"
                  title="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="mailto:amrammory13@gmail.com"
                  className="p-2 bg-gray-800 hover:bg-orange-600 rounded-lg transition-all duration-300"
                  title="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Design Credit */}
          <motion.div variants={itemVariants} className="text-center text-xs text-gray-500 pt-4">
            <p>{t('footer.designed')}</p>
          </motion.div>
        </div>
      </motion.div>
    </footer>
  );
}
