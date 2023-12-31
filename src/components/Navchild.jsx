/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Navchild(props) {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setOpen(!open);
    navigate(props.function);
  };

  return (
    <li>
      <button onClick={handleClick} className="nav-bar-ani nav-bar-click">
        {props.icon}
      </button>
    </li>
  );
}

export default Navchild;
