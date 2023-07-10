// eslint-disable-next-line no-unused-vars
import React from "react";
import Navbar from "./components/Navbar";
import Navchild from "./components/Navchild";

function App() {
  return(
    <div>
        {/* Navbar Wrapping */}
          {/* individial navitems with dropdown menu at the end */}
        <Navbar>
          <Navchild icon = { }></Navchild>
        </Navbar>
        
    </div>
  )
}

export default App;