import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/locales/translations';

/**
 * Projects Section Component
 * Design Philosophy: Modern Industrial
 * - Project cards with hover effects
 * - Category filtering
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
    },
    {
      titleKey: 'sheSyria',
      descKey: 'sheDesc',
      category: 'Community Project',
      technologies: ['Project Management', 'Community Building', 'Leadership'],
      image: '/images/projects-showcase.jpg',
      link: '#',
    },
    {
      titleKey: 'syriamakers',
      descKey: 'syriaDesc',
      category: 'Innovation Hub',
      technologies: ['Community Development', 'Innovation', 'Technology'],
      image: '/images/projects-showcase.jpg',
      link: '#',
    },
    {
      titleKey: 'engPlatform',
      descKey: 'engDesc',
      category: 'Manufacturing',
      technologies: ['SolidWorks', 'ANSYS', 'Manufacturing'],
      image: '/images/projects-showcase.jpg',
      link: '#',
    },
    {
      titleKey: 'engPlatform',
      descKey: 'engDesc',
      category: 'Technical Training',
      technologies: ['Automotive', 'Manufacturing', 'Technical Skills'],
      image: '/images/projects-showcase.jpg',
      link: '#',
    },
    {
      titleKey: 'engPlatform',
      descKey: 'engDesc',
      category: 'Project Management',
      technologies: ['Leadership', 'Project Management', 'Innovation'],
      image: '/images/projects-showcase.jpg',
      link: '#',
    },
  ];

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' as const },
    },
  };

  return (
    <section className="relative py-20 md:py-32 bg-white dark:bg-slate-900">
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
            <div className="flex items-center gap-4 mb-6">
              <div className="w-1 h-10 bg-orange-600 rounded-full" />
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                {t.title}
              </h2>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl">
              {t.subtitle}
            </p>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group overflow-hidden rounded-lg border border-gray-200 dark:border-slate-700 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 bg-white dark:bg-slate-800"
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden bg-gray-200 dark:bg-slate-700">
                  <img
                    src={project.image}
                    alt={t[project.titleKey as keyof typeof t]}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
                  <span className="absolute bottom-4 left-4 px-3 py-1 bg-orange-600 text-white text-xs font-semibold rounded-full">
                    {project.category}
                  </span>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {t[project.titleKey as keyof typeof t]}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                    {t[project.descKey as keyof typeof t]}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-blue-50 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-xs font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Button
                      size="sm"
                      className="flex-1 bg-orange-600 hover:bg-orange-700 text-white"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      {t.viewProject}
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Section */}
          <motion.div
            variants={itemVariants}
            className="mt-16 text-center p-8 bg-gradient-to-r from-blue-50 dark:from-slate-800 to-gray-50 dark:to-slate-700 rounded-lg"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              {t.interested}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              {t.interestedDesc}
            </p>
            <Button
              size="lg"
              className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3"
            >
              {language === 'ar' ? 'تواصل معي' : 'Get In Touch'}
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
