import { useRouter } from "next/router";
import React from "react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";

interface Props {
  title?: string;
  text?: string;
}

const Headline: React.FC<Props> = (props) => {
  const { portfolioName } = useRouter().query;
  if (props)
    return (
      <div className="">
        <div className="flex flex-col justify-center font-[yekanRe] font-bold">
          <ReactMarkdown className="text-4xl md:text-6xl lg:text-6xl xl:text-7xl my-6 space-y-2">
            {props.title}
          </ReactMarkdown>
          <ReactMarkdown className="text-xl md:text-3xl lg:text-3xl xl:text-4xl mt-4 ">
            {props.text}
          </ReactMarkdown>
          {/* {props.headlineBtn && (
            <Link href={`/${portfolioName}/contact`}>
              <a className="border-2 font-[yekanRe]  border-black dark:border-gray-300 px-2 text-center mt-10 w-48 text-xl font-bold leading-loose ">
                تماس با من
              </a>
            </Link>
          )} */}
        </div>
      </div>
    );
  else null;
};

Headline.defaultProps = {
  title: "just for test headlineText",
  text: "just for test headlineSupport",
};
export default Headline;
