import { FC, useState, createContext } from "react";
import { ThemeContext } from "components/stateManager/context";

const Layout: FC = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode, setSidebarOpen }}>
      <div
        className={`${darkMode && "dark"} flex `}
        style={{ direction: "rtl" }}
      >
        <button className="fixed left-4 top-4">button Toggle</button>
        <div
          className={`bg-gray-700  overflow-hidden  lg:w-36 flex-shrink-0 ${
            sidebarOpen ? "w-full" : "w-0"
          }`}
        >
          sidbar
        </div>
        <div className="min-h-screen w-full dark:bg-gray-900 bg-gray-100 relative z-0">
          {children}
        </div>
      </div>
    </ThemeContext.Provider>
  );
};

export default Layout;
