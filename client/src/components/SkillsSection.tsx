import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

/**
 * Skills Section Component
 * Design Philosophy: Modern Industrial
 * - Skill categories with visual progress indicators
 * - Hover effects on skill cards
 * - Responsive grid layout
 * - Color-coded skill levels
 */

export default function SkillsSection() {
  const { t, language } = useLanguage();
  const skillCategories = [
    {
      title: language === 'ar' ? t('skills.advancedDesign') : 'Advanced Engineering Design',
      skills: [
        { name: 'SolidWorks', level: 95 },
        { name: 'AutoCAD', level: 90 },
        { name: 'Blender 3D', level: 80 },
      ],
    },
    {
      title: language === 'ar' ? t('skills.engineeringAnalysis') : 'Engineering Analysis & Simulation',
      skills: [
        { name: 'ANSYS FEA', level: 92 },
        { name: language === 'ar' ? t('skills.stressAnalysis') : 'Stress Analysis', level: 90 },
        { name: language === 'ar' ? t('skills.mechanicalSystems') : 'Mechanical Systems', level: 88 },
      ],
    },
    {
      title: language === 'ar' ? t('skills.technicalDoc') : 'Technical Documentation',
      skills: [
        { name: language === 'ar' ? t('skills.engineeringDrawings') : 'Engineering Drawings', level: 95 },
        { name: language === 'ar' ? t('skills.asmeStandards') : 'ASME Standards', level: 93 },
        { name: language === 'ar' ? t('skills.isoCompliance') : 'ISO Compliance', level: 93 },
      ],
    },
    {
      title: language === 'ar' ? t('skills.projectMgmt') : 'Project Management',
      skills: [
        { name: language === 'ar' ? t('skills.strategicPlanning') : 'Strategic Planning', level: 90 },
        { name: language === 'ar' ? t('skills.teamLeadership') : 'Team Leadership', level: 88 },
        { name: language === 'ar' ? t('skills.processOptimization') : 'Process Optimization', level: 92 },
      ],
    },
    {
      title: language === 'ar' ? t('skills.digitalContent') : 'Digital Content & Marketing',
      skills: [
        { name: language === 'ar' ? t('skills.videoEditing') : 'Video Editing', level: 85 },
        { name: language === 'ar' ? t('skills.graphicDesign') : 'Graphic Design', level: 82 },
        { name: language === 'ar' ? t('skills.socialMedia') : 'Social Media', level: 88 },
      ],
    },
    {
      title: language === 'ar' ? t('skills.professionalSkills') : 'Professional Skills',
      skills: [
        { name: language === 'ar' ? t('skills.problemSolving') : 'Problem Solving', level: 95 },
        { name: language === 'ar' ? t('skills.criticalThinking') : 'Critical Thinking', level: 92 },
        { name: language === 'ar' ? t('skills.communication') : 'Communication', level: 90 },
      ],
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' as const },
    },
  };

  const getSkillColor = (level: number) => {
    if (level >= 90) return 'from-orange-500 to-orange-600';
    if (level >= 80) return 'from-blue-500 to-blue-600';
    return 'from-gray-400 to-gray-500';
  };

  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="mb-16 text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-1 h-8 bg-orange-600 rounded-full" />
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                {t('skills.title')}
              </h2>
              <div className="w-1 h-8 bg-orange-600 rounded-full" />
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {t('skills.subtitle')}
            </p>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
          >
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                variants={itemVariants}
                className="p-6 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">{category.title}</h3>
                <div className="space-y-5">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                        <span className="text-xs font-bold text-orange-600 dark:text-orange-400">{skill.level}%</span>
                      </div>
                      <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <motion.div
                          className={`h-full bg-gradient-to-r ${getSkillColor(skill.level)} rounded-full`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 0.8, ease: 'easeOut' as const }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Languages Section */}
          <motion.div variants={itemVariants} className="mt-16 p-8 bg-blue-50 dark:bg-gray-800 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">{t('skills.languages')}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-blue-900 dark:text-blue-400 mb-2">{t('skills.arabic')}</h4>
                <p className="text-gray-700 dark:text-gray-300">{t('skills.arabicLevel')}</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-blue-900 dark:text-blue-400 mb-2">{t('skills.english')}</h4>
                <p className="text-gray-700 dark:text-gray-300">{t('skills.englishLevel')}</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
