import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changeSortBy, addHeadingName } from "../features/cards/cardsSlice";

function CategoryRecursive({ data }) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const dispatch = useDispatch();

  const handleClick = (id, name) => {
    setSelected(id === selected ? null : id);
    setOpen(!open);
    dispatch(changeSortBy(name));
    dispatch(addHeadingName(name));
  };
  return (
    <div style={{ paddingLeft: "20px", fontWeight: "bold" }}>
      {data.map((parent) => {
        return (
          <div key={parent.id}>
            <span
              className={selected === parent.id ? "selected" : ""}
              onClick={() => handleClick(parent.id, parent.name)}
            >
              {parent.name}
            </span>
            {open && parent.child && <CategoryRecursive data={parent.child} />}
          </div>
        );
      })}
    </div>
  );
}

export default CategoryRecursive;
