import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Award, FileText, Users, CheckCircle, Briefcase, Shield } from 'lucide-react';
import { translations } from '@/locales/translations';

/**
 * Services & Certifications Section Component
 * Design Philosophy: Modern Industrial
 * - Showcases specialized services and verified certifications
 * - Professional cards with icons and achievements
 * - Emphasis on ATS optimization expertise and client success
 * - Responsive grid layout with hover effects
 * - FULLY BILINGUAL: All text uses useLanguage hook for Arabic/English support
 */

export default function ServicesAndCertificationsSection() {
  const { language } = useLanguage();
  const t = translations[language].services;

  const services = [
    {
      icon: FileText,
      titleKey: 'atsOptimized',
      descKey: 'atsDesc',
      statsKey: 'atsCount',
      achievementKey: 'atsAchievement',
      color: 'from-orange-50 to-orange-100',
      borderColor: 'border-orange-300',
      iconBg: 'bg-orange-600',
    },
    {
      icon: CheckCircle,
      titleKey: 'cvOptimization',
      descKey: 'cvDesc',
      statsKey: 'cvRate',
      achievementKey: 'cvValidation',
      color: 'from-blue-50 to-blue-100',
      borderColor: 'border-blue-300',
      iconBg: 'bg-blue-900',
    },
  ];

  const certifications = [
    {
      icon: Award,
      titleKey: 'pmpTitle',
      issuerKey: 'pmpIssuer',
      descKey: 'pmpDesc',
      verified: true,
    },
    {
      icon: Users,
      titleKey: 'hrmTitle',
      issuerKey: 'hrmIssuer',
      descKey: 'hrmDesc',
      verified: true,
    },
    {
      icon: Shield,
      titleKey: 'atsAuditor',
      issuerKey: 'atsAuditorIssuer',
      descKey: 'atsAuditorDesc',
      verified: true,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
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
          {/* Section Header */}
          <motion.div variants={itemVariants} className="mb-16 md:mb-24 text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-1 h-10 bg-orange-600 rounded-full" />
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                {t.title}
              </h2>
              <div className="w-1 h-10 bg-orange-600 rounded-full" />
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
              {t.subtitle}
            </p>
          </motion.div>

          {/* Services Cards */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20"
            variants={containerVariants}
          >
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                  className={`p-8 bg-gradient-to-br ${service.color} dark:from-slate-800 dark:to-slate-700 rounded-lg border-2 ${service.borderColor} dark:border-slate-600 transition-all duration-300`}
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`p-4 ${service.iconBg} rounded-lg flex-shrink-0`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        {t[service.titleKey as keyof typeof t]}
                      </h3>
                      <p className="text-sm font-semibold text-orange-600 dark:text-orange-400">
                        {t[service.statsKey as keyof typeof t]}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                    {t[service.descKey as keyof typeof t]}
                  </p>
                  <div className="pt-4 border-t-2 border-gray-300 dark:border-slate-600 border-opacity-50">
                    <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      {t[service.achievementKey as keyof typeof t]}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Certifications Section */}
          <motion.div variants={itemVariants} className="mb-16">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-4">
              <span className="w-1 h-8 bg-orange-600 rounded-full" />
              {t.certifications}
            </h3>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
              variants={containerVariants}
            >
              {certifications.map((cert, index) => {
                const Icon = cert.icon;
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ y: -6, boxShadow: '0 15px 35px rgba(0,0,0,0.08)' }}
                    className="p-6 bg-white dark:bg-slate-800 rounded-lg border-2 border-gray-200 dark:border-slate-700 hover:border-orange-400 dark:hover:border-orange-500 transition-all duration-300"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 bg-orange-100 dark:bg-orange-900 rounded-lg">
                        <Icon className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                      </div>
                      {cert.verified && (
                        <div className="ml-auto">
                          <span className="inline-flex items-center gap-1 px-3 py-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 text-xs font-bold rounded-full">
                            <CheckCircle className="w-3 h-3" />
                            {language === 'ar' ? 'معتمد' : 'Verified'}
                          </span>
                        </div>
                      )}
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                      {t[cert.titleKey as keyof typeof t]}
                    </h4>
                    <p className="text-sm text-orange-600 dark:text-orange-400 font-semibold mb-3">
                      {t[cert.issuerKey as keyof typeof t]}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      {t[cert.descKey as keyof typeof t]}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Key Highlights */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-r from-blue-900 to-blue-800 dark:from-blue-950 dark:to-blue-900 rounded-lg p-8 md:p-12 text-white"
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Briefcase className="w-7 h-7" />
              {t.whyChoose}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div whileHover={{ x: 5 }} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-md bg-orange-600">
                    <CheckCircle className="h-6 w-6" />
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">{t.compatible}</h4>
                  <p className="text-blue-100">
                    {t.compatibleDesc}
                  </p>
                </div>
              </motion.div>
              <motion.div whileHover={{ x: 5 }} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-md bg-orange-600">
                    <CheckCircle className="h-6 w-6" />
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">{t.stories}</h4>
                  <p className="text-blue-100">
                    {t.storiesDesc}
                  </p>
                </div>
              </motion.div>
              <motion.div whileHover={{ x: 5 }} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-md bg-orange-600">
                    <CheckCircle className="h-6 w-6" />
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">{t.expertise}</h4>
                  <p className="text-blue-100">
                    {t.expertiseDesc}
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
