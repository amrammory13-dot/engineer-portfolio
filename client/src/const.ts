export { COOKIE_NAME, ONE_YEAR_MS } from "@shared/const";

// Generate login URL at runtime so redirect URI reflects the current origin.
export const getLoginUrl = () => {
  const oauthPortalUrl = import.meta.env.VITE_OAUTH_PORTAL_URL;
  const appId = import.meta.env.VITE_APP_ID;
  const redirectUri = `${window.location.origin}/api/oauth/callback`;
  const state = btoa(redirectUri);

  const url = new URL(`${oauthPortalUrl}/app-auth`);
  url.searchParams.set("appId", appId);
  url.searchParams.set("redirectUri", redirectUri);
  url.searchParams.set("state", state);
  url.searchParams.set("type", "signIn");

  return url.toString();
};

/**
 * Project Links and Resources Configuration
 * All 11 SolidWorks projects from Google Drive
 */

export const PROJECT_LINKS = {
  stairClimber: {
    title: 'Stair Climber Wheelchair',
    driveLink: 'https://drive.google.com/drive/folders/1I2WsU8eHcsWqFYVAc5HgD6uuFqaW8oRu',
    mainImage: 'https://drive.google.com/uc?export=view&id=1Wfyg8_uTFyDw54FdCys_aAGVu2-29Kxd',
  },
  millingMachine: {
    title: 'Industrial Milling Machine',
    driveLink: 'https://drive.google.com/drive/folders/1I2WsU8eHcsWqFYVAc5HgD6uuFqaW8oRu',
    mainImage: 'https://drive.google.com/uc?export=view&id=1Wfyg8_uTFyDw54FdCys_aAGVu2-29Kxd',
  },
  vmcProject: {
    title: 'VMC Project (IMTMA)',
    driveLink: 'https://drive.google.com/drive/folders/1I2WsU8eHcsWqFYVAc5HgD6uuFqaW8oRu',
    mainImage: 'https://drive.google.com/uc?export=view&id=1Wfyg8_uTFyDw54FdCys_aAGVu2-29Kxd',
  },
  drillingMachine: {
    title: 'Precision Drilling Machine',
    driveLink: 'https://drive.google.com/drive/folders/1I2WsU8eHcsWqFYVAc5HgD6uuFqaW8oRu',
    mainImage: 'https://drive.google.com/uc?export=view&id=1Wfyg8_uTFyDw54FdCys_aAGVu2-29Kxd',
  },
};

/**
 * All 11 SolidWorks Projects Data
 */
