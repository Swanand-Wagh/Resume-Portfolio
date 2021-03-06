import React from "react";
import LeftContainer from "./Pages/LeftContainer";
import MainContainer from "./Pages/MainContainer";
import Panel from "./Pages/Panel";
import "./App.css";

function App() {
  return (
    <>
      <div className="app">
        <div className="app-body">
          <LeftContainer />
          <MainContainer />
        </div>
        <Panel />
      </div>
    </>
  );
}

export default App;
