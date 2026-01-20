import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  Wrench,
  BarChart3,
  FileText,
  Zap,
  Video,
  Users,
  Code2,
  Lightbulb,
  MessageSquare,
  TrendingUp,
  Target,
  Cpu,
} from 'lucide-react';

/**
 * Skills Section Component - Enhanced Version
 * Design Philosophy: Modern Industrial with Interactive Elements
 * - Skill categories with visual progress indicators and icons
 * - Hover effects on skill cards with animations
 * - Responsive grid layout with advanced styling
 * - Color-coded skill levels with gradient backgrounds
 * - Interactive skill cards with hover animations
 */

interface SkillItem {
  name: string;
  level: number;
  icon?: React.ReactNode;
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  color: string;
  skills: SkillItem[];
}

export default function SkillsSection() {
  const { t, language } = useLanguage();

  const skillCategories: SkillCategory[] = [
    {
      title: language === 'ar' ? t('skills.advancedDesign') : 'Advanced Engineering Design',
      icon: <Wrench className="w-6 h-6" />,
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'SolidWorks', level: 95 },
        { name: 'AutoCAD', level: 90 },
        { name: 'Blender 3D', level: 80 },
      ],
    },
    {
      title: language === 'ar' ? t('skills.engineeringAnalysis') : 'Engineering Analysis & Simulation',
      icon: <BarChart3 className="w-6 h-6" />,
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'ANSYS FEA', level: 92 },
        { name: language === 'ar' ? t('skills.stressAnalysis') : 'Stress Analysis', level: 90 },
        { name: language === 'ar' ? t('skills.mechanicalSystems') : 'Mechanical Systems', level: 88 },
      ],
    },
    {
      title: language === 'ar' ? t('skills.technicalDoc') : 'Technical Documentation',
      icon: <FileText className="w-6 h-6" />,
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: language === 'ar' ? t('skills.engineeringDrawings') : 'Engineering Drawings', level: 95 },
        { name: language === 'ar' ? t('skills.asmeStandards') : 'ASME Standards', level: 93 },
        { name: language === 'ar' ? t('skills.isoCompliance') : 'ISO Compliance', level: 93 },
      ],
    },
    {
      title: language === 'ar' ? t('skills.projectMgmt') : 'Project Management',
      icon: <Target className="w-6 h-6" />,
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: language === 'ar' ? t('skills.strategicPlanning') : 'Strategic Planning', level: 90 },
        { name: language === 'ar' ? t('skills.teamLeadership') : 'Team Leadership', level: 88 },
        { name: language === 'ar' ? t('skills.processOptimization') : 'Process Optimization', level: 92 },
      ],
    },
    {
      title: language === 'ar' ? t('skills.digitalContent') : 'Digital Content & Marketing',
      icon: <Video className="w-6 h-6" />,
      color: 'from-rose-500 to-orange-500',
      skills: [
        { name: language === 'ar' ? t('skills.videoEditing') : 'Video Editing', level: 85 },
        { name: language === 'ar' ? t('skills.graphicDesign') : 'Graphic Design', level: 82 },
        { name: language === 'ar' ? t('skills.socialMedia') : 'Social Media', level: 88 },
      ],
    },
    {
      title: language === 'ar' ? t('skills.professionalSkills') : 'Professional Skills',
      icon: <Users className="w-6 h-6" />,
      color: 'from-indigo-500 to-blue-500',
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

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, ease: 'easeOut' as const },
    },
    hover: {
      y: -8,
      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
      transition: { duration: 0.3 },
    },
  };

  const getSkillColor = (level: number) => {
    if (level >= 90) return 'from-orange-500 to-orange-600';
    if (level >= 80) return 'from-blue-500 to-blue-600';
    return 'from-gray-400 to-gray-500';
  };

  const getSkillBarBgColor = (level: number) => {
    if (level >= 90) return 'bg-orange-100 dark:bg-orange-900/30';
    if (level >= 80) return 'bg-blue-100 dark:bg-blue-900/30';
    return 'bg-gray-100 dark:bg-gray-700/30';
  };

  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-100 dark:bg-orange-900/10 rounded-full blur-3xl opacity-20 -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100 dark:bg-blue-900/10 rounded-full blur-3xl opacity-20 -z-10" />

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
            <div className="flex items-center justify-center gap-4 mb-6 flex-wrap">
              <div className="w-1 h-8 bg-gradient-to-b from-orange-600 to-orange-400 rounded-full" />
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                {t('skills.title')}
              </h2>
              <div className="w-1 h-8 bg-gradient-to-b from-orange-600 to-orange-400 rounded-full" />
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {t('skills.subtitle')}
            </p>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
            variants={containerVariants}
          >
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                variants={cardVariants}
                whileHover="hover"
                className="group relative p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden"
              >
                {/* Gradient background on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 -z-10`}
                />

                {/* Category Icon with gradient background */}
                <div className={`inline-flex p-3 bg-gradient-to-br ${category.color} rounded-lg mb-4 text-white`}>
                  {category.icon}
                </div>

                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-orange-600 group-hover:to-orange-400 group-hover:bg-clip-text transition-all duration-300">
                  {category.title}
                </h3>

                <div className="space-y-5">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: skillIndex * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                        <motion.span
                          className={`text-xs font-bold bg-gradient-to-r ${getSkillColor(skill.level)} bg-clip-text text-transparent`}
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ delay: skillIndex * 0.1 + 0.2 }}
                        >
                          {skill.level}%
                        </motion.span>
                      </div>
                      <div className={`w-full h-2.5 ${getSkillBarBgColor(skill.level)} rounded-full overflow-hidden`}>
                        <motion.div
                          className={`h-full bg-gradient-to-r ${getSkillColor(skill.level)} rounded-full`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 0.8, ease: 'easeOut' as const, delay: skillIndex * 0.1 }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Languages Section - Enhanced */}
          <motion.div
            variants={cardVariants}
            whileHover="hover"
            className="p-8 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-750 rounded-xl border border-blue-200 dark:border-gray-700 overflow-hidden relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-500 opacity-0 group-hover:opacity-5 transition-opacity duration-300" />

            <div className="flex items-center gap-3 mb-6">
              <MessageSquare className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{t('skills.languages')}</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  name: t('skills.arabic'),
                  level: t('skills.arabicLevel'),
                  icon: <Code2 className="w-5 h-5" />,
                },
                {
                  name: t('skills.english'),
                  level: t('skills.englishLevel'),
                  icon: <Lightbulb className="w-5 h-5" />,
                },
              ].map((lang, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="p-4 bg-white dark:bg-gray-800 rounded-lg border border-blue-100 dark:border-gray-700 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className="text-blue-600 dark:text-blue-400">{lang.icon}</div>
                    <h4 className="text-lg font-semibold text-blue-900 dark:text-blue-400">{lang.name}</h4>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">{lang.level}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills Statistics */}
          <motion.div
            variants={containerVariants}
            className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {[
              { label: 'Technical Skills', value: '6+', icon: <Cpu className="w-5 h-5" /> },
              { label: 'Proficiency Level', value: '90%+', icon: <TrendingUp className="w-5 h-5" /> },
              { label: 'Languages', value: '2', icon: <MessageSquare className="w-5 h-5" /> },
              { label: 'Certifications', value: '5+', icon: <Target className="w-5 h-5" /> },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 text-center hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-center mb-2 text-orange-600 dark:text-orange-400">{stat.icon}</div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                <div className="text-xs text-gray-600 dark:text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
