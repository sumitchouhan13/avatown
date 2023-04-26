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
              <h5 style={{ color: "blue", fontWeight: "1000" }}>
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
              <button
                type="button"
                className="btn btn-warning"
                style={{ width: "80%" }}
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
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
                style={{ width: "80%" }}
                onClick={(event) => handleClick(id, cartItems[id - 1], event)}
              >
                {cartItems[id - 1] !== null
                  ? "Remove from Cart"
                  : "Add to Cart"}
              </button>
            </div>
            <div>
              <div
                className="modal fade"
                id="exampleModal"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h1 className="modal-title fs-5" id="exampleModalLabel">
                        Buy Now
                      </h1>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <div>
                        <span>Saved Cards</span>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                            defaultChecked
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexRadioDefault1"
                          >
                            Ending with xxxx xxxx 1234
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault2"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexRadioDefault2"
                          >
                            Ending with xxxx xxxx 5678
                          </label>
                        </div>
                      </div>
                      <div
                        className="input-group flex-nowrap"
                        style={{ marginTop: "20px" }}
                      >
                        <span className="input-group-text" id="addon-wrapping">
                          Total
                        </span>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Username"
                          aria-label="Username"
                          aria-describedby="addon-wrapping"
                          value={"$ " + (selectedCardData.price - 5)}
                          disabled={true}
                        />
                      </div>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                      <button
                        type="button"
                        className="btn btn-primary"
                        data-bs-dismiss="modal"
                        onClick={() => alert("Order Placed Successfully !!")}
                      >
                        Confirm
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ItemComponent;
