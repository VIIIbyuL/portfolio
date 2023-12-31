// eslint-disable-next-line no-unused-vars
import React from "react";

import Navbar from "./Navbar";
import Text from "./Text";
import Navchild from "./Navchild";

import { ReactComponent as Contact } from "../icons/about.svg";
import { ReactComponent as About } from "../icons/contact.svg";
import { ReactComponent as Home } from "../icons/home.svg";

function Navigation() {
  return (
    <div>
      <Navbar>
        <div className="flex items-center">
          <Text></Text>
        </div>

        <div className="flex items-center space-x-6 pr-5">
          <Navchild
            function="/home"
            icon={<Home className="w-10 h-10" />}
          ></Navchild>
          <Navchild
            function="/about"
            icon={<About className="w-10 h-10" />}
          ></Navchild>
          <Navchild
            function="/contact"
            icon={<Contact className="w-10 h-10" />}
          ></Navchild>
        </div>
      </Navbar>
    </div>
  );
}

export default Navigation;
