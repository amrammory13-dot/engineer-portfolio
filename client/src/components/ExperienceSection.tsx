import { motion } from 'framer-motion';
import { Award, Briefcase, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/locales/translations';

/**
 * Experience and Certifications Section Component
 * Design Philosophy: Modern Industrial
 * - Timeline-style experience layout
 * - Certification cards with icons
 * - Responsive grid layout
 * - Hover effects and animations
 * - FULLY BILINGUAL: All text uses translations for Arabic/English support
 */

export default function ExperienceSection() {
  const { language } = useLanguage();
  const t = translations[language].experience;

  const experiences = [
    {
      titleKey: 'precisionDesigner',
      companyKey: 'profiCar',
      descKey: 'precisionDesc',
      highlights: ['High-precision design', 'Quality improvement', 'Manufacturing excellence'],
    },
    {
      titleKey: 'automotive',
      companyKey: 'trainingProgram',
      descKey: 'automotiveDesc',
      highlights: ['Automotive maintenance', 'Aluminum fabrication', 'Industrial processes'],
    },
    {
      titleKey: 'visualContent',
      companyKey: 'digitalMarketing',
      descKey: 'visualDesc',
      highlights: ['Video production', 'Content management', 'Social media strategy'],
    },
    {
      titleKey: 'projectLeader',
      companyKey: 'multipleProjects',
      descKey: 'leaderDesc',
      highlights: ['Project leadership', 'Innovation', 'Team management'],
    },
  ];

  const certifications = [
    {
      titleKey: 'solidworks',
      issuerKey: 'engineers',
      icon: Award,
    },
    {
      titleKey: 'mentorship',
      issuerKey: 'pmi',
      icon: Briefcase,
    },
    {
      titleKey: 'english',
      issuerKey: 'proficiency',
      icon: CheckCircle,
    },
    {
      titleKey: 'business',
      issuerKey: 'scaleup',
      icon: Award,
    },
    {
      titleKey: 'advanced',
      issuerKey: 'development',
      icon: Briefcase,
    },
    {
      titleKey: 'automotive2',
      issuerKey: 'nrc',
      icon: CheckCircle,
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
    <section className="relative py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Experience Section */}
          <motion.div variants={itemVariants} className="mb-20">
            <div className="flex items-center gap-4 mb-12">
              <div className="w-1 h-10 bg-orange-600 rounded-full" />
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                {t.title}
              </h2>
            </div>

            {/* Experience Timeline */}
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative pl-8 border-l-2 border-orange-600 pb-8"
                >
                  {/* Timeline Dot */}
                  <div className="absolute -left-4 top-0 w-6 h-6 bg-orange-600 rounded-full border-4 border-white dark:border-slate-900" />

                  {/* Content */}
                  <div className="bg-white dark:bg-slate-800 p-6 rounded-lg border border-gray-200 dark:border-slate-700 hover:shadow-lg transition-shadow duration-300">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                      {t[exp.titleKey as keyof typeof t]}
                    </h3>
                    <p className="text-orange-600 dark:text-orange-400 font-semibold mb-3">
                      {t[exp.companyKey as keyof typeof t]}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {t[exp.descKey as keyof typeof t]}
                    </p>

                    {/* Highlights */}
                    <div className="flex flex-wrap gap-2">
                      {exp.highlights.map((highlight, hIndex) => (
                        <span
                          key={hIndex}
                          className="px-3 py-1 bg-blue-50 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-xs font-medium rounded-full"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications Section */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center gap-4 mb-12">
              <div className="w-1 h-10 bg-orange-600 rounded-full" />
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                {t.certifications}
              </h2>
            </div>

            {/* Certifications Grid */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={containerVariants}
            >
              {certifications.map((cert, index) => {
                const Icon = cert.icon;
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="p-6 bg-white dark:bg-slate-800 rounded-lg border border-gray-200 dark:border-slate-700 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-3 bg-orange-100 dark:bg-orange-900 rounded-lg">
                        <Icon className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-900 dark:text-white">
                          {t[cert.titleKey as keyof typeof t]}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                          {t[cert.issuerKey as keyof typeof t]}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Education Section */}
          <motion.div variants={itemVariants} className="mt-20 p-8 bg-blue-50 dark:bg-slate-800 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              {t.education}
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-semibold text-blue-900 dark:text-blue-300">
                  {t.mechanical}
                </h4>
                <p className="text-gray-700 dark:text-gray-300">{t.aleppo}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  {t.award}
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
