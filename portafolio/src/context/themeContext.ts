import { createContext } from 'react';

type Theme = 'light' | 'dark';

export interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

export type { Theme };
export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);