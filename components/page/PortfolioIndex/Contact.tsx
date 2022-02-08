import React from "react";
import { useForm } from "react-hook-form";
const Contact = () => {
  const { handleSubmit, register } = useForm();
  return (
    <div className="">
      <div className="text-4xl font-[yekanRe] mb-10 mr-4 font-bold">
        حرفی، سخنی ...
      </div>
      <form
        onSubmit={handleSubmit((data) => console.log(data))}
        className="mx-5 space-y-4 flex font-[sahel] flex-col text-lg items-center md:w-1/2"
      >
        <div className="flex w-full ">
          <input
            {...register("firstName")}
            placeholder={`نام`}
            className={`w-full py-3 ml-1 bg-slate-300 px-4 outline-none placeholder:text-gray-400`}
          />
          <input
            {...register("email")}
            placeholder={`ایمیل`}
            className={`w-full py-3 mr-1 bg-slate-300 px-4 outline-none placeholder:text-gray-400 placeholder:text-right`}
            type="email"
            dir="ltr"
          />
        </div>
        <input
          {...register("subject")}
          placeholder={`موضوع`}
          className={`w-full mx-1 py-3 bg-slate-300 outline-none px-4 placeholder:text-gray-400 `}
        />

        <textarea
          {...register("message")}
          placeholder={`پیام`}
          className={`w-full mx-1 py-3 px-4 h-40 outline-none bg-slate-300 placeholder:text-gray-400 `}
        />
      </form>
    </div>
  );
};

export default Contact;
