import React, { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { IoShareOutline } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { RiStarSFill } from "react-icons/ri";

function CardsComponent({ data }) {
  const [clicked, setClicked] = useState(false);

  const handleHeartClick = () => {
    setClicked(!clicked);
  };
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= rating; i++) {
      stars.push(<RiStarSFill key={i} className="star-icon" />);
    }
    return stars;
  };
  return (
    <div
      key={data.image}
      className="card"
      style={{ width: "18rem", height: "33rem", marginTop: "10px" }}
    >
      <div style={{ position: "relative" }}>
        <img src={data.image} alt="placeholder" style={{ width: "100%" }} />
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
        <h5 style={{ fontWeight: "bold" }}>{data.name}</h5>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>{renderStars(data.rating)}</div>
          <div>{data.likes}</div>
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
              src={data.image}
              alt="placeholder"
              style={{ width: "100%", borderRadius: "inherit" }}
            />
          </div>
          <div>{data.profile}</div>
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
          <div style={{ fontSize: "30px" }}>{data.price}</div>
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
          <div>{data.madeFor}</div>
        </div>
        <div style={{ display: "flex", alignItems: "flex-end" }}>
          <div
            style={{
              width: "90%",
            }}
          >
            Auto upload service ready, you can use this avatar within 24 hours
          </div>
          <div>
            <IoShareOutline size={25} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardsComponent;
