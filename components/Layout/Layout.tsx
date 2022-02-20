import ThemeToggleBtn from "components/ThemeToggleBtn";
import { useRouter } from "next/router";
import React, {
  useState,
  createContext,
  Dispatch,
  SetStateAction,
  FC,
} from "react";

interface ThemeContextType {
  darkMode: boolean;
  setDarkMode: Dispatch<SetStateAction<boolean>>;
}

export const Theme = createContext<ThemeContextType>({} as ThemeContextType);

const Layout: FC = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`${darkMode && "dark"} `}>
      <div className="dark:text-white bg-gray-100 dark:bg-[#1d1d1d]">
        <div>
          <ThemeToggleBtn {...{ darkMode, setDarkMode }} />
        </div>
        <Theme.Provider value={{ darkMode, setDarkMode }}>
          {children}
        </Theme.Provider>
      </div>
    </div>
  );
};

export default Layout;
