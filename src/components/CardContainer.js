import React, { useState, useEffect } from "react";
import { FeaturedList } from "../data/featuredIList";
import { CardsData } from "../data/cardsData";
import CardsComponent from "./CardsComponent";
import { useSelector } from "react-redux";

function CardContainer() {
  const { sortBy } = useSelector((state) => state.cards);
  const { headingName } = useSelector((state) => state.cards);
  const [featuredName, setFeaturedName] = useState("Featured");

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      const cart = new Array(24);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  let indexOfLastItem = currentPage * itemsPerPage;
  let indexOfFirstItem = indexOfLastItem - itemsPerPage;

  let currentItems = CardsData.slice(indexOfFirstItem, indexOfLastItem);

  if (sortBy === "Male") {
    currentItems = CardsData.filter((data) => data.gender === "Male");
  } else if (sortBy === "Female") {
    currentItems = CardsData.filter((data) => data.gender === "Female");
    indexOfLastItem = currentPage * itemsPerPage;
    indexOfFirstItem = indexOfLastItem - itemsPerPage;
    currentItems = currentItems.slice(indexOfFirstItem, indexOfLastItem);
  }

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(CardsData.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const handleClick = (name) => {
    setFeaturedName(name);
  };

  const renderName = () => {
    const names = [];
    for (let i = 0; i < headingName.length; i++) {
      names.push(
        i === headingName.length - 1 ? (
          <h4 key={i}>{headingName[i]}</h4>
        ) : (
          <h4 key={i}>{`${headingName[i]} > `}</h4>
        )
      );
    }
    return names;
  };

  return (
    <>
      <div style={{ height: "5%", display: "flex", flexDirection: "row" }}>
        <div style={{ width: "50%", display: "flex", alignItems: "center" }}>
          <div style={{ display: "flex", flexDirection: "row" }}>
            {renderName()}
          </div>
        </div>
        <div
          style={{
            width: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <div className="dropdown">
            <button
              className="btn btn-light dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{ border: "2px solid", borderColor: "inherit" }}
            >
              Sort by {featuredName}
            </button>
            <ul className="dropdown-menu">
              {FeaturedList.map(({ name }) => (
                <li key={name} onClick={() => handleClick(name)}>
                  <div className="dropdown-item">{name}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div style={{ height: "auto" }}>
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr 1fr",
            paddingTop: "20px",
          }}
        >
          {currentItems.map((data) => (
            <CardsComponent data={data} key={data.id} />
          ))}
        </div>
      </div>
      <div
        style={{
          marginTop: "20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <nav>
          <ul className="pagination">
            <li className="page-item">
              <a
                className="page-link"
                href="/"
                onClick={() => setCurrentPage(currentPage - 1)}
                disabled={currentPage === 1}
              >
                Previous
              </a>
            </li>
            {pageNumbers.map((number) => (
              <li key={number} className="page-item">
                <button
                  className="page-link"
                  onClick={() => setCurrentPage(number)}
                  style={{
                    fontWeight: currentPage === number ? "bold" : "normal",
                  }}
                >
                  {number}
                </button>
              </li>
            ))}
            <li className="page-item">
              <button
                className="page-link"
                onClick={() => setCurrentPage(currentPage + 1)}
                disabled={currentPage === pageNumbers.length}
              >
                Next
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default CardContainer;
