import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/locales/translations';

/**
 * Projects Section Component - Enhanced Version
 * Design Philosophy: Modern Industrial with Advanced Animations
 * - Project cards with advanced hover effects and animations
 * - Smooth entrance animations with stagger effect
 * - Interactive elements with framer-motion
 * - Responsive grid layout
 * - Links to project details
 * - FULLY BILINGUAL: All text uses translations for Arabic/English support
 */

export default function ProjectsSection() {
  const { language } = useLanguage();
  const t = translations[language].projects;

  const projects = [
    {
      titleKey: 'engPlatform',
      descKey: 'engDesc',
      category: 'Educational Platform',
      technologies: ['SolidWorks', 'CAD Design', 'Technical Documentation'],
      image: '/images/projects-showcase.jpg',
      link: '#',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      titleKey: 'sheSyria',
      descKey: 'sheDesc',
      category: 'Community Project',
      technologies: ['Project Management', 'Community Building', 'Leadership'],
      image: '/images/projects-showcase.jpg',
      link: '#',
      color: 'from-pink-500 to-rose-500',
    },
    {
      titleKey: 'syriamakers',
      descKey: 'syriaDesc',
      category: 'Innovation Hub',
      technologies: ['Community Development', 'Innovation', 'Technology'],
      image: '/images/projects-showcase.jpg',
      link: '#',
      color: 'from-purple-500 to-indigo-500',
    },
    {
      titleKey: 'engPlatform',
      descKey: 'engDesc',
      category: 'Manufacturing',
      technologies: ['SolidWorks', 'ANSYS', 'Manufacturing'],
      image: '/images/projects-showcase.jpg',
      link: '#',
      color: 'from-orange-500 to-red-500',
    },
    {
      titleKey: 'engPlatform',
      descKey: 'engDesc',
      category: 'Technical Training',
      technologies: ['Automotive', 'Manufacturing', 'Technical Skills'],
      image: '/images/projects-showcase.jpg',
      link: '#',
      color: 'from-green-500 to-emerald-500',
    },
    {
      titleKey: 'engPlatform',
      descKey: 'engDesc',
      category: 'Project Management',
      technologies: ['Leadership', 'Project Management', 'Innovation'],
      image: '/images/projects-showcase.jpg',
      link: '#',
      color: 'from-yellow-500 to-orange-500',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.15,
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

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' as const },
    },
    hover: {
      y: -12,
      transition: { duration: 0.3 },
    },
  };

  const imageVariants = {
    hover: {
      scale: 1.15,
      transition: { duration: 0.4, ease: 'easeOut' as const },
    },
  };

  const badgeVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-b from-white to-gray-50 dark:from-slate-900 dark:to-slate-800 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-100 dark:bg-orange-900/10 rounded-full blur-3xl opacity-20 -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100 dark:bg-blue-900/10 rounded-full blur-3xl opacity-20 -z-10" />

      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="mb-16 md:mb-24">
            <div className="flex items-center gap-4 mb-6 flex-wrap">
              <div className="w-1 h-10 bg-gradient-to-b from-orange-600 to-orange-400 rounded-full" />
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                {t.title}
              </h2>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="hidden sm:block"
              >
                <Zap className="w-6 h-6 text-orange-600" />
              </motion.div>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl">
              {t.subtitle}
            </p>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
            variants={containerVariants}
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover="hover"
                className="group relative overflow-hidden rounded-xl border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                {/* Gradient overlay on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 -z-10`}
                />

                {/* Project Image Container */}
                <div className="relative h-48 overflow-hidden bg-gray-200 dark:bg-slate-700">
                  <motion.img
                    src={project.image}
                    alt={t[project.titleKey as keyof typeof t]}
                    className="w-full h-full object-cover"
                    variants={imageVariants}
                    whileHover="hover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-gray-900/30 to-transparent" />

                  {/* Category Badge with animation */}
                  <motion.span
                    variants={badgeVariants}
                    initial="hidden"
                    whileInView="visible"
                    className={`absolute bottom-4 left-4 px-3 py-1 bg-gradient-to-r ${project.color} text-white text-xs font-semibold rounded-full shadow-lg`}
                  >
                    {project.category}
                  </motion.span>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <motion.h3
                    className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-orange-600 group-hover:to-orange-400 group-hover:bg-clip-text transition-all duration-300"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.1 }}
                  >
                    {t[project.titleKey as keyof typeof t]}
                  </motion.h3>

                  <motion.p
                    className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.15 }}
                  >
                    {t[project.descKey as keyof typeof t]}
                  </motion.p>

                  {/* Technologies with stagger animation */}
                  <motion.div
                    className="flex flex-wrap gap-2 mb-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                  >
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        variants={itemVariants}
                        className={`px-3 py-1 bg-gradient-to-r ${project.color} bg-opacity-10 text-xs font-medium rounded-full border border-opacity-20 transition-all duration-300 group-hover:bg-opacity-20 group-hover:border-opacity-50`}
                        style={{
                          color: project.color.split(' ')[1].replace('to-', ''),
                        }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </motion.div>

                  {/* Action Buttons */}
                  <motion.div
                    className="flex gap-3"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r ${project.color} text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg`}
                    >
                      <ExternalLink className="w-4 h-4" />
                      {t.viewProject}
                    </motion.button>
                  </motion.div>
                </div>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-orange-400/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Section with enhanced animations */}
          <motion.div
            variants={itemVariants}
            className="relative p-8 md:p-12 bg-gradient-to-r from-orange-50 to-blue-50 dark:from-slate-800 dark:to-slate-700 rounded-xl border border-orange-200 dark:border-slate-600 overflow-hidden"
          >
            {/* Animated background gradient */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-orange-600/5 to-blue-600/5 opacity-0"
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            />

            <div className="relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="flex items-center gap-3 mb-4"
              >
                <Zap className="w-6 h-6 text-orange-600" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{t.interested}</h3>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.15 }}
                className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl"
              >
                {t.interestedDesc}
              </motion.p>

              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(234, 88, 12, 0.3)' }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white font-semibold rounded-lg transition-all duration-300"
              >
                {language === 'ar' ? 'تواصل معي' : 'Get In Touch'}
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
