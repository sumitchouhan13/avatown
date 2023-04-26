import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeItem } from "../features/cart/cartSlice";

function Cart() {
  const { cartItems, amount } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const handleClick = (id) => {
    let cartContent = localStorage.getItem("cart");
    cartContent = cartContent ? JSON.parse(cartContent) : [];
    cartContent[id - 1] = null;
    localStorage.setItem("cart", JSON.stringify(cartContent));
    dispatch(removeItem(id));
  };

  return (
    <div
      style={{
        padding: "20px",
        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
        height: "80vh",
        margin: "20px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "10%",
        }}
      >
        <h1 style={{ fontWeight: "1000" }}>Cart</h1>
      </div>
      <div
        style={{
          height: "90%",
          display: "flex",
        }}
      >
        <div
          style={{
            width: "60%",
            paddingTop: "20px",
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
            height: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "10%",
            }}
          >
            <h4 style={{ fontWeight: "800" }}>Cart Items</h4>
          </div>
          <div style={{ overflowY: "auto", height: "90%" }}>
            {cartItems.map(
              (cartItem) =>
                cartItem && (
                  <div
                    key={cartItem.id}
                    style={{
                      margin: "10px",
                      height: "100px",
                      border: "2px solid",
                      borderColor: "inherit",
                      borderRadius: "10px",
                      padding: "10px",
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <div
                      style={{
                        width: "15%",
                        height: "100%",
                      }}
                    >
                      <img
                        src={cartItem.image}
                        alt="cart_item"
                        style={{
                          height: "100%",
                          width: "100%",
                          border: "2px solid",
                          borderColor: "inherit",
                          borderRadius: "10px",
                        }}
                      />
                    </div>
                    <div style={{ width: "65%", padding: "10px" }}>
                      <h4>{cartItem.name}</h4>
                    </div>
                    <div style={{ width: "10%", paddingTop: "10px" }}>
                      <button
                        type="button"
                        className={`${
                          cartItems[cartItem.id - 1] !== null
                            ? "btn btn-danger"
                            : "btn btn-primary"
                        }`}
                        style={{ width: "100%" }}
                        onClick={() => handleClick(cartItem.id)}
                      >
                        {cartItems[cartItem.id - 1] !== null ? "Remove" : "Add"}
                      </button>
                    </div>
                  </div>
                )
            )}
          </div>
        </div>
        <div
          style={{
            width: "40%",
            padding: "20px",
            height: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <h1>Total Amount : $ {amount}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
