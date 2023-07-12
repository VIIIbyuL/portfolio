// eslint-disable-next-line no-unused-vars
import React from "react";

function SkillsBar() {
    return (
        <div className="bg-[#808080] h-[250px] w-full flex justify-center">
            <ul className="grid grid-cols-4 grid-rows-2 w-1/2">
                <li className="flex text-center justify-center items-center">
                    react
                </li>

                <li className="flex text-center justify-center items-center">tailwind</li>
                <li className="flex text-center justify-center items-center">htmml</li>
                <li className="flex text-center justify-center items-center">css</li>
                <li className="flex text-center justify-center items-center">javascript</li>
                <li className="flex text-center justify-center items-center">python</li>
                <li className="flex text-center justify-center items-center">java</li>
                <li className="flex text-center justify-center items-center">sql</li>
            </ul>
        </div>
    )
}

export default SkillsBar;