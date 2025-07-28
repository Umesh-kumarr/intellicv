import React, { createContext, useState, useContext, useEffect } from 'react';

const DarkModeContext = createContext();

export const useDarkMode = () => {
  const context = useContext(DarkModeContext);
  if (!context) {
    throw new Error('useDarkMode must be used within a DarkModeProvider');
  }
  return context;
};

export const DarkModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Check localStorage first, then system preference
    const saved = localStorage.getItem('darkMode');
    if (saved !== null) {
      const parsed = JSON.parse(saved);
      console.log('Dark mode from localStorage:', parsed);
      setDarkMode(parsed);
    } else {
      // Check system preference only after component mounts
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      console.log('System prefers dark mode:', prefersDark);
      setDarkMode(prefersDark);
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    console.log('Setting dark mode to:', darkMode);
    
    // Save to localStorage
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    
    // Apply dark mode class to document
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode, mounted]);

  const toggleDarkMode = () => {
    console.log('Toggling dark mode from:', darkMode, 'to:', !darkMode);
    setDarkMode(!darkMode);
  };

  const value = {
    darkMode,
    toggleDarkMode,
    setDarkMode,
    mounted
  };

  return (
    <DarkModeContext.Provider value={value}>
      {children}
    </DarkModeContext.Provider>
  );
}; 