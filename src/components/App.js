import React from "react";
import Nav from "./Nav";
import Body from "./Body";

import "./App.css";

const App = () => {
  return (
    <div>
      <Nav userName={"t.joblonski"} />

      <Body />
    </div>
  );
};

export default App;
