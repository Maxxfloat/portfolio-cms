import React, { SetStateAction } from "react";
import { BsMoonFill, BsSunFill } from "react-icons/bs";
import { IoReorderThreeSharp } from "react-icons/io5";

const ThemeToggleBtn: React.FC<{
  darkMode: boolean;
  setDarkMode: React.Dispatch<SetStateAction<boolean>>;
}> = ({ darkMode, setDarkMode }) => {
  return (
    <div className="fixed top-5 left-5 z-10 md:left-10 md:top-10">
      <button
        className="border-2 p-1 md:p-2 border-black dark:border-gray-100 rounded-full flex relative box-content "
        onClick={() => setDarkMode((value) => !value)}
      >
        <div
          className={` absolute bg-gray-400 dark:bg-gray-300 text-lg md:text-2xl z-10 top-0 bottom-0 left-0 right-[50%] rounded-full transition-all duration-300 m-[1px] flex justify-center items-center`}
          style={
            darkMode
              ? {
                  left: "50%",
                  right: "0%",
                }
              : {}
          }
        >
          <IoReorderThreeSharp className="text-gray-300 dark:text-gray-600 " />
        </div>
        <BsSunFill className="text-yellow-600 ml-2 md:ml-4" />
        <BsMoonFill className="text-slate-300" />
      </button>
    </div>
  );
};

export default ThemeToggleBtn;
