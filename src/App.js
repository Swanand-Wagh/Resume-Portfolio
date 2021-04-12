import React from "react";
import "./App.css";
import LeftContainer from "./Pages/LeftContainer";
import MainContainer from "./Pages/MainContainer";

function App() {
  return (
    <>
      <div className="app">
        <div className="app-body">
          <LeftContainer />
          <MainContainer />
        </div>
      </div>
    </>
  );
}

export default App;
