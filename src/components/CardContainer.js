import React, { useState } from "react";
import { FeaturedList } from "../data/featuredIList";
import { CardsData } from "../data/cardsData";
import { FaShoppingCart } from "react-icons/fa";
import { RiStarSFill } from "react-icons/ri";
import { AiOutlineHeart } from "react-icons/ai";
import { IoShareOutline } from "react-icons/io5";

function CardContainer() {
  const [featuredName, setFeaturedName] = useState("Featured");

  const [clicked, setClicked] = useState(false);

  const handleHeartClick = () => {
    setClicked(!clicked);
  };

  const handleClick = (name) => {
    setFeaturedName(name);
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= rating; i++) {
      stars.push(<RiStarSFill key={i} className="star-icon" />);
    }
    return stars;
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
      <div style={{ height: "95%" }}>
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr 1fr",
            paddingTop: "20px",
          }}
        >
          {CardsData.map(
            ({
              image,
              name,
              gender,
              rating,
              likes,
              profile,
              price,
              madeFor,
            }) => (
              <div
                key={image}
                className="card"
                style={{ width: "18rem", height: "33rem", marginTop: "10px" }}
              >
                <div style={{ position: "relative" }}>
                  <img
                    src={image}
                    alt="placeholder"
                    style={{ width: "100%" }}
                  />
                  <button
                    type="button"
                    className="btn btn-primary"
                    style={{
                      position: "absolute",
                      top: "10%",
                      left: "85%",
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    <div style={{ display: "flex", flexDirection: "row" }}>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          marginRight: "5px",
                        }}
                      >
                        <FaShoppingCart size={10} />
                      </div>
                      <div
                        style={{
                          fontSize: "10px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        Add
                      </div>
                    </div>
                  </button>
                </div>
                <div style={{ paddingLeft: "10px", paddingRight: "10px" }}>
                  <h5 style={{ fontWeight: "bold" }}>{name}</h5>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <div>{renderStars(rating)}</div>
                    <div>{likes}</div>
                    <div>
                      <AiOutlineHeart
                        className={`heart-icon ${clicked ? "filled" : ""}`}
                        style={{ borderColor: clicked ? "red" : "initial" }}
                        onClick={handleHeartClick}
                      />
                    </div>
                  </div>
                  <div style={{ display: "flex" }}>
                    <div
                      style={{
                        borderRadius: "50%",
                        height: "20px",
                        width: "20px",
                        marginRight: "10px",
                      }}
                    >
                      <img
                        src={image}
                        alt="placeholder"
                        style={{ width: "100%", borderRadius: "inherit" }}
                      />
                    </div>
                    <div>{profile}</div>
                  </div>
                  <div style={{ display: "flex" }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <div>$</div>
                    </div>
                    <div style={{ fontSize: "30px" }}>{price}</div>
                  </div>
                  <div style={{ display: "flex" }}>
                    <div
                      style={{
                        borderRadius: "50%",
                        height: "20px",
                        width: "20px",
                        marginRight: "10px",
                        backgroundColor: "blue",
                      }}
                    ></div>
                    <div>{madeFor}</div>
                  </div>
                  <div style={{ display: "flex", alignItems: "flex-end" }}>
                    <div
                      style={{
                        width: "90%",
                      }}
                    >
                      Auto upload service ready, you can use this avatar within
                      24 hours
                    </div>
                    <div>
                      <IoShareOutline size={25} />
                    </div>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
}

export default CardContainer;
