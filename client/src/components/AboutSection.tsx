import { motion } from 'framer-motion';
import { Briefcase, Award, Code2, Users, Download } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

/**
 * About Section Component
 * Design Philosophy: Modern Industrial
 * - Clean layout with accent line on the left
 * - Professional description with key highlights
 * - Stat cards with icons and hover effects
 * - Responsive grid layout
 */

export default function AboutSection() {
  const { language, t } = useLanguage();
  const [downloadClicked, setDownloadClicked] = useState(false);
  const [downloadClickedAr, setDownloadClickedAr] = useState(false);

  const stats = [
    {
      icon: Code2,
      label: language === 'ar' ? 'المشاريع المنجزة' : 'Projects Completed',
      value: '50+',
      description: language === 'ar' ? t('about.stats.projects') : t('about.stats.projects'),
    },
    {
      icon: Award,
      label: language === 'ar' ? 'الشهادات' : 'Certifications',
      value: '6+',
      description: language === 'ar' ? t('about.stats.certifications') : t('about.stats.certifications'),
    },
    {
      icon: Briefcase,
      label: language === 'ar' ? 'سنوات الخبرة' : 'Years Experience',
      value: '5',
      description: language === 'ar' ? t('about.stats.experience') : t('about.stats.experience'),
    },
    {
      icon: Users,
      label: language === 'ar' ? 'قيادة الفريق' : 'Team Leadership',
      value: '100%',
      description: language === 'ar' ? t('about.stats.achievement') : t('about.stats.achievement'),
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' as const },
    },
  };

  return (
    <section className="relative py-20 md:py-32 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="mb-16 md:mb-24">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-1 h-10 bg-orange-600 rounded-full" />
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                {t('about.title')}
              </h2>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mb-6">
              {t('about.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mt-6">
              <motion.a
                href="/Amr_Ammory_CV.pdf"
                download="Amr_Ammory_CV.pdf"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setDownloadClicked(true)}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition-colors duration-300 shadow-md hover:shadow-lg cursor-pointer"
              >
                Download My CV - English
                <motion.div
                  animate={downloadClicked ? { y: [0, -5, 0] } : {}}
                  transition={{ duration: 0.6 }}
                  onAnimationComplete={() => setDownloadClicked(false)}
                >
                  <Download className="w-5 h-5" />
                </motion.div>
              </motion.a>
              <motion.a
                href="/Amr_Ammory_CV_Arabic.pdf"
                download="Amr_Ammory_CV_Arabic.pdf"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setDownloadClickedAr(true)}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition-colors duration-300 shadow-md hover:shadow-lg cursor-pointer"
              >
                Download My CV - Arabic
                <motion.div
                  animate={downloadClickedAr ? { y: [0, -5, 0] } : {}}
                  transition={{ duration: 0.6 }}
                  onAnimationComplete={() => setDownloadClickedAr(false)}
                >
                  <Download className="w-5 h-5" />
                </motion.div>
              </motion.a>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
            variants={containerVariants}
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="p-6 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-orange-600 rounded-lg">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-gray-900 dark:text-white">{stat.value}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">{stat.label}</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{stat.description}</p>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Key Highlights */}
          <motion.div variants={itemVariants} className="bg-blue-50 dark:bg-gray-800 rounded-lg p-8 md:p-12">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">{t('about.coreExpertise')}</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-blue-900 dark:text-blue-400 mb-3">{t('about.designSimulation')}</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  {t('about.designDesc')}
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-blue-900 dark:text-blue-400 mb-3">{t('about.manufacturingStandards')}</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  {t('about.manufacturingDesc')}
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-blue-900 dark:text-blue-400 mb-3">{t('about.projectManagement')}</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  {t('about.projectDesc')}
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
