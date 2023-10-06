// eslint-disable-next-line no-unused-vars
import React from "react";
import Typewriter from "typewriter-effect";

const AutoType = () => {
  return (
    <div className="flex justify-center items-center  mt-20 p-10 font-extrabold text-xl md:text-5xl">
      <Typewriter
        options={{
          strings: [
            "john kim.",
            "creative mind.",
            "innovative thinker.",
            "adaptive problem solver.",
            "passionate creator.",
            "detail-oriented.",
            "collaborative spirit.",
            "continuous learner.",
          ],
          autoStart: true,
          loop: true,
          delay: 100,
        }}
      />
    </div>
  );
};

export default AutoType;
