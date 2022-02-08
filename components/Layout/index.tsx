import { FC, useState, createContext } from "react";
import { ThemeContext } from "components/stateManager/context";
import SidebarItems from "./Sidebar";

const Layout: FC = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode, setSidebarOpen }}>
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
        <div
          className={`border-l-2 border-gray-400 bg-gray-100  overflow-hidden  lg:w-36 flex-shrink-0 ${
            sidebarOpen ? "w-full" : "w-0"
          }`}
        >
          <div className="w-full fixed">
            <SidebarItems />
          </div>
        </div>
        <div className="min-h-screen w-full dark:bg-gray-900 bg-gray-100 relative z-0 transition-all duration-200">
          {children}
        </div>
      </div>
    </ThemeContext.Provider>
  );
};

export default Layout;
