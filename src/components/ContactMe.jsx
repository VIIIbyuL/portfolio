/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { ReactComponent as Github } from "../icons/github.svg";
import { ReactComponent as LinkedIn } from "../icons/linkedin.svg";
import { ReactComponent as Email } from "../icons/email.svg";

function ContactMe() {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div className="bg-[#1A1A1A] w-7/12 p-5 rounded-lg text-center shadow-lg shadow-black">
        <div>
        As a junior at Boston University, majoring in computer science, I have a strong interest in web development. I thoroughly enjoy coding and tackling complex challenges. You can find some of my web development projects on GitHub, and I'm always open to connecting with others in the field.
        </div>

        <ul className="flex flex-row mt-5  justify-evenly ">
          <li>
            <a
              href="https://github.com/VIIIbyuL"
              target="_blank"
              rel="noreferrer"
            >
              <Github className="h-12 w-12 nav-bar-ani nav-bar-click" />
            </a>
          </li>

          <li>
            <a
              href="https://www.linkedin.com/in/john-kim-b04807264/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedIn className="h-12 w-12 nav-bar-ani nav-bar-click" />
            </a>
          </li>
          <li>
            <a
              href="mailto: myjjk03@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <Email className="h-12 w-12 nav-bar-ani nav-bar-click" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ContactMe;
