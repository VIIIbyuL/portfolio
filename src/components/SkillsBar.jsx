// eslint-disable-next-line no-unused-vars
import React from "react";
import { ReactComponent as HTML } from "../icons/html.svg";
import { ReactComponent as CSS } from "../icons/css.svg";
import { ReactComponent as JAVA } from "../icons/java.svg";
import { ReactComponent as JAVASCRIPT } from "../icons/javascript.svg";
import { ReactComponent as PYTHON } from "../icons/python.svg";
import { ReactComponent as SQL } from "../icons/sql.svg";
import { ReactComponent as REACT } from "../icons/react.svg";
import { ReactComponent as TAILWIND } from "../icons/tailwind.svg";

function SkillsBar() {
  return (
    <div className="fixed bottom-0 h-1/4 mt-10 w-full flex justify-center items-center">
      <ul className="grid grid-cols-4 grid-rows-2 lg:w-1/2 md:w-screen mt-5 lg:gap-8 md:gap-2 bg-[#222222] p-10 rounded-full">
        <li className="flex justify-center items-center h-20">
          <HTML className="lg:h-20 lg:w-20 sm:h-10 sm:w-10 skill-bar-ani" />
        </li>
        <li className="flex justify-center items-center h-20">
          <CSS className="lg:h-20 lg:w-20 sm:h-10 sm:w-10 skill-bar-ani" />
        </li>
        <li className="flex justify-center items-center h-20">
          <JAVA className="lg:h-20 lg:w-20 sm:h-10 sm:w-10 skill-bar-ani" />
        </li>
        <li className="flex justify-center items-center h-20">
          <JAVASCRIPT className="lg:h-20 lg:w-20 sm:h-10 sm:w-10 skill-bar-ani" />
        </li>
        <li className="flex justify-center items-center h-20">
          <PYTHON className="lg:h-20 lg:w-20 sm:h-10 sm:w-10 skill-bar-ani" />
        </li>
        <li className="flex justify-center items-center h-20">
          <SQL className="lg:h-20 lg:w-20 sm:h-10 sm:w-10 skill-bar-ani" />
        </li>
        <li className="flex justify-center items-center h-20">
          <REACT className="lg:h-20 lg:w-20 sm:h-10 sm:w-10 skill-bar-ani" />
        </li>
        <li className="flex justify-center items-center h-20">
          <TAILWIND className="lg:h-20 lg:w-20 sm:h-10 sm:w-10 skill-bar-ani" />
        </li>
      </ul>
    </div>
  );
}

export default SkillsBar;
