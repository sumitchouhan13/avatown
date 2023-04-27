import React, { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { IoShareOutline } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { RiStarSFill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { addToCart, removeItem } from "../features/cart/cartSlice";
import { addLikedCards, removeLikedCards } from "../features/cards/cardsSlice";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function CardsComponent({ data }) {
  const { likedCards } = useSelector((state) => state.cards);
  const { cartItems } = useSelector((state) => state.cart);
  const [clicked, setClicked] = useState(false);

  const dispatch = useDispatch();

  const handleHeartClick = (id) => {
    setClicked(!clicked);
    if (clicked) {
      dispatch(addLikedCards(id - 1));
    } else {
      dispatch(removeLikedCards(id - 1));
    }
  };

  const handleClick = (id, data, event) => {
    let cartContent = localStorage.getItem("cart");
    cartContent = cartContent ? JSON.parse(cartContent) : [];
    if (event.target.innerText === "Add") {
      const itemIndex = cartContent[id];
      if (itemIndex === null) {
        cartContent[id - 1] = Object.assign(data);
      }
      localStorage.setItem("cart", JSON.stringify(cartContent));
      dispatch(addToCart(data));
      return;
    }
    cartContent[id - 1] = null;
    localStorage.setItem("cart", JSON.stringify(cartContent));
    dispatch(removeItem(id));
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

        <Link to={`/item/${data.id}`} style={{ textDecoration: "none" }}>
          <button
            type="button"
            className={`${
              cartItems[data.id - 1] !== null
                ? "btn btn-danger"
                : "btn btn-primary"
            }`}
            style={{
              position: "absolute",
              top: "10%",
              left: "85%",
              transform: "translate(-50%, -50%)",
            }}
            onClick={(event) => handleClick(data.id, data, event)}
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
                {cartItems[data.id - 1] !== null ? "Remove" : "Add"}
              </div>
            </div>
          </button>
        </Link>
      </div>
      <div style={{ paddingLeft: "10px", paddingRight: "10px" }}>
        <h5 style={{ fontWeight: "bold" }}>{data.name}</h5>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>{renderStars(data.rating)}</div>
          <div>{data.likes}</div>
          <div>
            <AiOutlineHeart
              className={`heart-icon ${
                clicked || likedCards[data.id - 1] ? "filled" : ""
              }`}
              style={{ borderColor: clicked ? "red" : "initial" }}
              onClick={() => handleHeartClick(data.id)}
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
              backgroundColor: "#00FFFF",
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
