/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { ReactComponent as Github } from "../icons/github.svg";
import { ReactComponent as LinkedIn } from "../icons/linkedin.svg";
import {ReactComponent as Email} from "../icons/email.svg";

function ContactMe() {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div className="bg-[#1A1A1A] overflow-scroll w-7/12 h-1/2 p-5 rounded-lg">
        <div className="w-full mt-10">
          As a rising junior at Boston University, studying computer science,
          I'm passionate about exploring the world of technology. I love coding
          and solving complex challenges. Check out some of my projects on
          GitHub:
        </div>

        <ul className="flex flex-row mt-10 justify-evenly ">
          <li>icon1</li>
          <li>icon2</li>
          <li>icon3</li>
        </ul>

        <div className="w-full mt-10">
          I'm open to collaborations and always seeking new opportunities to
          learn and grow. Feel free to connect with me:
        </div>

        <ul className="flex flex-row mt-5  justify-evenly ">
          <li>
            <a
              href="https://github.com/VIIIbyuL"
              target="_blank"
              rel="noreferrer"
            >
              <Github className="h-12 w-12" />
            </a>
          </li>

          <li>
            <a
              href="https://www.linkedin.com/in/john-kim-b04807264/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedIn className="h-12 w-12" />
            </a>
          </li>
          <li>
            <a href="mailto: myjjk03@gmail.com"
                target = "_blank"
                rel= "noreferrer">
                    <Email className="h-12 w-12"/>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ContactMe;
