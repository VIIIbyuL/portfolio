/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";

function Navbar(props) {
  return (
    <nav>
      <ul className="grid grid-cols-12 bg-[#00ADB5]">{props.children}</ul>
    </nav>
  );
}

export default Navbar;
