import React from "react";
import { Link } from "react-router-dom";
import notFoundImage from "@/assets/images/404.gif";

export const NotFound = () => {
  return (
    <div className="w-dvw flex flex-col items-center justify-center page-bg px-4 sm:px-0 h-dvh">
      <div>
        <img src={notFoundImage} className="w-72 h-72" />
      </div>
      <h1
        className="text-center text-white font-medium"
        style={{ fontSize: "clamp(1.5rem, 9vw, 35px)" }}
      >
        Page Not Found!!!
      </h1>
      <p className="my-6 text-center font-normal text-gray-200 text-sm sm:text-base">
        The Page you are looking for could not be found.
      </p>
      <Link
        to={"/"}
        className="bg-[var(--base-color)] font-[inherit] font-medium text-sm py-4 px-10 rounded-xl hover:opacity-75 duration-300"
      >
        Go back to Homepage
      </Link>
    </div>
  );
};
