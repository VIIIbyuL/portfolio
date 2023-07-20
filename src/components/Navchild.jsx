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
    <li className="col-span-1">
      <button onClick={handleClick} className="nav-bar-ani">{props.icon}</button>
    </li>
  );
}

export default Navchild;
