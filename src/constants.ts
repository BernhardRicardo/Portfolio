import Home from './pages/Home';

export const BASE_PATH = new URL(document.baseURI).pathname;
export const routes = [{ path: '/', Element: Home }];

export const mobileRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;

const headerHeight = 60;
const sidebarWidth = 300;
const footerHeight = 20;

export const sizes = {
  headerHeight,
  sidebarWidth,
  footerHeight,
};
