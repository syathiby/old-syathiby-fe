import React, { useEffect } from 'react';

const ThemeDetector = () => {
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const updateTheme = (event) => {
      console.log('Theme:', event.matches ? 'dark' : 'light');
    };

    updateTheme(mediaQuery); // Initial check

    mediaQuery.addEventListener('change', updateTheme);
    return () => {
      mediaQuery.removeEventListener('change', updateTheme);
    };
  }, []);

  return null;
};

export default ThemeDetector;
