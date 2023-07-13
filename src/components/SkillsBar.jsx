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
    <div className="absolute bottom-0 mt-10 bg-[#393E46] h-[250px] w-full flex justify-center">
      <ul className="grid grid-cols-4 grid-rows-2 w-1/2 mt-5">
        <li className="flex text-center justify-center items-center w-20 h-20">
          <HTML />
        </li>
        <li className="flex text-center justify-center items-center w-20 h-20">
          <CSS />
        </li>
        <li className="flex text-center justify-center items-center w-20 h-20">
          <JAVASCRIPT />
        </li>
        <li className="flex text-center justify-center items-center w-20 h-20">
          <JAVA />
        </li>
        <li className="flex text-center justify-center items-center w-20 h-20">
          <PYTHON />
        </li>
        <li className="flex text-center justify-center items-center w-20 h-20">
          <SQL />
        </li>
        <li className="flex text-center justify-center items-center w-20 h-20">
          <REACT />
        </li>
        <li className="flex text-center justify-center items-center w-20 h-20">
          <TAILWIND />
        </li>
      </ul>
    </div>
  );
}

export default SkillsBar;
