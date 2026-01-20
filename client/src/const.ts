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
 * Add your Google Drive links and project resources here
 * Format: Replace '#' with actual Google Drive share links
 */

export const PROJECT_LINKS = {
  // Engineering Projects
  mechanicalEngineDesign: {
    title: 'Mechanical Engine Design',
    driveLink: 'https://drive.google.com/drive/folders/YOUR_FOLDER_ID_HERE',
    reportPDF: 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
    solidworksFile: 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
  },

  stressAnalysis: {
    title: 'Engineering Stress Analysis',
    driveLink: 'https://drive.google.com/drive/folders/YOUR_FOLDER_ID_HERE',
    ansysReport: 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
    simulationResults: 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
  },

  engineeringDrawings: {
    title: 'Precision Engineering Drawings',
    driveLink: 'https://drive.google.com/drive/folders/YOUR_FOLDER_ID_HERE',
    autocadFiles: 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
    technicalSpec: 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
  },

  precisionProductDesign: {
    title: 'Precision Product Design',
    driveLink: 'https://drive.google.com/drive/folders/YOUR_FOLDER_ID_HERE',
    designFiles: 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
    manufacturingGuide: 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
  },

  dynamicSimulation: {
    title: 'Dynamic Simulation',
    driveLink: 'https://drive.google.com/drive/folders/YOUR_FOLDER_ID_HERE',
    simulationVideo: 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
    analysisReport: 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
  },

  advanced3DDesign: {
    title: 'Advanced 3D Design',
    driveLink: 'https://drive.google.com/drive/folders/YOUR_FOLDER_ID_HERE',
    blenderProject: 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
    renderImages: 'https://drive.google.com/drive/folders/YOUR_FOLDER_ID_HERE',
  },

  // Educational Platform
  engPlatform: {
    title: 'ENG Educational Platform',
    projectLink: '#',
    driveLink: 'https://drive.google.com/drive/folders/YOUR_FOLDER_ID_HERE',
    documentation: 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
  },

  // Community Projects
  sheSyria: {
    title: 'SHE SYRIA Initiative',
    projectLink: '#',
    driveLink: 'https://drive.google.com/drive/folders/YOUR_FOLDER_ID_HERE',
    report: 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
  },

  syriamakers: {
    title: 'SYRIA MAKERS Community',
    projectLink: '#',
    driveLink: 'https://drive.google.com/drive/folders/YOUR_FOLDER_ID_HERE',
    portfolio: 'https://drive.google.com/drive/folders/YOUR_FOLDER_ID_HERE',
  },
};

/**
 * CV Download Links
 */
export const CV_LINKS = {
  english: {
    pdf: 'https://drive.google.com/file/d/YOUR_CV_EN_ID/view',
    download: 'https://drive.google.com/uc?export=download&id=YOUR_CV_EN_ID',
  },
  arabic: {
    pdf: 'https://drive.google.com/file/d/YOUR_CV_AR_ID/view',
    download: 'https://drive.google.com/uc?export=download&id=YOUR_CV_AR_ID',
  },
};

/**
 * Certification Links
 */
export const CERTIFICATION_LINKS = {
  solidworksCertified: 'https://drive.google.com/file/d/YOUR_CERT_ID/view',
  pmpCertification: 'https://drive.google.com/file/d/YOUR_CERT_ID/view',
  hrmCertifications: 'https://drive.google.com/drive/folders/YOUR_FOLDER_ID_HERE',
  atsCertification: 'https://drive.google.com/file/d/YOUR_CERT_ID/view',
  automotiveCertificate: 'https://drive.google.com/file/d/YOUR_CERT_ID/view',
};

/**
 * Social Media and Contact Links
 */
export const SOCIAL_LINKS = {
  linkedin: 'https://linkedin.com/in/YOUR_PROFILE',
  github: 'https://github.com/YOUR_USERNAME',
  email: 'your.email@example.com',
  whatsapp: 'https://wa.me/YOUR_PHONE_NUMBER',
  instagram: 'https://instagram.com/YOUR_USERNAME',
  youtube: 'https://youtube.com/@YOUR_CHANNEL',
};

/**
 * Portfolio Statistics
 */
export const PORTFOLIO_STATS = {
  projectsCompleted: 50,
  clientsSatisfied: 30,
  yearsExperience: 5,
  awardWon: 1,
};

/**
 * Instructions for updating links:
 * 
 * 1. Google Drive Folder Share:
 *    - Right-click folder → Share
 *    - Get shareable link
 *    - Replace YOUR_FOLDER_ID_HERE with the ID from the URL
 *    - URL format: https://drive.google.com/drive/folders/FOLDER_ID
 * 
 * 2. Google Drive File Share:
 *    - Right-click file → Share
 *    - Get shareable link
 *    - Replace YOUR_FILE_ID_HERE with the ID from the URL
 *    - URL format: https://drive.google.com/file/d/FILE_ID/view
 * 
 * 3. Download Link:
 *    - Use: https://drive.google.com/uc?export=download&id=FILE_ID
 *    - This allows direct download without opening the preview
 * 
 * 4. Social Media:
 *    - Update with your actual social media profile URLs
 *    - Email: your actual email address
 *    - WhatsApp: your phone number with country code
 */
