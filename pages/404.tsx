import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div
      className="min-h-screen h-screen flex items-center text-right justify-center text-inherit"
      dir="rtl"
    >
      <div className="w-full md:w-1/3 lg:w-2/5 font-[yekanRe] m-5">
        <div className="text-2xl md:text-3xl lg:text-5xl ">
          صفحه مورد نظر یافت نشد
        </div>
        <Link href={"/"} passHref={true}>
          <button className="md:text-lg lg:text-2xl border-2 border-black dark:border-white px-4 py-2 m-5">
            بازگشت به صفحه اصلی
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
