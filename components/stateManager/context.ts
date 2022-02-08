import { createContext, Dispatch, SetStateAction } from "react";

interface ContextType {
  darkMode: boolean;
  setDarkMode: Dispatch<SetStateAction<boolean>>;
  setSidebarOpen: Dispatch<SetStateAction<boolean>>;
}

export const ThemeContext = createContext<ContextType>({} as ContextType);
