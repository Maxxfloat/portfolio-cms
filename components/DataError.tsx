import Link from "next/link";
import React from "react";

const DataError = () => {
  return (
    <div className="full h-screen flex justify-center items-center font-[sahel] flex-col">
      <div>
        <div className="mb-10 text-3xl whitespace-pre-wrap font-bold leading-[4rem]">
          {
            "خطایی در دریافت اطلاعات رخ داده است.\nلطفا اتصال به اینترنت خود را بررسی کنید و دوباره تلاش کنید"
          }
        </div>
        <Link href={"/"}>
          <a className="border-2 border-gray-800 px-6 py-2 text-xl">
            بازگشت به صفحه اصلی
          </a>
        </Link>
      </div>
    </div>
  );
};

export default DataError;
