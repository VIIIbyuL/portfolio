// eslint-disable-next-line no-unused-vars
import React from "react";
import imgMe from "../images/me.jpg";

function Animation() {
  return (
    <div className="mt-20 w-full flex justify-center align-middle">
      <img
        src={imgMe}
        alt="not loading"
        className="ease-animation w-32 h-32 md:w-56 md:h-56 shadow-lg shadow-black rounded-full"
      />
    </div>
  );
}

export default Animation;
