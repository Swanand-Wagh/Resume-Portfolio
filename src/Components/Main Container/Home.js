import React from "react";

function Home() {
  return (
    <>
      <div
        id="HOME"
        style={{ display: "grid", placeItems: "center", height: "100%" }}
      >
        <div className="text-center">
          <p
            style={{
              color: "white",
              fontSize: "60px",
              fontWeight: "600",
              margin: "0",
            }}
          >
            Swanand Wagh
          </p>
          <p style={{ color: "orange", fontSize: "21px", margin: "5px 0px" }}>
            React Developer & Game Developer
          </p>
        </div>
      </div>
    </>
  );
}

export default Home;
