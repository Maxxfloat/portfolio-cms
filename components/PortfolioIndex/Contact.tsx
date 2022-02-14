import Link from "next/link";
import { useRouter } from "next/router";
import React, { FC } from "react";
import { useForm } from "react-hook-form";
import ReactMarkdown from "react-markdown";

const Contact: FC<{ title: string; text: string }> = ({ title, text }) => {
  const { portfolioName } = useRouter().query;
  const { handleSubmit, register } = useForm();
  return (
    <div className="h-full space-x-4">
      <div className="flex flex-col justify-center h-full md:w-1/2">
        <ReactMarkdown className="text-4xl font-[yekanRe] my-6 mr-7 font-bold">
          {title}
        </ReactMarkdown>
        <ReactMarkdown
          className=" prose-a:text-blue-700 text-inherit prose-a:no-underline m-7 mb-20 text-xl  text-justify font-[sahel]"
          components={{
            a: ({ children, href }) => {
              if (href.includes("http"))
                return (
                  <a href={href} target="_blank" rel="noopener noreferrer">
                    {children}
                  </a>
                );
              return (
                <Link href={`/${portfolioName}/${href}`}>
                  <a>{children}</a>
                </Link>
              );
            },
          }}
        >
          {text}
        </ReactMarkdown>
        <form
          onSubmit={handleSubmit((data) => console.log(data))}
          className="mx-5 mb-5 space-y-4 flex font-[sahel] flex-col text-lg items-center"
        >
          <div className="flex w-full ">
            <input
              {...register("firstName")}
              placeholder={`نام`}
              className={`w-full py-3 ml-1 bg-slate-300 dark:bg-gray-600 px-4 outline-none placeholder:text-gray-400`}
            />
            <input
              {...register("email")}
              placeholder={`ایمیل`}
              className={`w-full py-3 mr-1 bg-slate-300 dark:bg-gray-600 px-4 outline-none placeholder:text-gray-400 placeholder:text-right`}
              type="email"
              dir="ltr"
            />
          </div>
          <input
            {...register("subject")}
            placeholder={`موضوع`}
            className={`w-full mx-1 py-3 bg-slate-300 dark:bg-gray-600 outline-none px-4 placeholder:text-gray-400 `}
          />

          <textarea
            {...register("message")}
            placeholder={`پیام`}
            className={`w-full mx-1 py-3 px-4 h-40 outline-none bg-slate-300 dark:bg-gray-600  placeholder:text-gray-400 `}
          />
          <button
            type="submit"
            className="border-black dark:border-gray-100 border-2 px-8 py-2"
          >
            ارسال
          </button>
        </form>
      </div>
      <div className="md:w-1/2"></div>
    </div>
  );
};

export default Contact;
