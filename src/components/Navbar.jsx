/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";

function Navbar(props) {
  return (
    <nav>
      <ul className="flex justify-between flex-row bg-[#1A1A1A]  shadow-md shadow-black">
        {props.children}
      </ul>
    </nav>
  );
}

export default Navbar;
