/**
 * Theme initialization script
 * This script runs before page render to prevent theme flashing
 */

export const themeInitScript = `
(function initTheme() {
  'use strict';
  
  const THEME_CONFIG = {
    SKIN: 'skinTheme',
    NAVIGATION: 'navigationTheme',
    HEADER: 'headerTheme'
  };
  
  const THEME_CLASSES = {
    SKIN: 'app-skin-dark',
    NAVIGATION: 'app-navigation-dark',
    HEADER: 'app-header-dark'
  };
  
  const DEFAULT_THEME = 'light';
  
  function getThemePreference(key) {
    try {
      return localStorage.getItem(key);
    } catch (error) {
      return null;
    }
  }
  
  function setThemePreference(key, value) {
    try {
      localStorage.setItem(key, value);
    } catch (error) {
      // Silent fail if localStorage is not available
    }
  }
  
  function applyTheme(preference, className, configKey) {
    const savedTheme = getThemePreference(configKey);
    
    if (savedTheme === 'dark') {
      document.documentElement.classList.add(className);
    } else {
      document.documentElement.classList.remove(className);
      
      // Set default if no preference exists
      if (!savedTheme) {
        setThemePreference(configKey, DEFAULT_THEME);
      }
    }
  }
  
  // Apply all theme preferences
  applyTheme(null, THEME_CLASSES.SKIN, THEME_CONFIG.SKIN);
  applyTheme(null, THEME_CLASSES.NAVIGATION, THEME_CONFIG.NAVIGATION);
  applyTheme(null, THEME_CLASSES.HEADER, THEME_CONFIG.HEADER);
})();
`;
