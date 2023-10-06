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
    <div className=" h-1/4 mt-10 w-full flex justify-center items-center">
      <ul className="grid grid-cols-4 grid-rows-2 md:w-1/2 w-screen md:gap-4 p-4 bg-[#222222] rounded-full shadow-lg shadow-black">
        <li className="flex justify-center items-center h-20">
          <HTML className="lg:h-20 lg:w-20 h-14 w-14" />
        </li>
        <li className="flex justify-center items-center h-20">
          <CSS className="lg:h-20 lg:w-20 h-14 w-14" />
        </li>
        <li className="flex justify-center items-center h-20">
          <JAVA className="lg:h-20 lg:w-20 h-14 w-14" />
        </li>
        <li className="flex justify-center items-center h-20">
          <JAVASCRIPT className="lg:h-20 lg:w-20 h-14 w-14" />
        </li>
        <li className="flex justify-center items-center h-20">
          <PYTHON className="lg:h-20 lg:w-20 h-14 w-14" />
        </li>
        <li className="flex justify-center items-center h-20">
          <SQL className="lg:h-20 lg:w-20 h-14 w-14" />
        </li>
        <li className="flex justify-center items-center h-20">
          <REACT className="lg:h-20 lg:w-20 h-14 w-14" />
        </li>
        <li className="flex justify-center items-center h-20">
          <TAILWIND className="lg:h-20 lg:w-20 h-14 w-14" />
        </li>
      </ul>
    </div>
  );
}

export default SkillsBar;
