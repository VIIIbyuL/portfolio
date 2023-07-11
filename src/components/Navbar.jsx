/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";

function Navbar(props) {
  return (
    <nav>
      <ul className="flex gap-5 items-center align-middle justify-end bg-slate-400">
        {props.children}
      </ul>
    </nav>
  );
}

export default Navbar;
