import { createContext, Dispatch, SetStateAction } from "react";

interface ContextType {
  darkMode: boolean;
  setDarkMode: Dispatch<SetStateAction<boolean>>;
  setSidebarOpen: Dispatch<SetStateAction<boolean>>;
  sidebarOpen: boolean;
  //   sidebarLinks: { linkTitle: string; link: string }[];
  //   setSidebarLinks: Dispatch<
  //     SetStateAction<{ linkTitle: string; link: string }[]>
  //   >;
}

export const ThemeContext = createContext<ContextType>({} as ContextType);
