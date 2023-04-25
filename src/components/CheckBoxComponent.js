import React, { useState } from "react";

function CheckBoxComponent({ data }) {
  const [checkedState, setCheckedState] = useState(
    new Array(data.length).fill(false)
  );

  const handleCheckboxChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);
  };

  return (
    <div style={{ paddingLeft: "20px", fontWeight: "bold" }}>
      {data.map((data, index) => (
        <div
          key={data.subOption}
          style={{ display: "flex", alignItems: "center" }}
        >
          <input
            type="checkbox"
            checked={checkedState[index]}
            onChange={() => handleCheckboxChange(index)}
          />
          <label style={{ marginLeft: "10px" }}>{data.subOption}</label>
        </div>
      ))}
    </div>
  );
}

export default CheckBoxComponent;
