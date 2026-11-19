'use client';

import React, { createContext, useContext } from 'react';
import { translations } from '@/lib/translations';

interface LanguageContextType {
  language: 'en';
  t: typeof translations.en;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <LanguageContext.Provider
      value={{
        language: 'en',
        t: translations.en,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

