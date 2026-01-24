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
 * Extracted from Google Drive folder: amr ammory website/projects
 */

export const PROJECT_LINKS = {
  // Engineering Projects
  stairClimber: {
    title: 'Stair Climber Wheelchair',
    driveLink: 'https://drive.google.com/drive/folders/1I2WsU8eHcsWqFYVAc5HgD6uuFqaW8oRu',
    mainImage: 'https://drive.google.com/uc?export=view&id=1Wfyg8_uTFyDw54FdCys_aAGVu2-29Kxd', // Placeholder for actual ID
    mechanismView: 'https://drive.google.com/uc?export=view&id=1fzLYa_25cC9p5h-RLcywrliZMXk5oWAg',
  },

  millingMachine: {
    title: 'Industrial Milling Machine',
    driveLink: 'https://drive.google.com/drive/folders/1I2WsU8eHcsWqFYVAc5HgD6uuFqaW8oRu',
    renderImage: 'https://drive.google.com/uc?export=view&id=1Wfyg8_uTFyDw54FdCys_aAGVu2-29Kxd',
  },

  vmcProject: {
    title: 'VMC Project (IMTMA)',
    driveLink: 'https://drive.google.com/drive/folders/1I2WsU8eHcsWqFYVAc5HgD6uuFqaW8oRu',
    analysisImage: 'https://drive.google.com/uc?export=view&id=1Wfyg8_uTFyDw54FdCys_aAGVu2-29Kxd',
  },

  drillingMachine: {
    title: 'Precision Drilling Machine',
    driveLink: 'https://drive.google.com/drive/folders/1I2WsU8eHcsWqFYVAc5HgD6uuFqaW8oRu',
    technicalDrawing: 'https://drive.google.com/uc?export=view&id=1Wfyg8_uTFyDw54FdCys_aAGVu2-29Kxd',
  },

  // Educational Platform
  engPlatform: {
    title: 'ENG Educational Platform',
    projectLink: '#',
    driveLink: 'https://drive.google.com/drive/folders/1I2WsU8eHcsWqFYVAc5HgD6uuFqaW8oRu',
  },

  // Community Projects
  sheSyria: {
    title: 'SHE SYRIA Initiative',
    projectLink: '#',
    driveLink: 'https://drive.google.com/drive/folders/1I2WsU8eHcsWqFYVAc5HgD6uuFqaW8oRu',
  },

  syriamakers: {
    title: 'SYRIA MAKERS Community',
    projectLink: '#',
    driveLink: 'https://drive.google.com/drive/folders/1I2WsU8eHcsWqFYVAc5HgD6uuFqaW8oRu',
  },
};

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
