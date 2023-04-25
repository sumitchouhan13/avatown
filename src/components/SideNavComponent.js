import React from "react";
import CategoryRecursive from "./CategoryRecursive";
import { CategoryData } from "../data/categoryData";
import CheckBoxComponent from "./CheckBoxComponent";
import { SideNavData } from "../data/sideNavData";

function SideNavComponent() {
  return (
    <>
      <div>
        <div>
          <h4 style={{ fontWeight: "900" }}>Category</h4>
        </div>
        <div>
          <CategoryRecursive data={CategoryData} />
        </div>
      </div>
      {SideNavData.map(({ heading, options }) => (
        <div key={heading} style={{ marginTop: "20px" }}>
          <div>
            <h4 style={{ fontWeight: "900" }}>{heading}</h4>
          </div>
          <div>
            <CheckBoxComponent data={options} />
          </div>
        </div>
      ))}
    </>
  );
}

export default SideNavComponent;