export const ALL_PROJECTS = [
  {
    id: '1',
    title: { en: 'Stair Climber Wheelchair - Design 1', ar: 'كرسي متحرك متسلق للدرج - تصميم 1' },
    category: 'CAD Design',
    image: 'https://drive.google.com/uc?export=view&id=1Wfyg8_uTFyDw54FdCys_aAGVu2-29Kxd',
    tags: ['SolidWorks', 'Mechanism', 'Robotics'],
    description: { en: 'Advanced planetary wheel system for stair climbing.', ar: 'نظام عجلات كوكبي متطور لتسلق الدرج.' }
  },
  {
    id: '2',
    title: { en: 'Stair Climber Wheelchair - Design 2', ar: 'كرسي متحرك متسلق للدرج - تصميم 2' },
    category: 'CAD Design',
    image: 'https://drive.google.com/uc?export=view&id=1Wfyg8_uTFyDw54FdCys_aAGVu2-29Kxd',
    tags: ['SolidWorks', 'Mechanism', 'Robotics'],
    description: { en: 'Alternative mechanism for stair climbing wheelchair.', ar: 'آلية بديلة للكرسي المتحرك المتسلق للدرج.' }
  },
  {
    id: '3',
    title: { en: 'Stair Climber Wheelchair - Design 3', ar: 'كرسي متحرك متسلق للدرج - تصميم 3' },
    category: 'CAD Design',
    image: 'https://drive.google.com/uc?export=view&id=1Wfyg8_uTFyDw54FdCys_aAGVu2-29Kxd',
    tags: ['SolidWorks', 'Mechanism', 'Robotics'],
    description: { en: 'Refined structural design for stair climbing mobility.', ar: 'تصميم إنشائي محسن للتنقل عبر الدرج.' }
  },
  {
    id: '4',
    title: { en: 'Stair Climber Wheelchair - Design 4', ar: 'كرسي متحرك متسلق للدرج - تصميم 4' },
    category: 'CAD Design',
    image: 'https://drive.google.com/uc?export=view&id=1Wfyg8_uTFyDw54FdCys_aAGVu2-29Kxd',
    tags: ['SolidWorks', 'Mechanism', 'Robotics'],
    description: { en: 'Optimized chassis for stair climbing wheelchair.', ar: 'هيكل محسن للكرسي المتحرك المتسلق للدرج.' }
  },
  {
    id: '5',
    title: { en: 'Mechanical Engine Assembly', ar: 'تجميع محرك ميكانيكي' },
    category: 'CAD Design',
    image: 'https://drive.google.com/uc?export=view&id=1Wfyg8_uTFyDw54FdCys_aAGVu2-29Kxd',
    tags: ['SolidWorks', 'Engine', 'Automotive'],
    description: { en: 'Detailed 3D assembly of a multi-cylinder engine.', ar: 'تجميع ثلاثي الأبعاد مفصل لمحرك متعدد الأسطوانات.' }
  },
  {
    id: '6',
    title: { en: 'Belt Drive System', ar: 'نظام نقل الحركة بالسيور' },
    category: 'CAD Design',
    image: 'https://drive.google.com/uc?export=view&id=1Wfyg8_uTFyDw54FdCys_aAGVu2-29Kxd',
    tags: ['SolidWorks', 'Power Transmission'],
    description: { en: 'Design and simulation of a mechanical belt drive.', ar: 'تصميم ومحاكاة نظام نقل حركة ميكانيكي.' }
  },
  {
    id: '7',
    title: { en: 'Precision Gearbox', ar: 'صندوق تروس دقيق' },
    category: 'CAD Design',
    image: 'https://drive.google.com/uc?export=view&id=1Wfyg8_uTFyDw54FdCys_aAGVu2-29Kxd',
    tags: ['SolidWorks', 'Gears', 'Transmission'],
    description: { en: 'High-torque gearbox design with optimized gear ratios.', ar: 'تصميم صندوق تروس عالي العزم مع نسب تروس محسنة.' }
  },
  {
    id: '8',
    title: { en: 'Hydraulic Press Component', ar: 'مكون مكبس هيدروليكي' },
    category: 'FEA Analysis',
    image: 'https://drive.google.com/uc?export=view&id=1Wfyg8_uTFyDw54FdCys_aAGVu2-29Kxd',
    tags: ['SolidWorks', 'FEA', 'Hydraulics'],
    description: { en: 'Stress analysis of hydraulic press structural parts.', ar: 'تحليل الإجهاد للأجزاء الإنشائية لمكبس هيدروليكي.' }
  },
  {
    id: '9',
    title: { en: 'Automotive Chassis Part', ar: 'جزء من هيكل سيارة' },
    category: 'CAD Design',
    image: 'https://drive.google.com/uc?export=view&id=1Wfyg8_uTFyDw54FdCys_aAGVu2-29Kxd',
    tags: ['SolidWorks', 'Automotive', 'Structural'],
    description: { en: 'Design of high-strength automotive chassis components.', ar: 'تصميم مكونات هيكل سيارة عالية المقاومة.' }
  },
  {
    id: '10',
    title: { en: 'Industrial Pump Housing', ar: 'غلاف مضخة صناعية' },
    category: 'CAD Design',
    image: 'https://drive.google.com/uc?export=view&id=1Wfyg8_uTFyDw54FdCys_aAGVu2-29Kxd',
    tags: ['SolidWorks', 'Fluids', 'Manufacturing'],
    description: { en: 'Complex housing design for high-pressure industrial pumps.', ar: 'تصميم غلاف معقد لمضخات صناعية عالية الضغط.' }
  },
  {
    id: '11',
    title: { en: 'Technical Drawing Set', ar: 'مجموعة رسومات تقنية' },
    category: 'Technical Documentation',
    image: 'https://drive.google.com/uc?export=view&id=1Wfyg8_uTFyDw54FdCys_aAGVu2-29Kxd',
    tags: ['AutoCAD', 'Standards', 'Documentation'],
    description: { en: 'Comprehensive set of manufacturing drawings.', ar: 'مجموعة شاملة من رسومات التصنيع.' }
  }
];

/**
 * CV Download Links
 */
export const CV_LINKS = {
  english: {
    pdf: 'https://drive.google.com/file/d/1Wfyg8_uTFyDw54FdCys_aAGVu2-29Kxd/view',
    download: 'https://drive.google.com/uc?export=download&id=1Wfyg8_uTFyDw54FdCys_aAGVu2-29Kxd',
  },
  arabic: {
    pdf: 'https://drive.google.com/file/d/1fzLYa_25cC9p5h-RLcywrliZMXk5oWAg/view',
    download: 'https://drive.google.com/uc?export=download&id=1fzLYa_25cC9p5h-RLcywrliZMXk5oWAg',
  },
};

/**
 * Social Media and Contact Links
 */
export const SOCIAL_LINKS = {
  linkedin: 'https://linkedin.com/in/amr-ammory',
  github: 'https://github.com/amr-ammory',
  email: 'amrammory13@gmail.com',
  whatsapp: 'https://wa.me/963934842344',
};

/**
 * Portfolio Statistics
 */
export const PORTFOLIO_STATS = {
  projectsCompleted: 50,
  clientsSatisfied: 30,
  yearsExperience: 5,
  awardWon: 6,
};
