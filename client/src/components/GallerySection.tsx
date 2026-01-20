import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { X, ChevronLeft, ChevronRight, Download, ExternalLink } from 'lucide-react';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/lib/styles.css';

/**
 * Gallery Section Component - Professional Engineering Portfolio Gallery
 * Design Philosophy: Modern, Interactive, and Professional
 * - Responsive grid layout for project images
 * - Lightbox functionality for detailed viewing
 * - Category filtering
 * - Smooth animations and transitions
 * - Support for project descriptions and links
 */

interface GalleryImage {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  thumbnail: string;
  projectLink?: string;
  driveLink?: string;
  tags: string[];
}

export default function GallerySection() {
  const { t, language } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  // Gallery data - can be extended with real project images
  const galleryImages: GalleryImage[] = [
    {
      id: '1',
      title: language === 'ar' ? 'تصميم محرك ميكانيكي' : 'Mechanical Engine Design',
      description:
        language === 'ar'
          ? 'تصميم محرك ميكانيكي متقدم باستخدام SolidWorks مع تحليل ANSYS للضغوط والتشوهات'
          : 'Advanced mechanical engine design using SolidWorks with ANSYS stress and deformation analysis',
      category: 'CAD Design',
      image: '/images/hero-bg.png',
      thumbnail: '/images/hero-bg.png',
      tags: ['SolidWorks', 'ANSYS', 'FEA', 'Mechanical Design'],
      driveLink: '#',
    },
    {
      id: '2',
      title: language === 'ar' ? 'تحليل الضغوط الهندسية' : 'Engineering Stress Analysis',
      description:
        language === 'ar'
          ? 'تحليل شامل للضغوط والتشوهات على مكونات ميكانيكية معقدة'
          : 'Comprehensive stress and deformation analysis on complex mechanical components',
      category: 'FEA Analysis',
      image: '/images/skills-bg.jpg',
      thumbnail: '/images/skills-bg.jpg',
      tags: ['ANSYS', 'FEA', 'Simulation', 'Analysis'],
      driveLink: '#',
    },
    {
      id: '3',
      title: language === 'ar' ? 'رسومات هندسية دقيقة' : 'Precision Engineering Drawings',
      description:
        language === 'ar'
          ? 'رسومات هندسية احترافية تتوافق مع معايير ASME و ISO'
          : 'Professional engineering drawings compliant with ASME and ISO standards',
      category: 'Technical Documentation',
      image: '/images/experience-timeline.jpg',
      thumbnail: '/images/experience-timeline.jpg',
      tags: ['AutoCAD', 'ASME', 'ISO', 'Technical Drawings'],
      driveLink: '#',
    },
    {
      id: '4',
      title: language === 'ar' ? 'تصميم المنتجات الدقيقة' : 'Precision Product Design',
      description:
        language === 'ar'
          ? 'تصميم منتجات دقيقة للصناعات المختلفة مع التركيز على الجودة والأداء'
          : 'Precision product design for various industries with focus on quality and performance',
      category: 'CAD Design',
      image: '/images/projects-showcase.jpg',
      thumbnail: '/images/projects-showcase.jpg',
      tags: ['Product Design', 'SolidWorks', 'Manufacturing', 'Quality'],
      driveLink: '#',
    },
    {
      id: '5',
      title: language === 'ar' ? 'محاكاة ديناميكية' : 'Dynamic Simulation',
      description:
        language === 'ar'
          ? 'محاكاة ديناميكية للأنظمة الميكانيكية المعقدة'
          : 'Dynamic simulation of complex mechanical systems',
      category: 'FEA Analysis',
      image: '/images/contact-bg.jpg',
      thumbnail: '/images/contact-bg.jpg',
      tags: ['ANSYS', 'Dynamics', 'Simulation', 'Mechanical Systems'],
      driveLink: '#',
    },
    {
      id: '6',
      title: language === 'ar' ? 'تصميم ثلاثي الأبعاد متقدم' : 'Advanced 3D Design',
      description:
        language === 'ar'
          ? 'نماذج ثلاثية الأبعاد متقدمة باستخدام Blender و SolidWorks'
          : 'Advanced 3D models using Blender and SolidWorks',
      category: 'CAD Design',
      image: '/images/hero-background.jpg',
      thumbnail: '/images/hero-background.jpg',
      tags: ['Blender', 'SolidWorks', '3D Modeling', 'Visualization'],
      driveLink: '#',
    },
  ];

  const categories = ['all', 'CAD Design', 'FEA Analysis', 'Technical Documentation'];

  const filteredImages =
    selectedCategory === 'all' ? galleryImages : galleryImages.filter((img) => img.category === selectedCategory);

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? filteredImages.length - 1 : prev - 1));
    setSelectedImage(filteredImages[currentImageIndex === 0 ? filteredImages.length - 1 : currentImageIndex - 1]);
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev === filteredImages.length - 1 ? 0 : prev + 1));
    setSelectedImage(filteredImages[currentImageIndex === filteredImages.length - 1 ? 0 : currentImageIndex + 1]);
  };

  const openImage = (image: GalleryImage, index: number) => {
    setSelectedImage(image);
    setCurrentImageIndex(index);
  };

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

  const imageCardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 },
    },
    hover: {
      y: -8,
      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)',
    },
  };

  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100 dark:bg-blue-900/10 rounded-full blur-3xl opacity-20 -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-100 dark:bg-orange-900/10 rounded-full blur-3xl opacity-20 -z-10" />

      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-7xl mx-auto"
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
                {language === 'ar' ? 'معرض الأعمال الهندسية' : 'Engineering Portfolio Gallery'}
              </h2>
              <div className="w-1 h-8 bg-gradient-to-b from-orange-600 to-orange-400 rounded-full" />
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {language === 'ar'
                ? 'استكشف مجموعة من مشاريعي الهندسية المتنوعة والتصاميم المتقدمة'
                : 'Explore a collection of my diverse engineering projects and advanced designs'}
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div variants={itemVariants} className="mb-12 flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => {
                  setSelectedCategory(category);
                  setCurrentImageIndex(0);
                }}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-orange-600 to-orange-500 text-white shadow-lg'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-orange-400'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category === 'all'
                  ? language === 'ar'
                    ? 'الكل'
                    : 'All'
                  : category}
              </motion.button>
            ))}
          </motion.div>

          {/* Gallery Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
            variants={containerVariants}
          >
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                variants={imageCardVariants}
                whileHover="hover"
                onClick={() => openImage(image, index)}
                className="group relative cursor-pointer rounded-xl overflow-hidden bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
              >
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden bg-gray-200 dark:bg-gray-700">
                  <Zoom>
                    <img
                      src={image.thumbnail}
                      alt={image.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </Zoom>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Category Badge */}
                  <div className="absolute top-4 right-4 px-3 py-1 bg-orange-600 text-white text-xs font-semibold rounded-full">
                    {image.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-orange-600 transition-colors">
                    {image.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">{image.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {image.tags.slice(0, 2).map((tag, idx) => (
                      <span key={idx} className="text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                    {image.tags.length > 2 && (
                      <span className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded">
                        +{image.tags.length - 2}
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="flex-1 py-2 bg-orange-600 hover:bg-orange-700 text-white text-sm font-medium rounded-lg transition-colors">
                      {language === 'ar' ? 'عرض التفاصيل' : 'View Details'}
                    </button>
                    {image.driveLink && (
                      <button className="p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
                        <Download className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Empty State */}
          {filteredImages.length === 0 && (
            <motion.div variants={itemVariants} className="text-center py-12">
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                {language === 'ar' ? 'لا توجد صور في هذه الفئة' : 'No images in this category'}
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full max-h-[90vh] bg-black rounded-xl overflow-hidden"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Image */}
              <div className="relative h-full flex items-center justify-center">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="max-w-full max-h-full object-contain"
                />
              </div>

              {/* Navigation Buttons */}
              <button
                onClick={handlePrevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={handleNextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Image Info */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6"
              >
                <h3 className="text-2xl font-bold text-white mb-2">{selectedImage.title}</h3>
                <p className="text-gray-300 mb-4">{selectedImage.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {selectedImage.tags.map((tag, idx) => (
                    <span key={idx} className="text-xs bg-orange-600 text-white px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  {selectedImage.driveLink && (
                    <motion.a
                      href={selectedImage.driveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                    >
                      <Download className="w-4 h-4" />
                      {language === 'ar' ? 'تحميل' : 'Download'}
                    </motion.a>
                  )}
                  {selectedImage.projectLink && (
                    <motion.a
                      href={selectedImage.projectLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-lg transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      {language === 'ar' ? 'عرض المشروع' : 'View Project'}
                    </motion.a>
                  )}
                </div>
              </motion.div>

              {/* Image Counter */}
              <div className="absolute top-4 left-4 px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-full text-sm font-medium">
                {currentImageIndex + 1} / {filteredImages.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
