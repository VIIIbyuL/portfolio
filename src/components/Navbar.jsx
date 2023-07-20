/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";

function Navbar(props) {
  return (
    <nav>
      <ul className="grid grid-cols-12 bg-[#1A1A1A] rounded-br-full rounded-bl-full">{props.children}</ul>
    </nav>
  );
}

export default Navbar;
