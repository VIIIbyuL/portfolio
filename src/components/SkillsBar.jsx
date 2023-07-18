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
    <div className="fixed bottom-0 h-1/4 mt-10 bg-[#393E46] w-full flex justify-center items-center">
      <ul className="grid grid-cols-4 grid-rows-2 w-1/2 mt-5 gap-4">
        <li className="flex justify-center items-center h-20">
          <HTML className="h-full w-full" />
        </li>
        <li className="flex justify-center items-center h-20">
          <CSS className="h-full w-full" />
        </li>
        <li className="flex justify-center items-center h-20">
          <JAVASCRIPT className="h-full w-full" />
        </li>
        <li className="flex justify-center items-center h-20">
          <JAVA className="h-full w-full" />
        </li>
        <li className="flex justify-center items-center h-20">
          <PYTHON className="h-full w-full" />
        </li>
        <li className="flex justify-center items-center h-20">
          <SQL className="h-full w-full" />
        </li>
        <li className="flex justify-center items-center h-20">
          <REACT className="h-full w-full" />
        </li>
        <li className="flex justify-center items-center h-20">
          <TAILWIND className="h-full w-full" />
        </li>
      </ul>
    </div>
  );
}

export default SkillsBar;
