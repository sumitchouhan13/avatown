import React from "react";
import { CardsData } from "../data/cardsData";
import { useParams } from "react-router-dom";
import { RiStarSFill } from "react-icons/ri";
import { useSelector } from "react-redux";
import { addToCart, removeItem } from "../features/cart/cartSlice";
import { useDispatch } from "react-redux";

function ItemComponent() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);
  const selectedCardData = CardsData[id - 1];
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= rating; i++) {
      stars.push(<RiStarSFill key={i} className="star-icon" fontSize={20} />);
    }
    return stars;
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

  return (
    <>
      <div
        style={{
          height: "80vh",
          margin: "20px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            width: "20%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div>
            <img
              src={selectedCardData.image}
              alt="selectedCard"
              style={{ maxWidth: "100%", borderRadius: "10%" }}
            />
          </div>
        </div>
        <div
          style={{
            width: "50%",
            paddingTop: "50px",
            paddingLeft: "50px",
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
            borderRadius: "10%",
          }}
        >
          <div>
            <h1 style={{ fontWeight: "900" }}>{selectedCardData.name}</h1>
          </div>
          <div>
            <h2>Gender - {selectedCardData.gender}</h2>
          </div>
          <div>
            <h3>by {selectedCardData.profile}</h3>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <div>
              {selectedCardData.rating} {renderStars(selectedCardData.rating)}
            </div>
            <div
              style={{
                marginLeft: "20px",
              }}
            >
              <h4>{selectedCardData.likes}</h4>
            </div>
          </div>
          <div>
            <h2>Price - $ {selectedCardData.price}</h2>
          </div>
          <div
            style={{
              boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
              height: "auto",
              width: "90%",
            }}
          >
            <h3 style={{ fontWeight: "800", padding: "20px" }}>
              Virtual reality (VR) avatars are digital representations of users
              in virtual environments. They allow users to interact with each
              other in immersive experiences, and can be customized to reflect
              individual preferences and personalities.
            </h3>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "20%",
          }}
        >
          <div
            style={{
              padding: "20px",
              boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
              borderRadius: "10%",
              height: "50%",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "5%",
              }}
            >
              <h3 style={{ color: "green" }}>In stock</h3>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "5%",
              }}
            >
              <h5 style={{ color: "blue" }}>
                Price After Discount - $ {selectedCardData.price - 5}
              </h5>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "5%",
              }}
            >
              <button type="button" className="btn btn-warning">
                Buy Now
              </button>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "5%",
              }}
            >
              <button
                type="button"
                className={`${
                  cartItems[id - 1] !== null
                    ? "btn btn-danger"
                    : "btn btn-primary"
                }`}
                onClick={(event) => handleClick(id, cartItems[id - 1], event)}
              >
                {cartItems[id - 1] !== null
                  ? "Remove from Cart"
                  : "Add to Cart"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ItemComponent;
