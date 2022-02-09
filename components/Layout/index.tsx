import { FC, useState, createContext } from "react";
import { ThemeContext } from "components/stateManager/context";
import SidebarItems from "./Sidebar";

const Layout: FC = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <ThemeContext.Provider
      value={{
        darkMode,
        setDarkMode,
        setSidebarOpen,
        sidebarOpen,
      }}
    >
      <div
        className={`${darkMode && "dark"} flex `}
        style={{ direction: "rtl" }}
      >
        <button
          className="fixed left-4 top-4 z-10 md:hidden"
          onClick={() => setSidebarOpen((state) => !state)}
        >
          button Toggle
        </button>
        <SidebarItems />
        <div className="min-h-screen w-full dark:bg-[#1d1d1d] bg-gray-100 relative z-0 transition-all duration-200 dark:text-gray-50 dark:border-gray-100">
          {children}
        </div>
      </div>
    </ThemeContext.Provider>
  );
};

export default Layout;
