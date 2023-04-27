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
          {data.subOption === "VRChat(Quest)" ? (
            <div
              style={{
                borderRadius: "50%",
                height: "15px",
                width: "15px",
                marginLeft: "10px",
                backgroundColor: "#7FFFD4",
              }}
            ></div>
          ) : data.subOption === "VRChat(PCVR)" ? (
            <div
              style={{
                borderRadius: "50%",
                height: "15px",
                width: "15px",
                marginLeft: "10px",
                backgroundColor: "#00FFFF",
              }}
            ></div>
          ) : (
            ""
          )}
        </div>
      ))}
    </div>
  );
}

export default CheckBoxComponent;
