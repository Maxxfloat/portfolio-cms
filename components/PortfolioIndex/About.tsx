import React from "react";
import ReactMarkdown from "react-markdown";

interface Types {
  header: string;
  text: string;
}

const About: React.FC<Types> = ({ header, text }) => {
  return (
    <div className="h-full border-y-[1px] border-black dark:border-white">
      <div className="border-l-[1px] border-inherit lg:w-1/2 h-full relative pt-5 md:p-0">
        <div className="font-[yekanRe] text-4xl mr-2 md:text-6xl lg:mr-10 lg:text-6xl leading-10 xl:text-7xl font-bold">
          {header}
        </div>

        <div className="border-t-[1px] md:border-y-[1px] border-inherit bg-gray-100 dark:bg-[#1d1d1d] w-[100.1%] mt-6 lg:mt-8 flex justify-center md:block">
          <ReactMarkdown className="prose-p:text-justify mx-6 lg:mx-0 p-3 w-full text-lg whitespace-pre-line text-inherit h-full border-x-[1px] md:border-r-0 md:border-l-0 border-inherit  font-[yekanRe] font-bold leading-9">
            {text}
          </ReactMarkdown>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default About;
