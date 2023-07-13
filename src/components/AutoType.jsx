// eslint-disable-next-line no-unused-vars
import React from "react";
import Typewriter from "typewriter-effect";

const AutoType = () => {
  return (
    <div className="flex justify-center items-center mt-20 font-extrabold text-8xl">
      <Typewriter
        options={{
          strings: ["john kim.", "passionate designer."],
          autoStart: true,
          loop: true,
          delay: 200,
        }}
      />
    </div>
  );
};

export default AutoType;
