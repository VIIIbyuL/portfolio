// eslint-disable-next-line no-unused-vars
import React from "react";

import Navbar from "./Navbar";
import Text from "./Text";
import Navchild from "./Navchild";

import { ReactComponent as Article } from "../icons/article.svg";
import { ReactComponent as Cellphone } from "../icons/cellphone.svg";
import { ReactComponent as Location } from "../icons/location.svg";

function Navigation() {
  return (
    <div>
      <Navbar>
        <Text></Text>
        <Navchild
          function="/home"
          icon={<Article className="w-10 h-10" />}
        ></Navchild>
        <Navchild
          function="/about"
          icon={<Cellphone className="w-10 h-10" />}
        ></Navchild>
        <Navchild
          function="/contact"
          icon={<Location className="w-10 h-10" />}
        ></Navchild>
      </Navbar>
    </div>
  );
}

export default Navigation;
