import React from "react";
import ReactMarkdown from "react-markdown";
import { motion } from "framer-motion";

interface Types {
  header: string;
  text: string;
}

const About: React.FC<Types> = ({ header, text }) => {
  return (
    <div className="min-h-full lg:h-full border-y-[1px] border-black dark:border-white lg:flex">
      <div className="border-l-[1px] border-inherit lg:w-1/2 lg:h-full relative pt-5 lg:p-0">
        <div className="font-[yekanRe] text-4xl mr-2 md:text-6xl lg:mr-10 lg:text-6xl leading-10 xl:text-7xl font-bold">
          {header}
        </div>

        <div
          id="followerBox"
          className="border-t-[1px] md:border-y-[1px] border-inherit z-10 bg-gray-100 dark:bg-[#1d1d1d] w-[100.1%] mt-6 lg:mt-8 flex justify-center lg:absolute"
        >
          <ReactMarkdown className="prose-p:text-justify mx-6 lg:mx-0 p-3 w-full text-lg whitespace-pre-line text-inherit h-full border-x-[1px] lg:border-r-0 lg:border-l-0 border-inherit  font-[yekanRe] font-bold leading-9">
            {text}
          </ReactMarkdown>
        </div>
      </div>
      <div className="lg:w-1/2"></div>
    </div>
  );
};

export default About;
