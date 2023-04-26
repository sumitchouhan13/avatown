import React, { useState } from "react";
import { FeaturedList } from "../data/featuredIList";
import { CardsData } from "../data/cardsData";
import CardsComponent from "./CardsComponent";

function CardContainer() {
  const [featuredName, setFeaturedName] = useState("Featured");

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const currentItems = CardsData.slice(indexOfFirstItem, indexOfLastItem);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(CardsData.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const handleClick = (name) => {
    setFeaturedName(name);
  };

  return (
    <>
      <div style={{ height: "5%", display: "flex", flexDirection: "row" }}>
        <div style={{ width: "50%", display: "flex", alignItems: "center" }}>
          <h2>All Items</h2>
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
            <CardsComponent data={data} key={data.image} />
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
