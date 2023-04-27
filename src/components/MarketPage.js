import React from "react";
import SideNavComponent from "./SideNavComponent";
import CardContainer from "./CardContainer";

function MarketPage() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "row",
        width: "100%",
      }}
    >
      <div style={{ width: "20%", padding: "20px" }}>
        <SideNavComponent />
      </div>
      <div
        style={{
          width: "80%",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <CardContainer />
      </div>
    </div>
  );
}

export default MarketPage;
