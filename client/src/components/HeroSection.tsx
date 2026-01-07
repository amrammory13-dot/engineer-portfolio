import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { useDarkMode } from '@/contexts/DarkModeContext';

/**
 * Hero Section Component
 * Design Philosophy: Modern Industrial
 * - Deep blue gradient background with geometric patterns
 * - Large display typography with Playfair Display
 * - Smooth entrance animations
 * - Call-to-action buttons with hover effects
 */

export default function HeroSection() {
  const { language, t } = useLanguage();
  const { isDarkMode } = useDarkMode();
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      } as const,
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' as const },
    },
  };

  const scrollVariants = {
    animate: {
      y: [0, 10, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut' as const,
      },
    },
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-white">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(/images/hero-background.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className={`absolute inset-0 transition-colors duration-300 ${
          isDarkMode
            ? 'bg-gradient-to-r from-gray-900/85 via-gray-800/75 to-transparent'
            : 'bg-gradient-to-r from-gray-900/15 via-gray-800/10 to-transparent'
        }`} />
      </div>

      {/* Geometric Accent Lines */}
      <div className="absolute top-0 right-0 w-96 h-96 opacity-10">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <circle cx="100" cy="100" r="80" fill="none" stroke="white" strokeWidth="2" />
          <circle cx="100" cy="100" r="60" fill="none" stroke="white" strokeWidth="1" />
          <circle cx="100" cy="100" r="40" fill="none" stroke="white" strokeWidth="1" />
        </svg>
      </div>

      {/* Content Container */}
      <motion.div
        className="relative z-10 h-screen flex flex-col items-center justify-center px-4 md:px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Main Heading */}
        <motion.div variants={itemVariants} className="text-center mb-6 max-w-4xl">
          <h1 className="text-white text-5xl md:text-7xl font-bold mb-4 leading-tight drop-shadow-lg">
            {language === 'ar' ? 'عمرو عموري' : 'Amr Ammory'}
          </h1>
          <p className="text-orange-400 text-xl md:text-2xl font-semibold mb-2 drop-shadow-md">
            {t('hero.subtitle')}
          </p>
        </motion.div>

        {/* Subtitle */}
        <motion.div variants={itemVariants} className="text-center max-w-2xl mb-12">
          <p className="text-gray-100 text-lg md:text-xl leading-relaxed drop-shadow-md">
            {t('hero.description')}
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 mb-16"
        >
          <Button
            size="lg"
            className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 ease-out hover:shadow-lg hover:-translate-y-1"
          >
            {t('hero.viewWork')}
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-semibold transition-all duration-300 ease-out"
          >
            {t('hero.getInTouch')}
          </Button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          variants={itemVariants}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div variants={scrollVariants} animate="animate" className="flex justify-center">
            <ChevronDown className="w-8 h-8 text-orange-400 animate-bounce" />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white dark:from-slate-900 to-transparent z-5 transition-colors duration-300" />
    </section>
  );
}
