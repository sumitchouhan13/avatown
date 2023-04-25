import React from "react";
import SideNavComponent from "./SideNavComponent";
import CardContainer from "./CardContainer";

function MarketPage() {
  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "row" }}>
      <div style={{ width: "20%", padding: "20px" }}>
        <SideNavComponent />
      </div>
      <div style={{ width: "80%", padding: "20px" }}>
        <CardContainer />
      </div>
    </div>
  );
}

export default MarketPage;
